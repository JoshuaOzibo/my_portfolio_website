"use client";

import { useRef } from "react";

const Magic_Card = ({
  index,
  children,
  className,
  onHover,
  onLeave,
}: {
  index: number;
  children: React.ReactNode;
  className: string;
  onHover?: () => void;
  onLeave?: () => void;
}) => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRefs.current[index];
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      angle = (angle + 360) % 360;

      card.style.setProperty("--start", `${angle + 60}`);
    };

  return (
    <div
      ref={(el) => {
        cardRefs.current[index] = el;
      }}
      onMouseMove={handleMouseMove(index)}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`card card-border timeline-card rounded-xl mb-5 z-[5] relative overflow-hidden ${className}`}
    >
      <div className="glow "></div>
      {children}
    </div>
  );
};

export default Magic_Card;
