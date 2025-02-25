"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/a11y";

interface CategoriesSectionProps {
  readonly halfVideoHeight: number;
}

export default function CategoriesSection({
  halfVideoHeight,
}: CategoriesSectionProps) {
  const categories = [
    {
      label: "Best Alternative Product",
      icon: "/icons/awards/categories/mask_group_21.svg",
    },
    {
      label: "Best Vape",
      icon: "/icons/awards/categories/mask_group_31.svg",
    },
    {
      label: "Best Edible",
      icon: "/icons/awards/categories/mask_group_18.svg",
    },
    {
      label: "Best Functional Beverage",
      icon: "/icons/awards/categories/mask_group_27.svg",
    },
    {
      label: "Best Mushroom",
      icon: "/icons/awards/categories/mask_group_28.svg",
    },
    {
      label: "Best Overall Branding and Marketing",
      icon: "/icons/awards/categories/mask_group_26.svg",
    },
    {
      label: "Best Pet Product",
      icon: "/icons/awards/categories/mask_group_20.svg",
    },
    {
      label: "Best Services Provider",
      icon: "/icons/awards/categories/mask_group_22.svg",
    },
    {
      label: "Best Smokable",
      icon: "/icons/awards/categories/mask_group_23.svg",
    },
    {
      label: "Best Tincture",
      icon: "/icons/awards/categories/mask_group_24.svg",
    },
    {
      label: "Best Topical",
      icon: "/icons/awards/categories/mask_group_19.svg",
    },
    {
      label: "Most Innovative Product",
      icon: "/icons/awards/categories/mask_group_32.svg",
    },
    {
      label: "Best Booth",
      icon: "/icons/awards/categories/mask_group_33.svg",
    },
  ];

  return (
    <section
      className="relative text-white pt-0 pb-16 px-4"
      style={{ marginTop: -halfVideoHeight }}
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-[29px] p-8 text-center"
          style={{ paddingTop: halfVideoHeight * 1.25 }}
        >
          <h2 className="font-anton text-3xl md:text-4xl font-bold uppercase mb-8">
            CATEGORIES
          </h2>

          <div className="block lg:hidden">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              navigation
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
              }}
              modules={[Navigation, A11y]}
              a11y={{
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
              }}
              className="w-full"
            >
              {categories.map((cat) => (
                <SwiperSlide
                  key={cat.label}
                  className="!flex flex-col items-center text-center"
                >
                  <Image
                    src={cat.icon}
                    alt={cat.label}
                    width={88}
                    height={88}
                    className="mb-2"
                  />
                  <p className="font-bold text-sm md:text-base max-w-[140px]">
                    {cat.label}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="hidden lg:grid grid-cols-6 gap-6 mt-4">
            {categories.map((cat) => (
              <div
                key={cat.label}
                className="flex flex-col items-center text-center"
              >
                <Image
                  src={cat.icon}
                  alt={cat.label}
                  width={88}
                  height={88}
                  className="mb-2"
                />
                <p className="font-bold text-sm md:text-base max-w-[140px]">
                  {cat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
