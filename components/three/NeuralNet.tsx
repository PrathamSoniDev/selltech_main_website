"use client";

import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

/**
 * Procedurally generated "neural network" — random nodes on a sphere shell
 * connected with thin cyan edges when within a distance threshold.
 */
export function NeuralNet({
  pointer,
}: {
  pointer: React.MutableRefObject<{ x: number; y: number }>;
}) {
  const ref = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    for (let i = 0; i < 24; i++) {
      const r = 2.05;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      nodes.push(
        new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        )
      );
    }
    const positions: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 1.4) {
          positions.push(
            nodes[i].x, nodes[i].y, nodes[i].z,
            nodes[j].x, nodes[j].y, nodes[j].z
          );
        }
      }
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geom;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.1 + pointer.current.x * 0.4;
      ref.current.rotation.x = -t * 0.06 + pointer.current.y * 0.3;
    }
  });

  return (
    <lineSegments ref={ref} geometry={geometry}>
      <lineBasicMaterial color="#00D4FF" transparent opacity={0.25} />
    </lineSegments>
  );
}
