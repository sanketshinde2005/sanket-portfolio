"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron } from "@react-three/drei";
import { useEffect, useRef, useState, Suspense } from "react";
import * as THREE from "three";

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Use state to store computed colors to avoid hydration mismatch
  const [colors, setColors] = useState<{ primary: string; secondary: string } | null>(null);

  useEffect(() => {
    // Access CSS variables after mount
    const style = getComputedStyle(document.documentElement);
    // Properly format colors from CSS vars (usually in hex or rgb)
    // We'll fallback to standard colors if variables aren't parsed correctly by Three.js directly
    // Ideally, we pass simple hexes or let styling handle it, but for Three.js materials we need values.
    // For safety/simplicity in this demo, we'll use a neutral approach that tints with the theme.
    // We can just use a standard color and let blending do the work, or try to read them.
    // Let's use a subtle approach:
    const primary = style.getPropertyValue('--primary').trim() || '#38BDF8';
    const secondary = style.getPropertyValue('--secondary').trim() || '#818CF8';
    
    setColors({ primary, secondary });
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  if (!colors) return null;

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Icosahedron args={[1, 15]} ref={meshRef} scale={2.8}>
        <MeshDistortMaterial
          color={colors.primary}
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.4}
          transparent
          opacity={0.15}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
}

export default function HeroBackground3D() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden opacity-60 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]} // limit pixel ratio for performance
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedShape />
        </Suspense>
      </Canvas>
    </div>
  );
}
