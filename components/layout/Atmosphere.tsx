export function Atmosphere() {
  return (
    <>
      {/* grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[90] opacity-[.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
      {/* vignette */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[80]"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 30%, transparent 55%, rgba(0,0,0,.55) 100%)",
        }}
      />
      {/* fine grid */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] mask-fade-radial"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </>
  );
}
