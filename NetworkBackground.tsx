import { useEffect, useRef } from "react";

interface NodePoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let nodes: NodePoint[] = [];
    const NODE_COUNT = 60;
    const CONNECTION_DIST = 160;

    const getHeroHeight = () => {
      const hero = document.getElementById("home");
      return hero ? Math.round(hero.getBoundingClientRect().height) : 0;
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initNodes = () => {
      const heroHeight = getHeroHeight();
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: heroHeight + Math.random() * Math.max(120, canvas.height - heroHeight),
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        radius: Math.random() * 1.6 + 0.8
      }));
    };

    const draw = () => {
      const heroHeight = getHeroHeight();
      const now = Date.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, heroHeight, canvas.width, Math.max(0, canvas.height - heroHeight));
      ctx.clip();

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            const opacity = 1 - dist / CONNECTION_DIST;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.45})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        node.x += node.vx + Math.sin(now * 0.00038 + node.y * 0.01) * 0.08;
        node.y += node.vy + Math.cos(now * 0.00032 + node.x * 0.01) * 0.08;

        if (node.x < 0) node.x = canvas.width;
        if (node.x > canvas.width) node.x = 0;
        if (node.y < heroHeight) node.y = canvas.height;
        if (node.y > canvas.height) node.y = heroHeight;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.fill();
        ctx.strokeStyle = "rgba(248, 240, 240, 0.95)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();
      animationId = window.requestAnimationFrame(draw);
    };

    const handleResize = () => {
      resize();
      initNodes();
    };

    resize();
    initNodes();
    draw();
    window.addEventListener("resize", handleResize);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" />;
};

export default NetworkBackground;
