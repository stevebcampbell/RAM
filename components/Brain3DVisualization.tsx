'use client';

import { Line, OrbitControls, Sphere, Text } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { FileText, Terminal, Zap } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { useSearch } from '../contexts/SearchContext';

interface MindNode {
  id: number;
  position: [number, number, number];
  size: number;
  label: string;
  color: string;
  connections: number[];
  href: string;
  activity: number; // 0-1 activity level
  category: string;
  keywords: string[]; // Search keywords for this node
}

interface Connection {
  start: [number, number, number];
  end: [number, number, number];
  activity: number;
}

// Enhanced 3D mind nodes with real-time activity and search keywords
const mindNodes3D: MindNode[] = [
  {
    id: 1,
    position: [-3, 2, 1],
    size: 1.2,
    label: 'AI Collaboration',
    color: '#8b5cf6',
    connections: [2, 3, 8],
    href: '/framework',
    activity: 0.8,
    category: 'AI',
    keywords: [
      'ai',
      'artificial',
      'intelligence',
      'collaboration',
      'gpt',
      'machine',
      'learning',
    ],
  },
  {
    id: 2,
    position: [3, 1, -1],
    size: 1.0,
    label: 'Frameworks',
    color: '#f97316',
    connections: [4, 5],
    href: '/framework',
    activity: 0.6,
    category: 'Knowledge',
    keywords: [
      'framework',
      'methodology',
      'system',
      'logic',
      'approach',
      'structure',
    ],
  },
  {
    id: 3,
    position: [-1, -2, 2],
    size: 1.1,
    label: 'Live Thoughts',
    color: '#10b981',
    connections: [6, 7],
    href: '/live-thoughts',
    activity: 0.9,
    category: 'Capture',
    keywords: [
      'live',
      'thoughts',
      'capture',
      'real-time',
      'thinking',
      'mind',
      'stream',
    ],
  },
  {
    id: 4,
    position: [4, -1, 1],
    size: 0.8,
    label: 'Human Evolution',
    color: '#3b82f6',
    connections: [],
    href: '/framework',
    activity: 0.4,
    category: 'Philosophy',
    keywords: [
      'human',
      'evolution',
      'development',
      'consciousness',
      'philosophy',
      'future',
    ],
  },
  {
    id: 5,
    position: [2, -3, -2],
    size: 0.9,
    label: 'Earth Systems',
    color: '#06b6d4',
    connections: [],
    href: '/framework',
    activity: 0.5,
    category: 'Systems',
    keywords: [
      'earth',
      'systems',
      'environment',
      'sustainability',
      'ecology',
      'planet',
    ],
  },
  {
    id: 6,
    position: [-4, -1, -1],
    size: 0.7,
    label: 'Keylogging',
    color: '#14b8a6',
    connections: [],
    href: '/live-thoughts',
    activity: 0.7,
    category: 'Tech',
    keywords: [
      'keylogging',
      'capture',
      'keyboard',
      'input',
      'monitoring',
      'tracking',
    ],
  },
  {
    id: 7,
    position: [0, -4, 0],
    size: 0.8,
    label: 'Real-time Stream',
    color: '#06b6d4',
    connections: [],
    href: '/stream',
    activity: 0.3,
    category: 'Data',
    keywords: ['stream', 'real-time', 'data', 'flow', 'continuous', 'live'],
  },
  {
    id: 8,
    position: [3, 3, 2],
    size: 1.0,
    label: 'Open Tabs',
    color: '#8b5cf6',
    connections: [9],
    href: '/tabs',
    activity: 0.9,
    category: 'Organization',
    keywords: [
      'tabs',
      'browser',
      'organization',
      'multitasking',
      'windows',
      'chaos',
    ],
  },
  {
    id: 9,
    position: [1, 4, -1],
    size: 0.6,
    label: '50+ Active',
    color: '#ec4899',
    connections: [],
    href: '/tabs',
    activity: 1.0,
    category: 'Chaos',
    keywords: ['active', 'multiple', 'many', 'chaos', 'busy', 'overwhelm'],
  },
  {
    id: 10,
    position: [-2, 3, -2],
    size: 0.7,
    label: 'Random Access',
    color: '#eab308',
    connections: [],
    href: '/about',
    activity: 0.6,
    category: 'Mind',
    keywords: ['random', 'access', 'mind', 'nonlinear', 'thinking', 'creative'],
  },
];

