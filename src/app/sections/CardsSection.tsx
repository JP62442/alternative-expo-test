"use client";

import FeatureCard from "@/components/cards/featureCard/FeatureCard";
import { ButtonVariant } from "@/types/types";

type CardData = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonVariant?: ButtonVariant;
};

export default function CardsSection() {
  const cardsData: CardData[] = [
    {
      title: "NOMINATE",
      description:
        "It all starts with a nomination. Simply pick your favorite brand from the list and make them eligible to win an award!",
      buttonLabel: "NOMINATE NOW",
      buttonVariant: "gold",
    },
    {
      title: "VOTE",
      description:
        "Your vote decides the winners. There are no judges, the nominee with the most valid votes takes home the trophy!",
      buttonLabel: "VOTE NOW",
    },
    {
      title: "PAST WINNERS",
      description:
        "Discover award winning brands. See the winners from past events and relive the moment.",
      buttonLabel: "SEE PAST WINNERS",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {cardsData.map((card) => (
          <FeatureCard
            key={card.title}
            title={card.title}
            description={card.description}
            buttonLabel={card.buttonLabel}
            buttonVariant={card.buttonVariant}
            onButtonClick={() => console.log(`Clicked: ${card.title}`)}
          />
        ))}
      </div>
    </section>
  );
}
