export function ScissorBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 75% 40%, rgba(201,161,106,0.10), transparent 55%), radial-gradient(circle at 10% 80%, rgba(224,192,138,0.06), transparent 50%), linear-gradient(180deg, #14110d 0%, #0a0907 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute right-[-12%] top-1/2 -translate-y-1/2 w-[80vw] max-w-[900px] aspect-square opacity-[0.18]"
      >
        <div className="scissor-spin w-full h-full">
          <svg viewBox="0 0 200 200" className="w-full h-full text-gold" fill="none">
            <defs>
              <linearGradient id="bladeGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#e0c08a" />
                <stop offset="100%" stopColor="#8a6d44" />
              </linearGradient>
            </defs>
            {/* Pivot circle */}
            <circle cx="100" cy="125" r="6" fill="url(#bladeGrad)" />
            {/* Top blade */}
            <g className="scissor-blade-top">
              <path
                d="M100 125 L96 30 Q95 18 100 14 Q105 18 104 30 L100 125 Z"
                fill="url(#bladeGrad)"
                opacity="0.9"
              />
              <path
                d="M100 125 Q88 145 76 158 Q66 168 56 168 Q48 168 48 160 Q48 152 58 148 Q72 142 88 134 L100 125 Z"
                stroke="url(#bladeGrad)"
                strokeWidth="3"
                fill="none"
              />
            </g>
            {/* Bottom blade */}
            <g className="scissor-blade-bottom">
              <path
                d="M100 125 L104 30 Q105 18 100 14 Q95 18 96 30 L100 125 Z"
                fill="url(#bladeGrad)"
                opacity="0.7"
                transform="scale(-1,1) translate(-200,0)"
              />
              <path
                d="M100 125 Q112 145 124 158 Q134 168 144 168 Q152 168 152 160 Q152 152 142 148 Q128 142 112 134 L100 125 Z"
                stroke="url(#bladeGrad)"
                strokeWidth="3"
                fill="none"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-bg/20 to-bg pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent pointer-events-none" />
    </div>
  );
}
