import React, { useState, useEffect, useCallback, useRef } from 'react';
import useMouseTilt from '../../hooks/useMouseTilt';

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

interface Connection {
  source: number;
  target: number;
  active: boolean;
  progress: number;
  speed: number;
}

const HeroAnimation: React.FC = () => {
  const [nodes] = useState<Node[]>([
    { id: 0, x: 85, y: 85, size: 0.8, color: 'rgba(0, 144, 255, 0.4)' },
    { id: 1, x: 15, y: 75, size: 0.6, color: 'rgba(0, 144, 255, 0.2)' },
    { id: 2, x: 75, y: 15, size: 0.6, color: 'rgba(0, 144, 255, 0.2)' },
    { id: 3, x: 25, y: 25, size: 0.5, color: 'rgba(0, 144, 255, 0.15)' },
    { id: 4, x: 65, y: 65, size: 0.5, color: 'rgba(0, 144, 255, 0.15)' },
  ]);

  const [connections, setConnections] = useState<Connection[]>(() => {
    const conns: Connection[] = [];
    for (let i = 1; i < nodes.length; i++) {
      conns.push({
        source: 0,
        target: i,
        active: true,
        progress: Math.random(),
        speed: 0.2 + Math.random() * 0.3,
      });
    }
    return conns;
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const tilt = useMouseTilt(containerRef);

  useEffect(() => {
    const interval = setInterval(() => {
      setConnections((prev) =>
        prev.map((conn) => ({
          ...conn,
          progress: (conn.progress + 0.01 * conn.speed) % 1,
          active: Math.random() > 0.1,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const getPath = useCallback((source: Node, target: Node, progress: number) => {
    const midX = (source.x + target.x) / 2;
    const midY = (source.y + target.y) / 2;
    const curvature = 20;
    const controlX = midX;
    const controlY = midY - curvature;

    const path = `M${source.x},${source.y} Q${controlX},${controlY} ${target.x},${target.y}`;
    const t = progress;
    const x = (1 - t) * (1 - t) * source.x + 2 * (1 - t) * t * controlX + t * t * target.x;
    const y = (1 - t) * (1 - t) * source.y + 2 * (1 - t) * t * controlY + t * t * target.y;

    return { path, point: { x, y } };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX * 0.2}deg) rotateY(${tilt.rotateY * 0.2}deg)`,
        transition: 'transform 0.5s ease-out',
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full opacity-50">
        {/* Subtle background stars */}
        {Array.from({ length: 50 }).map((_, i) => (
          <circle
            key={`star-${i}`}
            cx={Math.random() * 100}
            cy={Math.random() * 100}
            r={0.15 + Math.random() * 0.2}
            fill="rgba(255, 255, 255, 0.3)"
            style={{
              animation: `twinkle ${2 + Math.random() * 2}s infinite alternate`,
            }}
          />
        ))}

        {/* Network connections */}
        {connections.map((conn, idx) => {
          if (!conn.active) return null;
          const source = nodes.find((n) => n.id === conn.source);
          const target = nodes.find((n) => n.id === conn.target);
          if (!source || !target) return null;

          const { path, point } = getPath(source, target, conn.progress);

          return (
            <g key={`conn-${idx}`} className="opacity-30">
              <path
                d={path}
                stroke="rgba(0, 144, 255, 0.2)"
                strokeWidth="0.5"
                fill="none"
              />
              <circle
                cx={point.x}
                cy={point.y}
                r="0.3"
                fill="rgba(0, 144, 255, 0.4)"
              />
            </g>
          );
        })}

        {/* Network nodes */}
        {nodes.map((node) => (
          <circle
            key={`node-${node.id}`}
            cx={node.x}
            cy={node.y}
            r={node.size}
            fill={node.color}
            className="animate-pulse-slow"
          />
        ))}
      </svg>
    </div>
  );
};

export default HeroAnimation;
