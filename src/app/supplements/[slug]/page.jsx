import SupplementCard from "@/components/Supplement";

const supplementData = {
  "whey-protein": {
    title: "Whey Protein",
    description:
      "Whey protein is a fast-digesting, complete protein source packed with essential amino acids and BCAAs. It's perfect for post-workout recovery, promoting muscle repair, lean mass gain, and improved strength. Ideal for athletes and lifters looking to optimize muscle protein synthesis after training.",
    imageUrl: "/suppliments/whey.png",
    price: "Rs. 5,999",
    servings: "30 servings",
  },
  "creatine": {
    title: "Creatine Monohydrate",
    description:
      "Creatine is one of the most researched and effective supplements for increasing muscular strength, size, and performance. It replenishes ATP, your body’s primary energy currency, allowing you to train harder and longer. Ideal for heavy lifting, sprinting, and explosive sports.",
    imageUrl: "/suppliments/creatine.png",
    price: "Rs. 3,200",
    servings: "60 servings",
  },
  "bcaas": {
    title: "BCAAs",
    description:
      "Branched-Chain Amino Acids (Leucine, Isoleucine, and Valine) are critical for muscle recovery, reducing fatigue, and preserving lean muscle mass. BCAAs are especially useful during fasted workouts, cutting phases, or endurance training where muscle breakdown risk is higher.",
    imageUrl: "/suppliments/bcaa.png",
    price: "Rs. 4,500",
    servings: "40 servings",
  },
  "pre-workout": {
    title: "Pre-Workout",
    description:
      "Pre-workout supplements are designed to enhance workout intensity, focus, and endurance. Typically containing caffeine, beta-alanine, and nitric oxide boosters, this formula helps maximize blood flow (pump), delay fatigue, and elevate mental clarity during training.",
    imageUrl: "/suppliments/pre.png",
    price: "Rs. 3,800",
    servings: "25 servings",
  },
  "multivitamins": {
    title: "Multivitamins",
    description:
      "Multivitamins provide a wide range of essential vitamins and minerals that support immunity, energy metabolism, bone strength, and overall well-being. A great daily companion for gym-goers who want to prevent deficiencies and stay in peak health year-round.",
    imageUrl: "/suppliments/multi.png",
    price: "Rs. 2,500",
    servings: "90 tablets",
  },
  "fish-oil": {
    title: "Fish Oil (Omega-3)",
    description:
      "Fish oil is rich in EPA and DHA — two powerful Omega-3 fatty acids that support heart function, reduce inflammation, and improve joint flexibility. It's especially beneficial for athletes undergoing intense training, as it aids recovery, supports brain health, and reduces post-workout soreness.",
    imageUrl: "/suppliments/fish.png",
    price: "Rs. 2,200",
    servings: "60 softgels",
  },
};


export default async function SupplementPage({params}) {
  const {slug} = await params
  const supplement = supplementData[slug];

  if (!supplement) {
    return (
      <div className="p-10 text-center text-red-500 text-xl font-bold">
        Supplement not found.
      </div>
    );
  }

  return (
    <SupplementCard
      title={supplement.title}
      description={supplement.description}
      imageUrl={supplement.imageUrl}
      price={supplement.price}
      servings={supplement.servings}
    />
  );
}
