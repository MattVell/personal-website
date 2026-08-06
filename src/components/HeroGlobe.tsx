"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let rotationAngle = 0;

    const size = 520;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const radius = 175;
    const centerX = size / 2;
    const centerY = size / 2;

    // Approximate simplified latitude/longitude point coordinates for continents
    const landPoints: [number, number][] = [
      // North America
      [40, -100], [50, -110], [60, -120], [30, -90], [25, -80], [45, -75], [55, -85],
      // South America
      [-10, -60], [-20, -55], [-30, -65], [0, -50], [-40, -70],
      // Europe
      [50, 10], [60, 20], [45, 15], [55, 30], [40, 0],
      // Africa
      [20, 15], [10, 20], [0, 25], [-10, 30], [-20, 25], [-30, 20],
      // Asia
      [60, 80], [50, 90], [40, 100], [30, 110], [20, 80], [35, 135], [55, 60],
      // Australia
      [-25, 135], [-30, 140], [-20, 130]
    ];

    const render = () => {
      ctx.clearRect(0, 0, size, size);
      rotationAngle += 0.005;

      // 1. Central Ambient Glow
      const glowGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.2,
        centerX,
        centerY,
        radius * 1.35
      );
      glowGrad.addColorStop(0, "rgba(34, 197, 94, 0.25)");
      glowGrad.addColorStop(0.5, "rgba(34, 197, 94, 0.08)");
      glowGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // 2. Base Sphere Silhouette Circle
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(6, 11, 16, 0.75)";
      ctx.fill();
      ctx.strokeStyle = "rgba(34, 197, 94, 0.6)";
      ctx.lineWidth = 1.5;
      ctx.shadowColor = "#22c55e";
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.restore();

      // Clip subsequent latitude/longitude lines to globe circle
      ctx.save();
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius - 1, 0, Math.PI * 2);
      ctx.clip();

      // 3. Draw Longitude Lines (Vertical Meridiens)
      const meridians = 14;
      ctx.strokeStyle = "rgba(34, 197, 94, 0.22)";
      ctx.lineWidth = 1;

      for (let i = 0; i < meridians; i++) {
        const lon = (i * (Math.PI / meridians)) + rotationAngle;
        const widthX = Math.cos(lon) * radius;

        ctx.beginPath();
        ctx.ellipse(centerX, centerY, Math.abs(widthX), radius, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 4. Draw Latitude Lines (Horizontal Parallels)
      const parallels = 10;
      for (let i = 1; i <= parallels; i++) {
        const lat = -radius + (i * (2 * radius)) / (parallels + 1);
        const rLat = Math.sqrt(radius * radius - lat * lat);

        ctx.beginPath();
        ctx.ellipse(centerX, centerY + lat, rLat, rLat * 0.25, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 5. Draw 3D Land Points / Continent Nodes
      landPoints.forEach(([latDeg, lonDeg]) => {
        const lat = (latDeg * Math.PI) / 180;
        const lon = (lonDeg * Math.PI) / 180 + rotationAngle;

        // 3D Projection
        const x = radius * Math.cos(lat) * Math.sin(lon);
        const y = -radius * Math.sin(lat);
        const z = radius * Math.cos(lat) * Math.cos(lon);

        if (z > 0) {
          const ptX = centerX + x;
          const ptY = centerY + y * 0.85;
          const alpha = Math.min(1, Math.max(0.2, z / radius));

          ctx.beginPath();
          ctx.arc(ptX, ptY, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(74, 222, 128, ${alpha})`;
          ctx.shadowColor = "#22c55e";
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      ctx.restore(); // end clip

      // 6. Draw 3 Tilted Orbital Glowing Rings around the globe
      const orbitalRings = [
        { rx: radius * 1.22, ry: radius * 0.38, tilt: -0.45, speed: 1 },
        { rx: radius * 1.32, ry: radius * 0.45, tilt: 0.35, speed: -1.2 },
        { rx: radius * 1.15, ry: radius * 0.32, tilt: 0.1, speed: 0.8 },
      ];

      orbitalRings.forEach((ring, idx) => {
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(ring.tilt);

        // Ring line
        ctx.beginPath();
        ctx.ellipse(0, 0, ring.rx, ring.ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(34, 197, 94, ${0.35 + idx * 0.1})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Orbiting glowing light dot on ring
        const dotAngle = rotationAngle * ring.speed + idx * 2.1;
        const dotX = ring.rx * Math.cos(dotAngle);
        const dotY = ring.ry * Math.sin(dotAngle);

        ctx.beginPath();
        ctx.arc(dotX, dotY, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#4ade80";
        ctx.shadowColor = "#22c55e";
        ctx.shadowBlur = 12;
        ctx.fill();

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-square flex items-center justify-center select-none">
      
      {/* Central Ambient Glow Backdrop */}
      <div className="absolute inset-0 m-auto w-[420px] h-[420px] bg-emerald-500/20 rounded-full blur-[90px] pointer-events-none -z-10 animate-pulse" />

      {/* Interactive 3D Wireframe Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-contain pointer-events-none drop-shadow-[0_0_35px_rgba(34,197,94,0.3)]"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Floating Glassmorphism Cards (Matching User Mockup) */}

      {/* Card 1: Top-Left Available for Hire Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          opacity: { duration: 0.8, delay: 0.2 },
        }}
        className="absolute top-[12%] left-[0%] sm:-left-[4%] z-20 bg-[#0c1017]/85 backdrop-blur-xl border border-white/15 rounded-2xl px-5 py-3.5 shadow-[0_15px_35px_rgba(0,0,0,0.55)] flex items-center gap-3.5 min-w-[200px]"
      >
        <span className="relative flex h-3 w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_#22c55e]"></span>
        </span>
        <div>
          <div className="text-[11px] text-gray-400 font-medium">Status:</div>
          <div className="text-xs sm:text-sm font-bold text-white tracking-wide">
            Available for hire
          </div>
        </div>
      </motion.div>

      {/* Card 2: Top-Right Code Editor Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          opacity: { duration: 0.8 },
        }}
        className="absolute top-[8%] right-[0%] sm:-right-[4%] z-20 w-[240px] sm:w-[270px] bg-[#0c1017]/80 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center gap-1.5 pb-2 mb-3 border-b border-white/10">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          <span className="text-[10px] font-mono text-gray-400 ml-2">App.tsx</span>
        </div>
        <pre className="font-mono text-[11px] sm:text-xs leading-relaxed text-gray-300 overflow-hidden">
          <code>
            <span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-emerald-300">&quot;react&quot;</span>;<br /><br />
            <span className="text-purple-400">function</span> <span className="text-blue-400">App</span>() &#123;<br />
            &nbsp;&nbsp;<span className="text-purple-400">return</span> (<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-pink-400">div</span> <span className="text-cyan-300">className</span>=<span className="text-emerald-300">&quot;p-4 bg-black<br />&nbsp;&nbsp;&nbsp;&nbsp;text-green-500&quot;</span>&gt;<span className="text-white">Hello World!</span>&lt;/<span className="text-pink-400">div</span>&gt;<br />
            &nbsp;&nbsp;);<br />
            &#125;<br /><br />
            <span className="text-purple-400">export default</span> App;
          </code>
        </pre>
      </motion.div>



    </div>
  );
}
