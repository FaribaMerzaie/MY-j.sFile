const products = [
  {
    id: 1,
    name: "Gold Ring",
    price: 200,
    image: "https://pbs.twimg.com/media/D9hoC_rW4AEBIaB.jpg",
  },
  {
    id: 2,
    name: "Silver Necklace",
    price: 150,
    image:
      "https://i.etsystatic.com/22136567/r/il/644382/2925485521/il_300x300.2925485521_6d9o.jpg",
  },
  {
    id: 3,
    name: "Bracelet",
    price: 100,
    image: "https://i.ebayimg.com/images/g/X0cAAOSwxCRe84s9/s-l400.jpg",
  },
  {
    id: 4,
    name: "Stone Jewelry",
    description:
      "This is a very beautiful emerald ring. Its beauty and color give people a special sense of and extraordinary beauty.",
    image:
      "https://static3.azafashions.com/tr:w-450/uploads/product_gallery/1693401160837_1.jpg",
  },
  {
    id: 5,
    name: "Stone Jewelry",
    description:
      "This is a very beautiful emerald necklace. Its beauty and color give people a special sense of peace and extraordinary beauty.",
    image:
      "https://i.etsystatic.com/30484130/r/il/dce9ed/6914263775/il_800x800.6914263775_ont8.jpg",
  },
  {
    id: 6,
    name: "Stone Jewelry",
    description:
      "This is a very beautiful emerald bracelet. Its beauty and color give people a special sense of peace and extraordinary beauty.",
    image:
      "https://i.pinimg.com/550x/76/62/bc/7662bcc06896234e026140308602acc5.jpg",
  },
  {
    id: 7,
    name: "Pearl Set",
    price: 400,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.DBl5q5pK9EU_5NkNty9HLQHaHa?w=1001&h=1001&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 8,
    name: "Emerald Ring",
    price: 550,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.Zphiug1-6oIAT6D5WnsCMgHaHa?w=960&h=960&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 9,
    name: "Royal Necklace",
    price: 700,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.Qv8ALyRCG-rq-KFDkk7OhAHaFS?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];
//تصاویر مربوط بخش کارت ها
const cartproducts = [
  // رویایی
  {
    name: "Royal Diamond Ring",
    price: 250,
    image:
      "https://i.etsystatic.com/14020175/r/il/879862/5704937687/il_300x300.5704937687_d4zp.jpg",
    category: "royal",
  },
  {
    name: "Queen Necklace",
    price: 300,
    image:
      "https://i.etsystatic.com/6956537/r/il/095f75/3412330534/il_300x300.3412330534_ooum.jpg",
    category: "royal",
  },
  {
    name: "Luxury Crown Bracelet",
    price: 280,
    image:
      "https://i.pinimg.com/736x/21/8a/76/218a76ffa46c5448d871152524fe7367.jpg",
    category: "royal",
  },
  {
    name: "King Gold Ring",
    price: 260,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.LR6pjqokDw85Tol3O-1CqQAAAA?w=300&h=300&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "royal",
  },

  // سنگ کاری
  {
    name: "Blue Stone Necklace",
    description: "Natural blue stone design",
    image:
      "https://i.pinimg.com/originals/7d/dc/11/7ddc118ee753336d4b9e475a47847d21.jpg",
    category: "stone",
  },
  {
    name: "Green Stone Ring",
    description: "Elegant emerald style",
    image:
      "https://a.1stdibscdn.com/contemporary-zambian-emerald-and-diamond-cocktail-ring-in-white-gold-for-sale/1121189/j_94287321589629664746/9428732_master.jpg?disable=upscale&auto=webp&quality=60&width=640",
    category: "stone",
  },
  {
    name: "Crystal Bracelet",
    description: "Pure crystal beauty",
    image:
      "https://cdn.shopify.com/s/files/1/0934/6836/products/1-julian-beloved-sparkles-25-carat-cubic-zirconia-cz-faux-diamond-pear-round-cut-soft-tennis-celebrity-bridal-statement-vintage-classic-soft-bracelet_1_4_large.jpg?v=1618586891",
    category: "stone",
  },
  {
    name: "Black Stone Pendant",
    description: "Modern dark style",
    image:
      "https://i.pinimg.com/originals/79/4c/d5/794cd559d7069c39c9065ee8e16e5cc3.jpg",
    category: "stone",
  },

  // طلا
  {
    name: "Classic Gold Ring",
    price: 180,
    image:
      "https://tse1.mm.bing.net/th/id/OIP.ybHzvGNJOVPcvsr4Oyi9dwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "gold",
  },
  {
    name: "Gold Chain Necklace",
    price: 220,
    image:
      "https://tse2.mm.bing.net/th/id/OIP.XUE0oDerI3hNWoO2Le08sgHaE7?w=626&h=417&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "gold",
  },
  {
    name: "Golden Bracelet",
    price: 200,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.jsAMMIJTkvQ2ol9GIPPIrgAAAA?w=417&h=626&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "gold",
  },
  {
    name: "Luxury Gold Set",
    price: 350,
    image:
      "https://tse4.mm.bing.net/th/id/OIP.SP7Klpv_fEanXHMQLFjY3AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "gold",
  },

  // نقره
  {
    name: "Silver Ring",
    price: 90,
    image:
      "https://jhalakjewels.com/assets/uploads/Blog/Image/1728106698_screen-shot-2020-10-09-at-11-53-42-am_51_85017-160225883645235.jpeg",
    category: "silver",
  },
  {
    name: "Silver Necklace",
    price: 120,
    image: "https://i.ebayimg.com/images/g/AGcAAOSwoShfrwPK/s-l1600.jpg",
    category: "silver",
  },
  {
    name: "Silver Bracelet",
    price: 110,
    image: "https://i.ebayimg.com/images/g/PKkAAOSwhN5j2LSr/s-l500.jpg",
    category: "silver",
  },
  {
    name: "Elegant Silver Set",
    price: 150,
    image:
      "https://www.vampal.co.uk/content/res/thumbs/s560/0056061_elegant_women_wedding_jewellery_leaf_drop_bridal_necklace_bracelet_and_earrings_jewelry_sets_african_600.jpeg",
    category: "silver",
  },

  // فانتزی
  {
    name: "Fantasy Crystal Ring",
    description: "Creative glowing design",
    image:
      "https://cdn.tatlerasia.com/tatlerasia/i/2022/07/26111419-key-visual_cover_1500x1000.jpg",
    category: "fantasy",
  },
  {
    name: "Magic Necklace",
    description: "Inspired by fantasy world",
    image: "https://m.media-amazon.com/images/I/71kgcEVi7gL._AC_UL1000_.jpg",
    category: "fantasy",
  },
  {
    name: "Dream Bracelet",
    description: "Soft and artistic design",
    image:
      "https://www.bijou-brigitte.com/media/f9/7b/e7/1738900441/720649740_0.webp",
    category: "fantasy",
  },
  {
    name: "Galaxy Jewelry",
    description: "Space-inspired beauty",
    image: "https://i.ebayimg.com/images/g/qpMAAOSwhOVXftH3/s-l1600.jpg",
    category: "fantasy",
  },
];

// آیدی برای خانه
products.forEach((product, index) => {
  product.id = index + 1;
});

// آیدی برای خرید
cartproducts.forEach((product, index) => {
  product.id = index + 100;
});
