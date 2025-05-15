"use client";

import { useRef } from "react";

const Magic_Card = ({
  card,
  index,
  children,
  className,
  onHover,
  onLeave,
}: {
  card: any;
  index: number;
  children: React.ReactNode;
  className: string;
  onHover?: () => void;
  onLeave?: () => void;
}) => {
  // Properly type the refs array
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // when mouse moves over a card, rotate the glow effect
  const handleMouseMove =
    (index: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      // get the current card
      const card = cardRefs.current[index];
      if (!card) return;

      // get the mouse position relative to the card
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;

      // calculate the angle from the center of the card to the mouse
      let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

      // adjust the angle so that it's between 0 and 360
      angle = (angle + 360) % 360;

      // set the angle as a CSS variable
      card.style.setProperty("--start", `${angle + 60}`);
    };

  // return the card component with the mouse move event
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
      <div className="glow"></div>
      {children}
    </div>
  );
};

export default Magic_Card;
