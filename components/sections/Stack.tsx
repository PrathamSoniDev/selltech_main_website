// "use client";

// import { Reveal, Eyebrow } from "@/components/shared/Reveal";
// import { stackChips, type StackChip } from "@/lib/content";
// import { cn } from "@/lib/utils";
// import { motion } from "framer-motion";
// const RING_R = { 1: 130, 2: 180, 3: 230, 4: 280 } as const;
// const RING_R_MOBILE = { 1: 90, 2: 125, 3: 160, 4: 195 } as const;

// const VARIANT_CLASS: Record<StackChip["variant"], string> = {
//   cyan: "text-brand-cyan    shadow-[0_8px_30px_rgba(0,212,255,.25)]",
//   violet: "text-brand-violet  shadow-[0_8px_30px_rgba(139,92,246,.25)]",
//   magenta: "text-brand-magenta shadow-[0_8px_30px_rgba(232,121,249,.25)]",
//   amber: "text-brand-amber   shadow-[0_8px_30px_rgba(255,181,71,.20)]",
// };

// const LEGEND = [
//   { color: "bg-brand-cyan", label: "Frontend" },
//   { color: "bg-brand-violet", label: "Backend" },
//   { color: "bg-brand-magenta", label: "Data / AI" },
//   { color: "bg-brand-amber", label: "Cloud" },
// ];

// export function Stack() {
//   return (
//     <section id="stack" className="overflow-hidden px-6 py-40">
//       <div className="container-x grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
//         <div>
//           <Reveal>
//             <Eyebrow>The Ecosystem</Eyebrow>
//           </Reveal>
//           <Reveal delay={0.05}>
//             <h2 className="section-title">
//               An <em>opinionated</em> stack, battle-tested across 120 builds.
//             </h2>
//           </Reveal>
//           <Reveal delay={0.1}>
//             <p className="section-sub">
//               We are framework-agnostic but pattern-disciplined. These are the
//               technologies we reach for when the brief says &apos;ship something
//               that lasts&apos;.
//             </p>
//           </Reveal>
//           <Reveal delay={0.15}>
//             <div className="mt-8 flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-2">
//               {LEGEND.map((l) => (
//                 <span key={l.label} className="inline-flex items-center gap-2">
//                   <i
//                     className={cn("inline-block h-2 w-2 rounded-full", l.color)}
//                   />
//                   {l.label}
//                 </span>
//               ))}
//             </div>
//           </Reveal>
//         </div>

//         <OrbitDiagram />
//       </div>
//     </section>
//   );
// }

// function OrbitDiagram() {
//   return (
//     <div
//       aria-hidden
//       className="relative aspect-square w-full"
//       style={{
//         maskImage: "radial-gradient(circle, #000 65%, transparent 95%)",
//       }}
//     >
//       {/* core */}
//       <div
//         className="absolute left-1/2 top-1/2 z-[5] flex h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full font-display text-[30px] leading-none text-[#04060f]"
//         style={{
//           background:
//             "radial-gradient(circle at 30% 30%, #fff, #22D3EE 35%, #8B5CF6 90%)",
//           boxShadow:
//             "0 0 80px rgba(0,212,255,.55), inset 0 0 30px rgba(255,255,255,.5)",
//         }}
//       >
//         <span className="bg-[linear-gradient(90deg,#04060f,#1a1f3d)] bg-clip-text text-transparent">
//           Sell<b className="font-normal">Tech</b>
//         </span>
//         <i className="mt-2 font-mono text-[9px] not-italic uppercase tracking-[0.18em] text-[#1a1f3d]">
//           Engineering OS
//         </i>
//       </div>

//       {/* rings */}
//       {([1, 2, 3, 4] as const).map((ring) => (
//         <motion.div
//           key={ring}
//           className="absolute left-1/2 top-1/2"
//           animate={{
//             rotate: ring % 2 === 0 ? -360 : 360,
//           }}
//           transition={{
//             duration: 20 + ring * 8,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           style={{
//             x: "-50%",
//             y: "-50%",
//           }}
//         >
//           <div
//             className={cn(
//               "rounded-full border border-white/10",
//               ring === 4 ? "border-solid opacity-50" : "border-dashed",
//             )}
//             style={{
//               width:
//                 ring === 1
//                   ? "46%"
//                   : ring === 2
//                     ? "64%"
//                     : ring === 3
//                       ? "82%"
//                       : "100%",
//               height:
//                 ring === 1
//                   ? "46%"
//                   : ring === 2
//                     ? "64%"
//                     : ring === 3
//                       ? "82%"
//                       : "100%",
//             }}
//           />
//         </motion.div>
//       ))}

