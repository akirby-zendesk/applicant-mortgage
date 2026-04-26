export function RoofWatermark({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 451 211"
        className="w-full h-full opacity-[0.045]"
      >
        <g fillRule="evenodd" strokeLinejoin="round" strokeLinecap="round">
          <path
            d="M10 188 L98 119 L98 94 L126 94 L126 114 L229 25 L447 188 L397 188 L229 65 L61 188 Z"
            fill="white"
            stroke="none"
          />
          <path
            d="M78 189 L229 76 L381 189 L338 189 L229 111 L120 189 Z"
            fill="white"
            stroke="none"
          />
        </g>
      </svg>
    </div>
  );
}
