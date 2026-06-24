// "use client";

// import { Suspense, useEffect, useRef } from "react";
// import { Canvas, useThree } from "@react-three/fiber";
// import { AISphere } from "./AISphere";
// import { Particles } from "./Particles";
// import { NeuralNet } from "./NeuralNet";
// import { OrbitRings } from "./OrbitRings";
// import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
// import { useIsMobile } from "@/hooks/useIsMobile";

// function ParallaxCamera({
//   pointer,
// }: {
//   pointer: React.MutableRefObject<{ x: number; y: number }>;
// }) {
//   const { camera } = useThree();
//   const target = useRef({ x: 0, y: 0 });
//   useEffect(() => {
//     let raf = 0;
//     const tick = () => {
//       target.current.x += (pointer.current.x - target.current.x) * 0.04;
//       target.current.y += (pointer.current.y - target.current.y) * 0.04;
//       camera.position.x = target.current.x * 0.4;
//       camera.position.y = -target.current.y * 0.4;
//       camera.lookAt(0, 0, 0);
//       raf = requestAnimationFrame(tick);
//     };
//     raf = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf);
//   }, [camera, pointer]);
//   return null;
// }

// /**
//  * Cinematic WebGL hero — a rotating AI sphere wrapped in a neural network,
//  * holographic rings and an additive particle field. Falls back gracefully:
//  * - mobile or `prefers-reduced-motion` ⇒ no WebGL, only the CSS aurora beams
//  * - any runtime WebGL error ⇒ Suspense + ErrorBoundary keeps the page rendered.
//  */
// export function HeroScene() {
//   const pointer = useRef({ x: 0, y: 0 });
//   const reduced = usePrefersReducedMotion();
//   const isMobile = useIsMobile();

//   useEffect(() => {
//     const onMove = (e: PointerEvent) => {
//       pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
//       pointer.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
//     };
//     window.addEventListener("pointermove", onMove);
//     return () => window.removeEventListener("pointermove", onMove);
//   }, []);

//   if (reduced || isMobile) {
//     return <HeroFallback />;
//   }

//   return (
//     <Canvas
//       className="absolute inset-0 !h-full !w-full"
//       camera={{ position: [0, 0, 7], fov: 55, near: 0.1, far: 100 }}
//       dpr={[1, 2]}
//       gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
//     >
//       <Suspense fallback={null}>
//         <ParallaxCamera pointer={pointer} />
//         <AISphere pointer={pointer} />
//         <OrbitRings />
//         <NeuralNet pointer={pointer} />
//         <Particles />
//       </Suspense>
//     </Canvas>
//   );
// }

// /** No-WebGL fallback — gradient beams only, no GPU cost. */
// function HeroFallback() {
//   return (
//     <div className="absolute inset-0">
//       <div
//         className="absolute -left-[20%] -top-[40%] h-[1100px] w-[1100px] rounded-full"
//         style={{
//           filter: "blur(120px)",
//           opacity: 0.35,
//           background:
//             "radial-gradient(circle,#22D3EE,transparent 60%)",
//         }}
//       />
//       <div
//         className="absolute -right-[20%] -bottom-[50%] h-[1100px] w-[1100px] rounded-full"
//         style={{
//           filter: "blur(120px)",
//           opacity: 0.3,
//           background: "radial-gradient(circle,#8B5CF6,transparent 60%)",
//         }}
//       />
//     </div>
//   );
// }

/// Gemini

"use client";

import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AISphere } from "./AISphere";
import { Particles } from "./Particles";
import { NeuralNet } from "./NeuralNet";
import { OrbitRings } from "./OrbitRings";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useIsMobile } from "@/hooks/useIsMobile";

function ParallaxCamera({
  pointer,
}: {
  pointer: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const target = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    target.current.x += (pointer.current.x - target.current.x) * 0.04;
    target.current.y += (pointer.current.y - target.current.y) * 0.04;

    // Apply parallax offsets to the camera
    state.camera.position.x = target.current.x * 0.4;
    state.camera.position.y = -target.current.y * 0.4;

    // Keep the camera locked on the center of the scene
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

/**
 * Cinematic WebGL hero — a massive rotating AI sphere wrapped in a neural network.
 */
export function HeroScene() {
  const pointer = useRef({ x: 0, y: 0 });
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();

  // Track mouse movements passively on the window
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (reduced || isMobile) {
    return <HeroFallback />;
  }

  return (
    // 1. Strict wrapper to force the canvas to act as a true full-screen background
    // 2. pointer-events-none prevents the canvas from blocking UI clicks (buttons, links)
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden pointer-events-none">
      <Canvas
        className="!h-full !w-full"
        // 3. Moved camera position closer (z: 4.2) and increased FOV to make the sphere massive
        camera={{ position: [0, 0, 4.2], fov: 60, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <ParallaxCamera pointer={pointer} />
          <AISphere pointer={pointer} />
          <OrbitRings />
          <NeuralNet pointer={pointer} />
          <Particles />
        </Suspense>
      </Canvas>
    </div>
  );
}

/** No-WebGL fallback — gradient beams only, no GPU cost. */
function HeroFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -left-[20%] -top-[40%] h-[1100px] w-[1100px] rounded-full"
        style={{
          filter: "blur(120px)",
          opacity: 0.35,
          background: "radial-gradient(circle, #22D3EE, transparent 60%)",
        }}
      />
      <div
        className="absolute -right-[20%] -bottom-[50%] h-[1100px] w-[1100px] rounded-full"
        style={{
          filter: "blur(120px)",
          opacity: 0.3,
          background: "radial-gradient(circle, #8B5CF6, transparent 60%)",
        }}
      />
    </div>
  );
}
