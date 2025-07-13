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
        image: "/items/cupcakes/red.png",
        pricePerPiece: 220,
        flavors: ["Red Velvet", "Cream Cheese Frosting"],
      },
      {
        name: "Vanilla Swirl",
        image: "/items/cupcakes/venila.png",
        pricePerPiece: 200,
        flavors: ["Vanilla Bean", "Buttercream"],
      },
      {
        name: "Chocolate",
        image: "/items/cupcakes/chocolate.png",
        pricePerPiece: 220,
        flavors: ["Rich Cocoa", "Chocolate Ganache"],
      },
      {
        name: "Strawberry",
        image: "/items/cupcakes/strawberry.png",
        pricePerPiece: 220,
        flavors: ["Strawberry Puree", "Whipped Cream"],
      },
    ],
  },
  {
    category: "Themed Cupcakes",
    cupcakes: [
      {
        name: "Birthday Blast",
        image: "/items/cupcakes/birthday.png",
        pricePerPiece: 250,
        flavors: ["Funfetti Vanilla", "Rainbow Sprinkles"],
      },
      {
        name: "Oceal Perl",
        image: "/items/cupcakes/ocean.png",
        pricePerPiece: 250,
        flavors: ["Salted Caramel", "Sea Salt Buttercream"],
      },
      {
        name: "Princess",
        image: "/items/cupcakes/princess.png",
        pricePerPiece: 250,
        flavors: ["Raspberry", "White Chocolate Mousse"],
      },
      {
        name: "Rainbow Cupcake",
        image: "/items/cupcakes/rainbow.png",
        pricePerPiece: 260,
        flavors: ["Mixed Fruits", "Vanilla Rainbow Frosting"],
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
        image: "/items/cakes/choco.png",
        pricePerPound: 1200,
        pounds: [2, 3, 4],
        flavors: ["Dark Chocolate", "Choco-Chip Ganache", "Fudge Core"],
      },
      {
        name: "Vanilla Celebration Cake",
        image: "/items/cakes/venila.png",
        pricePerPound: 1000,
        pounds: [2, 2.5, 3],
        flavors: ["Vanilla Bean", "Caramel Drizzle", "Whipped Cream"],
      },
      {
        name: "Strawberry Cake",
        image: "/items/cakes/strawberry.png",
        pricePerPound: 1000,
        pounds: [2, 2.5, 3],
        flavors: ["Fresh Strawberry", "Vanilla Cream", "Strawberry Jam"],
      },
    ],
  },
  {
    category: "Wedding Cakes",
    cakes: [
      {
        name: "1-Tier Floral Cake",
        image: "/items/cakes/1tier.png",
        pricePerPound: 1500,
        pounds: [4, 6, 8],
        flavors: ["Vanilla Rose", "Pineapple Cream", "White Chocolate"],
      },
      {
        name: "2-Tier Floral Cake",
        image: "/items/cakes/2tier.png",
        pricePerPound: 1500,
        pounds: [4, 6, 8],
        flavors: ["Vanilla Almond", "Lemon Curd", "Chocolate Fudge"],
      },
      {
        name: "3-Tier Floral Cake",
        image: "/items/cakes/3tier.png",
        pricePerPound: 1500,
        pounds: [4, 6, 8],
        flavors: ["Raspberry Vanilla", "Hazelnut Cream", "Coconut Milk"],
      }
    ],
  },
  {
    category: "Kids Cakes",
    cakes: [
      {
        name: "Adoral",
        image: "/items/cakes/adoral.png",
        pricePerPound: 1300,
        pounds: [2, 3],
        flavors: ["Vanilla Funfetti", "Chocolate Chip", "Caramel Cream"],
      },
      {
        name: "Micky Mouse",
        image: "/items/cakes/micky.png",
        pricePerPound: 1300,
        pounds: [2, 3],
        flavors: ["Chocolate Fudge", "Cookies & Cream", "Vanilla"],
      },
      {
        name: "Unicorn Cake",
        image: "/items/cakes/uni.png",
        pricePerPound: 1300,
        pounds: [2, 3],
        flavors: ["Rainbow Vanilla", "Cotton Candy", "Bubblegum"],
      },
      {
        name: "Tracky Cake",
        image: "/items/cakes/car.png",
        pricePerPound: 1300,
        pounds: [2, 3],
        flavors: ["Chocolate Crunch", "Toffee Cream", "Vanilla"],
      },
      {
        name: "Creature Cake",
        image: "/items/cakes/creature.png",
        pricePerPound: 1300,
        pounds: [2, 3],
        flavors: ["Oreo Vanilla", "Chocolate Lava", "Caramel"],
      },
      {
        name: "Catty Cake",
        image: "/items/cakes/catty.png",
        pricePerPound: 1400,
        pounds: [2, 2.5, 3],
        flavors: ["Strawberry Milk", "Bubblegum Bliss", "Vanilla"],
      },
    ],
  },
];
;

const pastries= [
  {
    category: "Cream Pastries",
    pastries: [
      {
        name: "Vanilla Cream Pastry",
        image: "/items/pastries/venila.png",
        pricePerPiece: 250,
        flavors: ["Vanilla", "Caramel"],
      },
      {
        name: "Chocolate Cream Pastry",
        image: "/items/pastries/chocolate.png",
        pricePerPiece: 270,
        flavors: ["Chocolate", "Hazelnut"],
      },
    ],
  },
  {
  category: "Brownies",
  pastries: [
    {
      name: "Caramel",
      image: "/items/pastries/caremal.png",
      pricePerPiece: 260,
      flavors: ["Salted Caramel", "Butterscotch Drizzle"],
    },
    {
      name: "Choco",
      image: "/items/pastries/choco.png",
      pricePerPiece: 280,
      flavors: ["Dark Chocolate", "Chocolate Chips"],
    },
  ],
}
];

const data={testimonials,pastries,cupcakes,cakes}

export default data