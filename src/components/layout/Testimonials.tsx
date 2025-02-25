"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/a11y";
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
      quote: `“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.”`,
      author: "Full Name, Company",
    },
    {
      id: "2",
      logo: "/images/companies/mellow-fellow.jpeg",
      quote: `“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.”`,
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
    <section className="bg-altMagenta text-white py-16">
      <div className="mx-auto px-4">
        <h2 className="font-anton text-3xl md:text-4xl font-bold uppercase text-center mb-8">
          TESTIMONIALS THAT PROVE OUR VALUE
        </h2>

        <Swiper
          modules={[Autoplay, Pagination, A11y]}
          slidesPerView={1}
          spaceBetween={16}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1.1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          a11y={{
            prevSlideMessage: "Slide anterior",
            nextSlideMessage: "Siguiente slide",
            paginationBulletMessage: "Ir a la diapositiva {{index}}",
          }}
          className="w-full"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div
                className="
                  bg-altMagentaLight
                  backdrop-blur-sm
                  rounded-[15px]
                  p-4
                  flex
                  flex-col
                  gap-4
                  items-center
                  h-full
                  md:flex-row
                  md:items-center
                "
              >
                <div className="bg-white p-3 shrink-0 w-32 h-32 rounded-full overflow-hidden mx-auto md:mx-0">
                  <Image
                    src={t.logo}
                    alt={`${t.author} Logo`}
                    width={170}
                    height={170}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col text-center md:text-left">
                  <p className="text-sm italic leading-relaxed mb-2">
                    {t.quote}
                  </p>
                  <p className="text-sm font-bold">{t.author}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
