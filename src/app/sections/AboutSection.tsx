"use client";
import { forwardRef } from "react";

const AboutSection = forwardRef<
  HTMLDivElement,
  { videoRef: React.Ref<HTMLDivElement> }
>(function AboutSection({ videoRef }, ref) {
  return (
    <section ref={ref} className="relative text-white pt-16 pb-0 px-4 z-20">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-center mb-8">
          <h2 className="font-anton -rotate-90 text-3xl md:text-4xl font-bold uppercase">
            ABOUT
          </h2>

          <p className="text-sm md:text-base leading-relaxed mt-4">
            The Alt Pro Expo Excellence Awards are a prestigious recognition
            within the alternative products industry, celebrating the most
            innovative, high-quality, and impactful brands, products, and
            professionals. Winning an Alt Pro ExpoExcellence Award not only
            highlights your brand as a leader in the industry but also enhances
            your reputation and visibility among key players and consumers
            alike. This award serves as a powerful endorsement, setting your
            brand apart from the competition and positioning you as a benchmark
            of excellence in the alternative products market.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg" ref={videoRef}>
          <div style={{ paddingTop: "56.25%" }} className="relative w-full">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/zIilCys-vVU?si=2lF-aEvmGA-fd1SN"
              title="AltPro Expo Excellence Awards 2023"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