//       {/* chips */}
//       {stackChips.map((chip) => (
//         <Chip key={chip.label} chip={chip} />
//       ))}

//       <style jsx>{`
//         @keyframes orbitSpin {
//           to {
//             transform: translate(-50%, -50%) rotate(360deg);
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// function Chip({ chip }: { chip: StackChip }) {
//   return (
//     <>
//       {/* desktop position */}
//       <span
//         className={cn(
//           "absolute left-1/2 top-1/2 hidden whitespace-nowrap rounded-full border border-line-strong bg-[rgba(7,11,28,.85)] px-3.5 py-2 font-mono text-[11px] tracking-[0.05em] backdrop-blur-md sm:inline-block",
//           VARIANT_CLASS[chip.variant],
//         )}
//         style={{
//           transformOrigin: "0 0",
//           transform: `rotate(${chip.angle}deg) translate(0, ${-RING_R[chip.ring]}px) rotate(${-chip.angle}deg) translate(-50%, -50%)`,
//         }}
//       >
//         {chip.label}
//       </span>
//       {/* mobile position */}
//       <span
//         className={cn(
//           "absolute left-1/2 top-1/2 inline-block whitespace-nowrap rounded-full border border-line-strong bg-[rgba(7,11,28,.85)] px-2.5 py-1.5 font-mono text-[10px] tracking-[0.05em] backdrop-blur-md sm:hidden",
//           VARIANT_CLASS[chip.variant],
//         )}
//         style={{
//           transformOrigin: "0 0",
//           transform: `rotate(${chip.angle}deg) translate(0, ${-RING_R_MOBILE[chip.ring]}px) rotate(${-chip.angle}deg) translate(-50%, -50%)`,
//         }}
//       >
//         {chip.label}
//       </span>
//     </>
//   );
// }

//// Gemini ////

"use client";

import { Reveal, Eyebrow } from "@/components/shared/Reveal";
import { stackChips, type StackChip } from "@/lib/content";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const RING_R = { 1: 130, 2: 180, 3: 230, 4: 280 } as const;
const RING_R_MOBILE = { 1: 90, 2: 125, 3: 160, 4: 195 } as const;

const VARIANT_CLASS: Record<StackChip["variant"], string> = {
  cyan: "text-brand-cyan    shadow-[0_8px_30px_rgba(0,212,255,.25)]",
  violet: "text-brand-violet  shadow-[0_8px_30px_rgba(139,92,246,.25)]",
  magenta: "text-brand-magenta shadow-[0_8px_30px_rgba(232,121,249,.25)]",
  amber: "text-brand-amber   shadow-[0_8px_30px_rgba(255,181,71,.20)]",
};

const LEGEND = [
  { color: "bg-brand-cyan", label: "Frontend" },
  { color: "bg-brand-violet", label: "Backend" },
  { color: "bg-brand-magenta", label: "Data / AI" },
  { color: "bg-brand-amber", label: "Cloud" },
];

