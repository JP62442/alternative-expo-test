"use client";

import Image from "next/image";

interface Testimonial {
  id: string;
  logo: string;
  quote: string;
  author: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      logo: "/images/companies/lost8s.png",
      quote: `“Lorem ipsum dolor sit amet, consectetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At
      vero eos et accusam et justo duo dolores et ea rebum.”`,
      author: "Full Name, Company",
    },
    {
      id: "2",
      logo: "/images/companies/mellow-fellow.jpeg",
      quote: `“Lorem ipsum dolor sit amet, consectetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua. At
      vero eos et accusam et justo duo dolores et ea rebum.”`,
      author: "Full Name, Company",
    },
    {
      id: "3",
      logo: "/images/companies/lost8s.png",
      quote: `“Lorem ipsum dolor sit amet, consectetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua.”`,
      author: "Full Name, Company",
    },
    {
      id: "4",
      logo: "/images/companies/mellow-fellow.jpeg",
      quote: `“Lorem ipsum dolor sit amet, consectetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua.”`,
      author: "Full Name, Company",
    },
  ];

  return (
    <section className="bg-altMagenta text-white py-16 ">
      <div className="">
        <h2 className="font-anton text-3xl md:text-4xl font-bold uppercase text-center mb-8">
          TESTIMONIALS THAT PROVE OUR VALUE
        </h2>

        <div className="overflow-x-auto">
          <div className="flex space-x-6 pb-4">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="
                  min-w-[600px]
                  bg-altMagentaLight
                  backdrop-blur-sm
                  rounded-[15px]
                  p-4
                  flex
                  flex-row
                  gap-4
                  items-center
                "
              >
                <div className="bg-white p-3 shrink-0 w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src={t.logo}
                    alt="Logo"
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col text-left">
                  <p className="text-sm italic leading-relaxed mb-2">
                    {t.quote}
                  </p>
                  <p className="text-sm font-bold">{t.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
