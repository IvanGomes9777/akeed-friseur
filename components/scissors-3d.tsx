'use client'

import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float } from "@react-three/drei"
import { Suspense, useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"

function makeBladeShape() {
  const s = new THREE.Shape()
  // Tear-drop blade: starts narrow near the pivot, sweeps out to a tip.
  s.moveTo(0, 0)
  s.bezierCurveTo(0.15, -0.05, 0.55, -0.18, 2.2, -0.05)
  s.bezierCurveTo(2.55, 0.0, 2.55, 0.02, 2.2, 0.04)
  s.bezierCurveTo(0.7, 0.12, 0.25, 0.08, 0.08, 0.06)
  s.lineTo(0, 0)
  return s
}

function makeHandleShape() {
  // Oval finger hole, modeled as an outer shape with an inner hole
  const outer = new THREE.Shape()
  const w = 0.85
  const h = 0.6
  outer.absellipse(0, 0, w, h, 0, Math.PI * 2, false, 0)

  const hole = new THREE.Path()
  hole.absellipse(0, 0, w - 0.18, h - 0.18, 0, Math.PI * 2, false, 0)
  outer.holes.push(hole)
  return outer
}

function ScissorHalf({
  flip,
  openAngle,
}: {
  flip: boolean
  openAngle: number
}) {
  const ref = useRef<THREE.Group>(null!)

  const bladeGeom = useMemo(() => {
    const g = new THREE.ExtrudeGeometry(makeBladeShape(), {
      depth: 0.06,
      bevelEnabled: true,
      bevelThickness: 0.015,
      bevelSize: 0.012,
      bevelSegments: 3,
      curveSegments: 24,
    })
    g.translate(0, 0, -0.03)
    g.computeVertexNormals()
    return g
  }, [])

  const handleGeom = useMemo(() => {
    const g = new THREE.ExtrudeGeometry(makeHandleShape(), {
      depth: 0.12,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.018,
      bevelSegments: 4,
      curveSegments: 32,
    })
    g.translate(0, 0, -0.06)
    g.computeVertexNormals()
    return g
  }, [])

  const stemGeom = useMemo(
    () => new THREE.CylinderGeometry(0.05, 0.05, 0.9, 24),
    []
  )

  return (
    <group ref={ref} rotation={[0, 0, flip ? -openAngle : openAngle]}>
      {/* Blade — chrome */}
      <mesh geometry={bladeGeom} castShadow receiveShadow>
        <meshStandardMaterial
          color="#e8e8ec"
          metalness={1}
          roughness={0.18}
          envMapIntensity={1.4}
        />
      </mesh>

      {/* Curved stem connecting blade to handle */}
      <mesh
        geometry={stemGeom}
        position={[-0.45, flip ? 0.35 : -0.35, 0]}
        rotation={[0, 0, flip ? -0.55 : 0.55]}
        castShadow
      >
        <meshStandardMaterial
          color="#c9a16a"
          metalness={0.95}
          roughness={0.28}
        />
      </mesh>

      {/* Handle ring */}
      <mesh
        geometry={handleGeom}
        position={[-1.15, flip ? 0.7 : -0.7, 0]}
        castShadow
      >
        <meshStandardMaterial
          color="#c9a16a"
          metalness={0.9}
          roughness={0.32}
          envMapIntensity={1.1}
        />
      </mesh>
    </group>
  )
}

function Scissors() {
  const group = useRef<THREE.Group>(null!)
  const openRef = useRef(0.14)

  useFrame((state, delta) => {
    if (!group.current) return
    // Continuous Y-rotation
    group.current.rotation.y += delta * 0.55
    // Subtle wobble on X
    group.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.18 - 0.05
    // Open/close cycle for the blades
    const t = state.clock.elapsedTime
    openRef.current = 0.18 + Math.sin(t * 1.2) * 0.12
  })

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.15}
      floatIntensity={0.4}
      floatingRange={[-0.08, 0.08]}
    >
      <group ref={group} position={[1.4, 0, 0]} scale={1.3}>
        <AnimatedHalves openRef={openRef} />
        {/* Pivot bolt at origin */}
        <mesh castShadow>
          <cylinderGeometry args={[0.11, 0.11, 0.16, 32]} />
          <meshStandardMaterial
            color="#1a1a1c"
            metalness={1}
            roughness={0.35}
          />
        </mesh>
        <mesh position={[0, 0, 0.085]} castShadow>
          <cylinderGeometry args={[0.06, 0.06, 0.04, 24]} />
          <meshStandardMaterial color="#d4b577" metalness={1} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  )
}

function AnimatedHalves({
  openRef,
}: {
  openRef: React.MutableRefObject<number>
}) {
  const top = useRef<THREE.Group>(null!)
  const bot = useRef<THREE.Group>(null!)

  useFrame(() => {
    if (top.current) top.current.rotation.z = openRef.current
    if (bot.current) bot.current.rotation.z = -openRef.current
  })

  return (
    <>
      <group ref={top}>
        <ScissorHalf flip={false} openAngle={0} />
      </group>
      <group ref={bot}>
        <ScissorHalf flip={true} openAngle={0} />
      </group>
    </>
  )
}

export function Scissors3D({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className={className} aria-hidden>
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader" />
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <Canvas
        key="scissors-canvas"
        dpr={[1, 2]}
        camera={{ position: [0, 0.2, 6], fov: 38 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={["#0a0907", 8, 14]} />

          <ambientLight intensity={0.25} />
          <directionalLight
            position={[4, 5, 3]}
            intensity={1.4}
            color="#fff3dc"
            castShadow
          />
          <directionalLight
            position={[-3, -2, 2]}
            intensity={0.6}
            color="#c9a16a"
          />
          <pointLight position={[0, 0, 4]} intensity={0.4} color="#e0c08a" />

          <Scissors />

          <Environment preset="warehouse" />
        </Suspense>
      </Canvas>
    </div>
  )
}