// Animated 3D node component
function AnimatedNode({
  node,
  onClick,
  isHovered,
  onHover,
  searchQuery,
}: {
  node: MindNode;
  onClick: (href: string) => void;
  isHovered: boolean;
  onHover: (id: number | null) => void;
  searchQuery: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Determine if this node matches the search
  const isSearchMatch = useMemo(() => {
    if (!searchQuery || searchQuery.length === 0) return true; // Show all when no search

    const query = searchQuery.toLowerCase();
    return (
      node.label.toLowerCase().includes(query) ||
      node.category.toLowerCase().includes(query) ||
      node.keywords.some((keyword) => keyword.toLowerCase().includes(query))
    );
  }, [searchQuery, node]);

  // Determine visual state based on search
  const isSearchActive = searchQuery && searchQuery.length > 0;
  const shouldHighlight = isSearchActive && isSearchMatch;
  const shouldFade = isSearchActive && !isSearchMatch;

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y =
        node.position[1] + Math.sin(state.clock.elapsedTime + node.id) * 0.1;

      // Activity-based pulsing with search enhancement
      let activityScale =
        1 + node.activity * 0.3 * Math.sin(state.clock.elapsedTime * 2);

      // Enhanced pulsing for search matches
      if (shouldHighlight) {
        activityScale += 0.4 * Math.sin(state.clock.elapsedTime * 4); // Faster, more dramatic pulsing
      }

      // Scale for hover and search
      const hoverScale = hovered || isHovered ? 1.3 : 1;
      const searchScale = shouldHighlight ? 1.2 : shouldFade ? 0.7 : 1;

      meshRef.current.scale.setScalar(activityScale * hoverScale * searchScale);

      // Rotation based on activity and search
      const rotationSpeed = node.activity * 0.01 + (shouldHighlight ? 0.02 : 0);
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group position={node.position}>
      <Sphere
        ref={meshRef}
        args={[node.size, 32, 32]}
        onClick={() => onClick(node.href)}
        onPointerOver={() => {
          setHovered(true);
          onHover(node.id);
        }}
        onPointerOut={() => {
          setHovered(false);
          onHover(null);
        }}
      >
        <meshStandardMaterial
          color={node.color}
          transparent
          opacity={shouldFade ? 0.3 : 0.8}
          emissive={node.color}
          emissiveIntensity={
            shouldHighlight
              ? node.activity * 0.6 + 0.4 // Brighter glow for search matches
              : shouldFade
              ? node.activity * 0.1 // Dimmer for non-matches
              : node.activity * 0.3 // Normal
          }
        />
      </Sphere>

      {/* Activity ring with search enhancement */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[node.size * 1.2, node.size * 1.4, 32]} />
        <meshBasicMaterial
          color={shouldHighlight ? '#ffffff' : node.color}
          transparent
          opacity={
            shouldHighlight
              ? node.activity * 0.8 + 0.4 // Bright ring for matches
              : shouldFade
              ? node.activity * 0.2 // Faded ring for non-matches
              : node.activity * 0.5 // Normal
          }
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Label - Always show for search matches when searching */}
      {(hovered || isHovered || shouldHighlight) && (
        <Text
          position={[0, node.size + 1, 0]}
          fontSize={shouldHighlight ? 0.4 : 0.3}
          color={shouldHighlight ? '#ffffff' : 'white'}
          anchorX="center"
          anchorY="middle"
        >
          {node.label}
        </Text>
      )}

      {/* Search highlight indicator */}
      {shouldHighlight && (
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[node.size * 2, 16, 16]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.1}
            wireframe
          />
        </mesh>
      )}
    </group>
  );
}

// Animated connection lines
function AnimatedConnection({
  connection,
  activity,
}: {
  connection: Connection;
  activity: number;
}) {
  const lineRef = useRef<any>(null);

  useFrame((state) => {
    if (lineRef.current) {
      // Animate the line material opacity based on activity
      lineRef.current.material.opacity =
        0.3 + activity * 0.4 * Math.sin(state.clock.elapsedTime * 3);
    }
  });

  const points = useMemo(
    () => [
      new THREE.Vector3(...connection.start),
      new THREE.Vector3(...connection.end),
    ],
    [connection]
  );

  return (
    <Line
      ref={lineRef}
      points={points}
      color="#8b5cf6"
      lineWidth={2}
      transparent
      opacity={0.5}
    />
  );
}

