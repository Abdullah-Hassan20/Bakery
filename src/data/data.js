const testimonials = [
  {
    chatImage: "/customers/ss/ss1.jpg",
    deliveryImage: "/customers/orders/o1.jpg",
  },
  {
    chatImage: "/customers/ss/ss2.jpg",
    deliveryImage: "/customers/orders/o2.jpg",
  },
  {
    chatImage: "/customers/ss/ss3.jpg",
    deliveryImage: "/customers/orders/o3.jpg",
  }
]

const cupcakes = [
  {
    category: "Classic Cupcakes",
    cupcakes: [
      {
        name: "Red Velvet",
        image: "/bakery/main.png",
        pricePerPiece: 220,
        flavors: ["Red Velvet", "Cream Cheese"],
      },
      {
        name: "Vanilla Swirl",
        image: "/cupcakes/classic/vanilla.jpg",
        pricePerPiece: 200,
        flavors: ["Vanilla", "Buttercream"],
      },
    ],
  },
  {
    category: "Themed Cupcakes",
    cupcakes: [
      {
        name: "Birthday Blast",
        image: "/cupcakes/themed/birthday.jpg",
        pricePerPiece: 250,
        flavors: ["Chocolate", "Strawberry"],
      },
      {
        name: "Rainbow Cupcake",
        image: "/cupcakes/themed/rainbow.jpg",
        pricePerPiece: 260,
        flavors: ["Fruit Mix", "Vanilla"],
      },
    ],
  },
];

const cakes = [
  {
    category: "Birthday Cakes",
    cakes: [
      {
        name: "Chocolate Fudge Cake",
        image: "/items/cakes/choco.jpg",
        pricePerPound: 1200,
        pounds: [2, 3, 4],
        flavors: ["Chocolate", "Dark Chocolate", "Choco-Chip"],
      },
      {
        name: "Vanilla Celebration Cake",
        image: "/items/cakes/venilla.jpg",
        pricePerPound: 1000,
        pounds: [2, 2.5, 3],
        flavors: ["Vanilla", "Strawberry", "Caramel"],
      },
    ],
  },
  {
    category: "Wedding Cakes",
    cakes: [
      {
        name: "3-Tier Floral Cake",
        image: "/items/cakes/3tier.jpg",
        pricePerPound: 1500,
        pounds: [4, 6, 8],
        flavors: ["Vanilla", "Pineapple", "Chocolate"],
      },
      {
        name: "Royal White Cake",
        image: "/items/cakes/royal.jpg",
        pricePerPound: 1600,
        pounds: [5, 7, 9],
        flavors: ["Almond", "Coconut", "Vanilla"],
      },
    ],
  },
  {
    category: "Kids Cakes",
    cakes: [
      {
        name: "Spiderman Cake",
        image: "/items/cakes/spider.jpg",
        pricePerPound: 1300,
        pounds: [2, 3],
        flavors: ["Chocolate", "Vanilla"],
      },
      {
        name: "Unicorn Cake",
        image: "/items/cakes/uni.jpg",
        pricePerPound: 1400,
        pounds: [2, 2.5, 3],
        flavors: ["Strawberry", "Bubblegum", "Vanilla"],
      },
    ],
  },
];

const donuts = [
  {
    category: "Classic Donuts",
    donuts: [
      {
        name: "Glazed Donut",
        image: "/donuts/classic/glazed.jpg",
        pricePerPiece: 150,
        flavors: ["Vanilla", "Maple", "Strawberry"],
      },
      {
        name: "Chocolate Ring",
        image: "/donuts/classic/chocolate.jpg",
        pricePerPiece: 180,
        flavors: ["Chocolate", "Dark Chocolate"],
      },
    ],
  },
  {
    category: "Stuffed Donuts",
    donuts: [
      {
        name: "Boston Cream",
        image: "/donuts/stuffed/boston.jpg",
        pricePerPiece: 200,
        flavors: ["Vanilla Custard", "Chocolate"],
      },
      {
        name: "Jam-Filled Donut",
        image: "/donuts/stuffed/jam.jpg",
        pricePerPiece: 180,
        flavors: ["Strawberry", "Raspberry", "Blueberry"],
      },
    ],
  },
];

const pastries= [
  {
    category: "Cream Pastries",
    pastries: [
      {
        name: "Vanilla Cream Pastry",
        image: "/pastries/cream/vanilla.jpg",
        pricePerPiece: 250,
        flavors: ["Vanilla", "Caramel"],
      },
      {
        name: "Chocolate Cream Pastry",
        image: "/pastries/cream/chocolate.jpg",
        pricePerPiece: 270,
        flavors: ["Chocolate", "Hazelnut"],
      },
    ],
  },
  {
    category: "Fruit Pastries",
    pastries: [
      {
        name: "Strawberry Slice",
        image: "/pastries/fruit/strawberry.jpg",
        pricePerPiece: 260,
        flavors: ["Strawberry", "Vanilla"],
      },
      {
        name: "Mango Mousse Pastry",
        image: "/pastries/fruit/mango.jpg",
        pricePerPiece: 280,
        flavors: ["Mango", "Coconut"],
      },
    ],
  },
];

const data={testimonials,pastries,cupcakes,cakes,donuts}

export default data