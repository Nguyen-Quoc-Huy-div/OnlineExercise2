import { useEffect, useRef } from "react";
import "./App.css";

const AnimatedCircle = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let size = 30;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, size, 0, Math.PI * 2);
      ctx.fillStyle = "yellow";
      ctx.fill();

      size += 1;
      if (size > 200) size = 30; 

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className="canvas-container">
      <canvas ref={canvasRef} width={500} height={500} className="canvas" />
    </div>
  );
};

export default AnimatedCircle;