export function Stack() {
  return (
    <section id="stack" className="overflow-hidden px-6 py-40">
      <div className="container-x grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <Eyebrow>The Ecosystem</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title">
              An <em>opinionated</em> stack, battle-tested across 120 builds.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-sub">
              We are framework-agnostic but pattern-disciplined. These are the
              technologies we reach for when the brief says &apos;ship something
              that lasts&apos;.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-2">
              {LEGEND.map((l) => (
                <span key={l.label} className="inline-flex items-center gap-2">
                  <i
                    className={cn("inline-block h-2 w-2 rounded-full", l.color)}
                  />
                  {l.label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <OrbitDiagram />
      </div>
    </section>
  );
}

function OrbitDiagram() {
  return (
    <div
      aria-hidden
      className="relative aspect-square w-full select-none"
      style={{
        maskImage: "radial-gradient(circle, #000 65%, transparent 95%)",
      }}
    >
      {/* core */}
      <div
        className="absolute left-1/2 top-1/2 z-[5] flex h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full font-display text-[30px] leading-none text-[#04060f]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #fff, #22D3EE 35%, #8B5CF6 90%)",
          boxShadow:
            "0 0 80px rgba(0,212,255,.55), inset 0 0 30px rgba(255,255,255,.5)",
        }}
      >
        <span className="bg-[linear-gradient(90deg,#04060f,#1a1f3d)] bg-clip-text text-transparent">
          Sell<b className="font-normal">Tech</b>
        </span>
        <i className="mt-2 font-mono text-[9px] not-italic uppercase tracking-[0.18em] text-[#1a1f3d]">
          Engineering OS
        </i>
      </div>

      {/* rings */}
      {([1, 2, 3, 4] as const).map((ring) => {
        const isEven = ring % 2 === 0;

        return (
          <motion.div
            key={ring}
            className="absolute left-1/2 top-1/2 flex items-center justify-center"
            animate={{
              rotate: isEven ? -360 : 360,
            }}
            transition={{
              duration: 20 + ring * 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width:
                ring === 1
                  ? "46%"
                  : ring === 2
                    ? "64%"
                    : ring === 3
                      ? "82%"
                      : "100%",
              height:
                ring === 1
                  ? "46%"
                  : ring === 2
                    ? "64%"
                    : ring === 3
                      ? "82%"
                      : "100%",
              x: "-50%",
              y: "-50%",
            }}
          >
            <div
              className={cn(
                "relative h-full w-full rounded-full border border-white/10",
                ring === 4 ? "border-solid opacity-40" : "border-dashed",
              )}
            >
              {/* Orbital energy pulse */}
              <div
                className={cn(
                  "absolute -top-[1px] left-1/2 h-[2px] w-12 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent to-transparent opacity-70 blur-[0.5px]",
                  ring === 1 && "via-brand-cyan shadow-[0_0_8px_#00d4ff]",
                  ring === 2 && "via-brand-violet shadow-[0_0_8px_#8b5cf6]",
                  ring === 3 && "via-brand-magenta shadow-[0_0_8px_#e879f9]",
                  ring === 4 && "via-brand-amber shadow-[0_0_8px_#ffb547]",
                )}
              />
            </div>
          </motion.div>
        );
      })}

      {/* orbiting chips */}
      {stackChips.map((chip) => (
        <Chip key={chip.label} chip={chip} />
      ))}
    </div>
  );
}

function Chip({ chip }: { chip: StackChip }) {
  const isEven = chip.ring % 2 === 0;
  const direction = isEven ? -1 : 1;

  // Multiplied by 1.25 so the Ring's energy pulse visually "laps" the chips
  const duration = (20 + chip.ring * 8) * 1.25;

  const startAngle = chip.angle;
  const endAngle = startAngle + direction * 360;

  const counterStart = -startAngle;
  const counterEnd = -(startAngle + direction * 360);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-20 pointer-events-none"
      animate={{ rotate: [startAngle, endAngle] }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* DESKTOP GONDOLA */}
      <div
        className="absolute hidden sm:block pointer-events-auto"
        style={{
          transform: `translate(-50%, -50%) translateY(-${RING_R[chip.ring]}px)`,
        }}
      >
        <motion.div
          animate={{ rotate: [counterStart, counterEnd] }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center justify-center"
        >
          <span
            className={cn(
              "flex items-center gap-1.5 whitespace-nowrap rounded-full border border-line-strong bg-[rgba(7,11,28,.85)] px-3.5 py-2 font-mono text-[11px] tracking-[0.05em] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-white/40 hover:bg-[rgba(12,18,42,.95)] hover:shadow-xl hover:z-50 cursor-default",
              VARIANT_CLASS[chip.variant],
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current opacity-75 animate-pulse" />
            {chip.label}
          </span>
        </motion.div>
      </div>

      {/* MOBILE GONDOLA */}
      <div
        className="absolute block sm:hidden pointer-events-auto"
        style={{
          transform: `translate(-50%, -50%) translateY(-${RING_R_MOBILE[chip.ring]}px)`,
        }}
      >
        <motion.div
          animate={{ rotate: [counterStart, counterEnd] }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center justify-center"
        >
          <span
            className={cn(
              "flex items-center gap-1 whitespace-nowrap rounded-full border border-line-strong bg-[rgba(7,11,28,.85)] px-2.5 py-1.5 font-mono text-[10px] tracking-[0.05em] backdrop-blur-md transition-all duration-300",
              VARIANT_CLASS[chip.variant],
            )}
          >
            <span className="h-1 w-1 rounded-full bg-current opacity-75 animate-pulse" />
            {chip.label}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
