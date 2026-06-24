"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const RING_DATA = [
  { r: 2.40, color: "#E879F9", speed:  0.10, rx: Math.PI / 2,         ry: 0.0 },
  { r: 2.75, color: "#00D4FF", speed: -0.14, rx: Math.PI / 2 + 0.4,   ry: 0.6 },
  { r: 3.10, color: "#E879F9", speed:  0.18, rx: Math.PI / 2 + 0.8,   ry: 1.2 },
];

export function OrbitRings() {
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    refs.current.forEach((m, i) => {
      if (m) m.rotation.z = t * RING_DATA[i].speed;
    });
  });

  return (
    <>
      {RING_DATA.map((ring, i) => (
        <mesh
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          rotation={[ring.rx, ring.ry, 0]}
        >
          <torusGeometry args={[ring.r, 0.005, 12, 200]} />
          <meshBasicMaterial color={ring.color} transparent opacity={0.4} />
        </mesh>
      ))}
    </>
  );
}
