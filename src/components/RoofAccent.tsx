import Image from "next/image";

export function RoofAccent({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <Image
        src="/roof-accent.png"
        alt=""
        width={400}
        height={200}
        className="opacity-[0.04] w-full h-auto"
      />
    </div>
  );
}
