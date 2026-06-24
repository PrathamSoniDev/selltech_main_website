"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

/**
 * The wire-frame icosahedron sphere at the centre of the hero, plus its
 * softer inner-glow shell. Rotates on its own axis and reacts subtly to
 * pointer movement via the parallax target passed in from <HeroScene>.
 */
export function AISphere({
  pointer,
}: {
  pointer: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const outer = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const px = pointer.current.x;
    const py = pointer.current.y;
    if (outer.current) {
      outer.current.rotation.y = t * 0.15 + px * 0.4;
      outer.current.rotation.x = t * 0.08 + py * 0.3;
    }
    if (inner.current) {
      inner.current.rotation.y = -t * 0.2;
      inner.current.rotation.x = t * 0.12;
    }
  });

  const sphereGeom = useMemo(() => new THREE.IcosahedronGeometry(1.85, 4), []);
  const glowGeom = useMemo(() => new THREE.IcosahedronGeometry(1.4, 3), []);

  return (
    <>
      <mesh ref={outer} geometry={sphereGeom}>
        <meshBasicMaterial color="#22D3EE" wireframe transparent opacity={0.55} />
      </mesh>
      <mesh ref={inner} geometry={glowGeom}>
        <meshBasicMaterial color="#8B5CF6" wireframe transparent opacity={0.18} />
      </mesh>
    </>
  );
}
