"use client";

import { useRouter } from "next/navigation";
import FeatureCard from "@/components/cards/featureCard/FeatureCard";
import { ButtonVariant } from "@/types/types";

type CardData = {
  id?: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonVariant?: ButtonVariant;
  onClick?: () => void;
  showArrow?: boolean;
};

type CardsSectionProps = {
  readonly scrollToPastWinners: () => void;
};

export default function CardsSection({
  scrollToPastWinners,
}: CardsSectionProps) {
  const router = useRouter();

  const cardsData: CardData[] = [
    {
      id: "nominate",
      title: "NOMINATE",
      description:
        "It all starts with a nomination. Simply pick your favorite brand from the list and make them eligible to win an award!",
      buttonLabel: "NOMINATE NOW",
      buttonVariant: "gold",
      onClick: () => {
        router.push("/nominate");
      },
    },
    {
      id: "vote",
      title: "VOTE",
      description:
        "Your vote decides the winners. There are no judges, the nominee with the most valid votes takes home the trophy!",
      buttonLabel: "VOTE NOW",
      onClick: () => {
        router.push("/vote");
      },
    },
    {
      title: "PAST WINNERS",
      description:
        "Discover award winning brands. See the winners from past events and relive the moment.",
      buttonLabel: "SEE PAST WINNERS",
      onClick: scrollToPastWinners,
      showArrow: false,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cardsData.map((card) => (
          <FeatureCard
            id={card.id}
            key={card.title}
            title={card.title}
            description={card.description}
            buttonLabel={card.buttonLabel}
            buttonVariant={card.buttonVariant}
            onClick={card.onClick}
            showArrow={card.showArrow}
          />
        ))}
      </div>
    </section>
  );
}
