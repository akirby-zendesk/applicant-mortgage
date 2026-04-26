import Image from "next/image";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-off-white">
      <div className="text-center max-w-[600px]">
        <p className="text-[100px] lg:text-[140px] leading-none font-display font-bold text-navy/10 mb-0">
          404
        </p>
        <div className="relative w-[280px] h-[280px] mx-auto -mt-8 mb-6">
          <Image
            src="/maisie_new.png"
            alt="Maisie the cocker spaniel dancing"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-3">
          Page not found — but look at Maisie go!
        </h1>
        <p className="text-slate text-base leading-relaxed mb-8">
          We couldn&apos;t find what you were looking for, but Maisie&apos;s
          having the time of her life. She&apos;d love it if you stuck around.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/" variant="primary">
            Back to Homepage
          </Button>
          <Button href="/contact" variant="outline-navy">
            Talk to Us
          </Button>
        </div>
      </div>
    </main>
  );
}