// Central brain with pulsing animation
function CentralBrain() {
  const brainRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (brainRef.current) {
      // Gentle pulsing
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
      brainRef.current.scale.setScalar(pulse);

      // Slow rotation
      brainRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Sphere ref={brainRef} args={[1.5, 64, 64]}>
        <meshStandardMaterial
          color="#8b5cf6"
          transparent
          opacity={0.6}
          emissive="#4c1d95"
          emissiveIntensity={0.2}
        />
      </Sphere>

      {/* Central brain core */}
      <Sphere args={[1.0, 32, 32]}>
        <meshStandardMaterial
          color="#c084fc"
          transparent
          opacity={0.8}
          emissive="#7c3aed"
          emissiveIntensity={0.4}
        />
      </Sphere>
    </group>
  );
}

// Particle system for neural activity
function NeuralParticles() {
  const particlesRef = useRef<THREE.Points>(null);

  const particleCount = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#8b5cf6"
        size={0.05}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// Main 3D Scene component
function BrainScene({
  onNodeClick,
  nodeActivities,
  setNodeActivities,
}: {
  onNodeClick: (href: string) => void;
  nodeActivities: { [key: number]: number };
  setNodeActivities: React.Dispatch<
    React.SetStateAction<{ [key: number]: number }>
  >;
}) {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const { searchQuery } = useSearch(); // Get search query from context

  // Simulate real-time activity updates
  useEffect(() => {
    const interval = setInterval(() => {
      setNodeActivities((prev) => {
        const newActivities = { ...prev };
        mindNodes3D.forEach((node) => {
          // Simulate activity fluctuations
          newActivities[node.id] = Math.max(
            0.1,
            Math.min(
              1.0,
              (prev[node.id] || node.activity) + (Math.random() - 0.5) * 0.3
            )
          );
        });
        return newActivities;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [setNodeActivities]);

  // Generate connections with search-aware styling
  const connections = useMemo(() => {
    const conns: Connection[] = [];
    const isSearchActive = searchQuery && searchQuery.length > 0;

    mindNodes3D.forEach((node) => {
      // Check if this node matches search
      const nodeMatches =
        !isSearchActive ||
        node.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        node.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        node.keywords.some((keyword) =>
          keyword.toLowerCase().includes(searchQuery.toLowerCase())
        );

      node.connections.forEach((targetId) => {
        const target = mindNodes3D.find((n) => n.id === targetId);
        if (target) {
          // Check if target matches search
          const targetMatches =
            !isSearchActive ||
            target.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
            target.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            target.keywords.some((keyword) =>
              keyword.toLowerCase().includes(searchQuery.toLowerCase())
            );

          // Dim connections when search is active and neither node matches
          let connectionActivity =
            (nodeActivities[node.id] || node.activity) *
            (nodeActivities[target.id] || target.activity);

          if (isSearchActive && !nodeMatches && !targetMatches) {
            connectionActivity *= 0.2; // Very dim for non-matching connections
          } else if (isSearchActive && (nodeMatches || targetMatches)) {
            connectionActivity *= 1.5; // Enhance matching connections
          }

          conns.push({
            start: node.position,
            end: target.position,
            activity: connectionActivity,
          });
        }
      });
    });
    return conns;
  }, [nodeActivities, searchQuery]);

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

      {/* Central Brain */}
      <CentralBrain />

      {/* Mind Nodes */}
      {mindNodes3D.map((node) => (
        <AnimatedNode
          key={node.id}
          node={{
            ...node,
            activity: nodeActivities[node.id] || node.activity,
          }}
          onClick={onNodeClick}
          isHovered={hoveredNode === node.id}
          onHover={setHoveredNode}
          searchQuery={searchQuery}
        />
      ))}

      {/* Connections */}
      {connections.map((connection, index) => (
        <AnimatedConnection
          key={index}
          connection={connection}
          activity={connection.activity}
        />
      ))}

      {/* Neural Particles */}
      <NeuralParticles />

      {/* Camera Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        minDistance={8}
        maxDistance={25}
      />
    </>
  );
}

// Real-time stats component
function RealtimeStats({
  nodeActivities,
}: {
  nodeActivities: { [key: number]: number };
}) {
  const [stats, setStats] = useState({
    totalConnections: 0,
    averageActivity: 0,
    peakNode: '',
    networkHealth: 0,
  });

  useEffect(() => {
    const activities = Object.values(nodeActivities);
    const avgActivity =
      activities.length > 0
        ? activities.reduce((a, b) => a + b, 0) / activities.length
        : 0;

    // Safe reduce with proper fallback
    const entries = Object.entries(nodeActivities);
    const peakNodeId =
      entries.length > 0
        ? entries.reduce((a, b) =>
            nodeActivities[parseInt(a[0])] > nodeActivities[parseInt(b[0])]
              ? a
              : b
          )[0]
        : '1'; // fallback to first node

    const peakNode =
      mindNodes3D.find((n) => n.id === parseInt(peakNodeId))?.label ||
      'AI Collaboration';

    setStats({
      totalConnections: mindNodes3D.reduce(
        (sum, node) => sum + node.connections.length,
        0
      ),
      averageActivity: avgActivity,
      peakNode,
      networkHealth: Math.min(100, avgActivity * 100),
    });
  }, [nodeActivities]);

  return (
    <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-sm rounded-xl p-4 text-white">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-2xl font-bold text-green-400">
            {stats.totalConnections}
          </div>
          <div className="text-green-200">Active Links</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-400">
            {Math.round(stats.networkHealth)}%
          </div>
          <div className="text-blue-200">Network Health</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-purple-400">
            {stats.averageActivity.toFixed(2)}
          </div>
          <div className="text-purple-200">Avg Activity</div>
        </div>
        <div>
          <div className="text-lg font-bold text-orange-400 truncate">
            {stats.peakNode}
          </div>
          <div className="text-orange-200">Peak Node</div>
        </div>
      </div>
    </div>
  );
}

export default function Brain3DVisualization() {
  const { searchQuery } = useSearch();
  const [nodeActivities, setNodeActivities] = useState<{
    [key: number]: number;
  }>(() => {
    // Initialize with default activities
    const initial: { [key: number]: number } = {};
    mindNodes3D.forEach((node) => {
      initial[node.id] = node.activity;
    });
    return initial;
  });

  const handleNodeClick = (href: string) => {
    window.location.href = href;
  };

  // Calculate search matches
  const searchMatches = useMemo(() => {
    if (!searchQuery || searchQuery.length === 0)
      return { total: mindNodes3D.length, matches: mindNodes3D.length };

    const query = searchQuery.toLowerCase();
    const matches = mindNodes3D.filter(
      (node) =>
        node.label.toLowerCase().includes(query) ||
        node.category.toLowerCase().includes(query) ||
        node.keywords.some((keyword) => keyword.toLowerCase().includes(query))
    );

    return { total: mindNodes3D.length, matches: matches.length };
  }, [searchQuery]);

  return (
    <div className="h-full relative bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-hidden">
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <BrainScene
          onNodeClick={handleNodeClick}
          nodeActivities={nodeActivities}
          setNodeActivities={setNodeActivities}
        />
      </Canvas>

      {/* Central Title Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
        <h1 className="text-5xl font-bold text-white mb-2 opacity-90">
          RandomAccessMind
        </h1>
        <p className="text-xl text-purple-200 opacity-80">
          Steve Campbell's Neural Network
        </p>
        <div className="mt-4 text-sm text-purple-300 opacity-70">
          Click nodes to explore • Drag to rotate • Scroll to zoom
        </div>

        {/* Search Status */}
        {searchQuery && searchQuery.length > 0 && (
          <div className="mt-4 px-4 py-2 bg-black/40 backdrop-blur-sm rounded-lg border border-purple-500/30">
            <div className="text-sm text-white">
              Search:{' '}
              <span className="text-purple-300 font-semibold">
                "{searchQuery}"
              </span>
            </div>
            <div className="text-xs text-purple-200">
              {searchMatches.matches} of {searchMatches.total} nodes match
            </div>
          </div>
        )}
      </div>

      {/* Real-time Stats */}
      <RealtimeStats nodeActivities={nodeActivities} />

      {/* Quick Actions */}
      <div className="absolute bottom-6 right-6 space-y-3">
        <Link
          href="/live-thoughts"
          className="flex items-center gap-2 bg-green-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-green-700/80 transition-all border border-green-500/30"
        >
          <Terminal className="h-4 w-4" />
          Live Thoughts
        </Link>
        <Link
          href="/framework"
          className="flex items-center gap-2 bg-orange-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-orange-700/80 transition-all border border-orange-500/30"
        >
          <FileText className="h-4 w-4" />
          Frameworks
        </Link>
        <Link
          href="/stream"
          className="flex items-center gap-2 bg-blue-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-blue-700/80 transition-all border border-blue-500/30"
        >
          <Zap className="h-4 w-4" />
          Stream
        </Link>
      </div>
    </div>
  );
}
