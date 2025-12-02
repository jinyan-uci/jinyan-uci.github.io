import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
}

const LaserBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize handler
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Mouse handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      // Clear with trail effect
      ctx.fillStyle = 'rgba(2, 6, 23, 0.15)'; // Dark slate with alpha for trails
      // Check for light mode via class on html/body (simplified check)
      const isLight = document.documentElement.classList.contains('dark') === false;
      if (isLight) {
        ctx.fillStyle = 'rgba(248, 250, 252, 0.2)';
      }
      
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add new point at mouse position
      if (mouseRef.current) {
        pointsRef.current.push({
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          age: 0
        });
      }

      // Draw Laser Path
      ctx.beginPath();
      // Laser Color
      ctx.strokeStyle = isLight ? 'rgba(6, 182, 212, 0.5)' : 'rgba(34, 211, 238, 0.8)';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      // Glow effect
      ctx.shadowBlur = 15;
      ctx.shadowColor = isLight ? '#0ea5e9' : '#22d3ee';

      if (pointsRef.current.length > 1) {
        ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);
        
        // Draw Quadratic Bezier curve through points for smoothness
        for (let i = 1; i < pointsRef.current.length - 2; i++) {
          const xc = (pointsRef.current[i].x + pointsRef.current[i + 1].x) / 2;
          const yc = (pointsRef.current[i].y + pointsRef.current[i + 1].y) / 2;
          ctx.quadraticCurveTo(pointsRef.current[i].x, pointsRef.current[i].y, xc, yc);
        }
        
        // Connect the last few points directly
        if (pointsRef.current.length > 2) {
             ctx.lineTo(pointsRef.current[pointsRef.current.length - 1].x, pointsRef.current[pointsRef.current.length - 1].y);
        }
      }
      ctx.stroke();

      // Reset shadow for performance
      ctx.shadowBlur = 0;

      // Update Points (aging)
      pointsRef.current.forEach(p => p.age++);
      // Remove old points (short tail)
      const maxAge = 25; 
      pointsRef.current = pointsRef.current.filter(p => p.age < maxAge);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }} // Allows text to remain readable
    />
  );
};

export default LaserBackground;
