"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import TechStackIcons from "./tech-stack-icons";

interface SkillsGlobeProps {
  technologies: string[];
}

// 3D Globe with logos
function Globe({ technologies }: { technologies: string[] }) {
  const groupRef = useRef<THREE.Group>(null);
  const radius = 3.5; // Increased radius for more icons

  // Auto-rotate the globe
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  // Calculate positions using Fibonacci sphere algorithm
  const logoPositions = useMemo(() => {
    const positions: Array<{ pos: [number, number, number]; tech: string }> = [];
    const total = technologies.length;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < total; i++) {
      const theta = 2 * Math.PI * i / goldenRatio;
      const phi = Math.acos(1 - 2 * (i + 0.5) / total);
      
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      positions.push({
        pos: [x, y, z],
        tech: technologies[i],
      });
    }

    return positions;
  }, [technologies, radius]);

  return (
    <group ref={groupRef}>
      {/* Wireframe Globe */}
      <mesh>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshBasicMaterial
          color="#5eead4"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[radius * 0.98, 32, 32]} />
        <meshBasicMaterial
          color="#5eead4"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Technology logos */}
      {logoPositions.map(({ pos, tech }, index) => (
        <Html
          key={`${tech}-${index}`}
          position={pos}
          center
          distanceFactor={10}
          style={{
            transition: "all 0.2s",
            pointerEvents: "auto",
          }}
        >
          <div
            className="tech-logo-3d"
            style={{
              width: "32px", // Smaller icons for more density
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(15, 23, 42, 0.9)",
              borderRadius: "6px",
              border: "1px solid rgba(94, 234, 212, 0.4)",
              backdropFilter: "blur(4px)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.5)";
              e.currentTarget.style.borderColor = "rgba(94, 234, 212, 1)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(94, 234, 212, 0.6)";
              e.currentTarget.style.zIndex = "10";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.borderColor = "rgba(94, 234, 212, 0.4)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.zIndex = "1";
            }}
            title={tech}
          >
            <TechStackIcons
              technologies={[tech]}
              size={18} // Smaller internal icon
              showNames={false}
            />
          </div>
        </Html>
      ))}
    </group>
  );
}

// ... LoadingFallback stays the same ...

// Main component
export default function SkillsGlobe({ technologies }: SkillsGlobeProps) {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;

  if (isMobile) {
    return (
      <div className="relative bg-surface/50 rounded-3xl border border-border p-6 shadow-xl">
        <h4 className="text-lg font-bold text-text mb-4 text-center">Tech Globe Overview</h4>
        <div className="flex justify-center flex-wrap gap-2">
          <TechStackIcons
            technologies={technologies}
            size={24}
            showNames={false}
            className="justify-center"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[500px] w-full bg-surface/30 rounded-3xl border border-border/50 overflow-hidden group">
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 text-center pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity">
        <p className="text-xs font-medium text-primary tracking-widest uppercase mb-1">Interactive 3D Preview</p>
        <p className="text-[10px] text-muted">Drag to Rotate • Scroll to Zoom</p>
      </div>

      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Globe technologies={technologies} />
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
