import { useEffect, useRef, useState } from "react";
import css from "./App.css";

const gradients = [
  ["red", "white"],
  ["blue", "white"],
  ["purple", "white"],
  ["green", "white"]
];

export default function GradientCanvas() {
  const canvasRef = useRef(null);
  const [colorIndex, setColorIndex] = useState(0);
  let percentage = 0;
  const speed = 0.1;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const draw = () => {
      const [startColor, endColor] = gradients[colorIndex];
      percentage += speed;

      if (percentage >= 100) {
        percentage = 0;
        setColorIndex((prev) => (prev + 1) % gradients.length);
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, startColor);
      gradient.addColorStop(1, endColor);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, (canvas.height * percentage) / 100);

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationFrameId);
  }, [colorIndex]);

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <canvas ref={canvasRef} width={600} height={250} className="skew-x-[75deg] rotate-[-20deg]" />
    </div>
  );
}
