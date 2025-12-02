'use client';

import React from "react";

interface GlassEffectProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
  onClick?: () => void;
  theme?: 'light' | 'dark';
}

export const GlassEffect: React.FC<GlassEffectProps> = ({
  children,
  className = "",
  style = {},
  href,
  target = "_blank",
  onClick,
  theme = 'dark',
}) => {
  const glassStyle = {
    boxShadow: "0 6px 6px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.1)",
    transitionTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 2.2)",
    ...style,
  };

  // Light theme means content is light, so navbar should be dark for contrast
  // OR light glass with dark text. User requested "change hover and text color".
  // Let's stick to a unified glass look but change tint/text.
  // User example had dark nav for light content.
  
  // Let's try:
  // Dark theme (default, over dark content): Glassy white tint.
  // Light theme (over light content): Glassy dark tint? 
  
  const layer2Bg = theme === 'light' 
    ? "rgba(0, 0, 0, 0.05)" // Dark tint for light theme (or maybe just keep it subtle)
    : "rgba(255, 255, 255, 0.05)"; // Light tint for dark theme

  const content = (
    <div
      className={`relative flex font-semibold overflow-hidden cursor-pointer transition-all duration-700 ${className}`}
      style={glassStyle}
      onClick={onClick}
    >
      {/* Glass Layers */}
      <div
        className="absolute inset-0 z-0 overflow-hidden rounded-inherit rounded-3xl"
        style={{
          backdropFilter: "blur(3px)",
          filter: "url(#glass-distortion)",
          isolation: "isolate",
        }}
      />
      <div
        className="absolute inset-0 z-10 rounded-inherit"
        style={{ background: layer2Bg }}
      />
      <div
        className="absolute inset-0 z-20 rounded-inherit rounded-3xl overflow-hidden"
        style={{
          boxShadow:
            theme === 'light'
              ? "inset 2.5px 1.5px 3px 0 rgba(0, 0, 0, 0.1), inset -1px -0.25px 3px 0 rgba(0, 0, 0, 0.1)"
              : "inset 2.5px 1.5px 3px 0 rgba(255, 255, 255, 0.2), inset -1px -0.25px 3px 0 rgba(255, 255, 255, 0.2)",
        }}
      />

      {/* Content */}
      <div className="relative z-30">{children}</div>
    </div>
  );

  return href ? (
    <a href={href} target={target} rel="noopener noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
};

