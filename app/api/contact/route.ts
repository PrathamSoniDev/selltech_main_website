import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { siteConfig } from "@/lib/seo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ContactSchema = z.object({
  name: z.string().min(2, "Name is too short.").max(120),
  email: z.string().email("A valid email is required."),
  phone: z.string().max(40).optional().or(z.literal("")),
  company: z.string().max(160).optional().or(z.literal("")),
  service: z.string().min(2, "Please pick a service.").max(120),
  message: z.string().min(10, "Tell us a little more about the project.").max(5000),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderEmail(data: z.infer<typeof ContactSchema>) {
  const rows: Array<[string, string]> = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "—"],
    ["Company", data.company || "—"],
    ["Service", data.service],
  ];

  const rowHtml = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid #1d2440;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#7b85a8;width:140px;">${escapeHtml(label)}</td>
          <td style="padding:10px 16px;border-bottom:1px solid #1d2440;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;color:#e6ebff;">${escapeHtml(value)}</td>
        </tr>`,
    )
    .join("");

  const html = `<!doctype html>
<html>
  <body style="margin:0;padding:32px;background:#05081a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#e6ebff;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:620px;margin:0 auto;background:#0b1120;border:1px solid #1d2440;border-radius:18px;overflow:hidden;">
      <tr>
        <td style="padding:28px 28px 18px;background:linear-gradient(120deg,#00D4FF22,#8B5CF622);">
          <div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:#22D3EE;">New brief · selltech</div>
          <h1 style="margin:8px 0 0;font-size:22px;font-weight:500;color:#fff;">${escapeHtml(data.name)} wants to talk.</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:0 12px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
            ${rowHtml}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 28px 28px;">
          <div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#7b85a8;margin-bottom:8px;">Project details</div>
          <div style="font-size:14px;line-height:1.6;color:#e6ebff;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
        </td>
      </tr>
    </table>
    <p style="max-width:620px;margin:18px auto 0;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10px;color:#535d80;text-align:center;letter-spacing:0.1em;">Delivered by ${escapeHtml(siteConfig.name)} · ${escapeHtml(siteConfig.url)}</p>
  </body>
</html>`;

  const text = `New brief from ${data.name}

${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}

Project details:
${data.message}
`;

  return { html, text };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    return NextResponse.json(
      { error: first?.message ?? "Invalid form submission." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? siteConfig.contact.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Selltech <onboarding@resend.dev>";

  if (!apiKey) {
    // Soft-success in dev when the key is missing so the UI can be exercised.
    if (process.env.NODE_ENV !== "production") {
      console.warn("[contact] RESEND_API_KEY missing — logging payload instead.");
      console.warn(parsed.data);
      return NextResponse.json({ ok: true, dev: true });
    }
    return NextResponse.json(
      { error: "Email service is not configured. Please email us directly." },
      { status: 500 },
    );
  }

  const { html, text } = renderEmail(parsed.data);

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: parsed.data.email,
      subject: `New brief · ${parsed.data.name} · ${parsed.data.service}`,
      html,
      text,
    });

    if (result.error) {
      console.error("[contact] resend error", result.error);
      return NextResponse.json(
        { error: "We could not deliver your brief. Please email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, id: result.data?.id ?? null });
  } catch (err) {
    console.error("[contact] unexpected", err);
    return NextResponse.json(
      { error: "Something went wrong sending your brief." },
      { status: 500 },
    );
  }
}
