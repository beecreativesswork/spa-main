"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import * as THREE from "three";

interface FloatingPlaqueProps {
  texture: THREE.Texture;
  prefersReducedMotion: boolean;
}

/**
 * Vedic Wellness Center — Floating 3D Emblem Plaque
 * Renders the emblem logo texture on a thin carved ceramic plaque with an aged bronze rim.
 * Features smooth sine oscillation (-7° to +7°), subtle vertical floating, and damped mouse tilt.
 */
function FloatingEmblemPlaque({ texture, prefersReducedMotion }: FloatingPlaqueProps) {
  const groupRef = useRef<THREE.Group>(null);
  const currentRotX = useRef(0);
  const currentRotY = useRef(0);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    if (prefersReducedMotion) {
      groupRef.current.rotation.set(0, 0, 0);
      groupRef.current.position.y = 0;
      return;
    }

    const t = state.clock.getElapsedTime();

    // 1. Smooth sine oscillation around Y-axis between -7° and +7° (15-second cycle)
    const oscillateY = Math.sin((t / 15) * Math.PI * 2) * (7 * (Math.PI / 180));

    // 2. Subtle damped mouse tilt (max ~3° on X, ~4° on Y)
    const targetMouseX = -state.pointer.y * (3 * (Math.PI / 180));
    const targetMouseY = state.pointer.x * (4 * (Math.PI / 180));

    currentRotX.current = THREE.MathUtils.lerp(currentRotX.current, targetMouseX, delta * 2.5);
    currentRotY.current = THREE.MathUtils.lerp(currentRotY.current, oscillateY + targetMouseY, delta * 2.5);

    groupRef.current.rotation.x = currentRotX.current;
    groupRef.current.rotation.y = currentRotY.current;

    // 3. Gentle floating motion (~5px)
    groupRef.current.position.y = Math.sin(t * 0.6) * 0.04;
  });

  return (
    <group ref={groupRef} position={[0, 0.05, 0]}>
      {/* 1. Transparent Logo Front Face */}
      <mesh position={[0, 0, 0.032]}>
        <planeGeometry args={[2.35, 2.35]} />
        <meshStandardMaterial
          map={texture}
          transparent={true}
          roughness={0.3}
          metalness={0.05}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* 2. Thin Carved Ceramic Backing Plaque (Warm Ivory Ceramic) */}
      <mesh position={[0, 0, -0.015]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.15, 1.15, 0.06, 64]} />
        <meshStandardMaterial
          color="#F7F3EB"
          roughness={0.5}
          metalness={0.05}
        />
      </mesh>

      {/* 3. Thin Outer Bronze Edge Trim */}
      <mesh position={[0, 0, -0.005]}>
        <torusGeometry args={[1.155, 0.018, 32, 128]} />
        <meshStandardMaterial
          color="#A88B52"
          roughness={0.4}
          metalness={0.4}
        />
      </mesh>
    </group>
  );
}

export default function SculpturalCanvas() {
  const [mounted, setMounted] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPrefersReducedMotion(true);
    }

    try {
      const canvas = document.createElement("canvas");
      const isSupported = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
      setHasWebGL(isSupported);

      if (isSupported) {
        const loader = new THREE.TextureLoader();
        loader.load(
          "/images/vedic-wellness-logo-transparent.png",
          (tex) => {
            tex.colorSpace = THREE.SRGBColorSpace;
            tex.minFilter = THREE.LinearFilter;
            tex.magFilter = THREE.LinearFilter;
            tex.generateMipmaps = true;
            tex.needsUpdate = true;
            setTexture(tex);
          },
          undefined,
          () => {
            setLoadFailed(true);
          }
        );
      }
    } catch {
      setHasWebGL(false);
    }
  }, []);

  const staticFallback = (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="relative w-72 h-72 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/vedic-wellness-logo-transparent.png"
          alt="Vedic Wellness Center Emblem"
          className="w-full h-full object-contain drop-shadow-xl"
        />
      </div>
    </div>
  );

  // Fallback if not mounted, no WebGL, load failed, or texture not ready yet
  if (!mounted || !hasWebGL || loadFailed || !texture) {
    return staticFallback;
  }

  return (
    <div className="w-full h-full relative pointer-events-none flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 3.6], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        dpr={[1, 1.5]}
      >
        {/* Soft Warm Studio Lighting */}
        <ambientLight intensity={1.25} color="#FAF6EF" />
        <directionalLight position={[3, 5, 4]} intensity={1.5} color="#FFF5E6" />
        <directionalLight position={[-3, -2, -3]} intensity={0.5} color="#E8DED1" />

        {/* 3D Floating Emblem Plaque wrapped in Suspense */}
        <Suspense fallback={null}>
          <FloatingEmblemPlaque texture={texture} prefersReducedMotion={prefersReducedMotion} />
        </Suspense>

        {/* Soft Contact Shadow Underneath */}
        <ContactShadows
          position={[0, -1.25, 0]}
          opacity={0.25}
          scale={3.8}
          blur={2.4}
          far={3.0}
          color="#2C1A14"
        />
      </Canvas>
    </div>
  );
}
