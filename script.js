// ============================================================
// TASTIGO - PHASE 1
// Expanded restaurants, food menu, search, filters,
// restaurant menus, favourites and cart
// ============================================================


// ============================================================
// RESTAURANTS
// ============================================================

const restaurants = [
  {
    id: 1,
    name: "Royal Handi",
    cuisine: "North Indian • Biryani",
    rating: "4.8",
    time: "25-30 min",
    img: "images/biryani.jpg"
  },
  {
    id: 2,
    name: "Crust & Craft",
    cuisine: "Italian • Pizza",
    rating: "4.6",
    time: "30-35 min",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Green Bowl Co.",
    cuisine: "Healthy • Salads",
    rating: "4.7",
    time: "20-25 min",
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Wok This Way",
    cuisine: "Chinese • Asian",
    rating: "4.6",
    time: "15-20 min",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Burger District",
    cuisine: "Fast Food • Burgers",
    rating: "4.5",
    time: "15-20 min",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Sugar Cloud",
    cuisine: "Desserts • Bakery",
    rating: "4.9",
    time: "20-25 min",
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "South Street",
    cuisine: "South Indian • Dosa",
    rating: "4.7",
    time: "15-20 min",
    img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Punjab Junction",
    cuisine: "North Indian • Punjabi",
    rating: "4.8",
    time: "25-30 min",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Tandoor Tales",
    cuisine: "North Indian • Tandoor",
    rating: "4.6",
    time: "25-30 min",
    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Pasta Piazza",
    cuisine: "Italian • Pasta",
    rating: "4.5",
    time: "25-30 min",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    name: "Chai & Co.",
    cuisine: "Cafe • Snacks",
    rating: "4.6",
    time: "15-20 min",
    img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    name: "Coastal Curry",
    cuisine: "South Indian • Coastal",
    rating: "4.7",
    time: "30-35 min",
    img: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    name: "Rolls Republic",
    cuisine: "Fast Food • Rolls",
    rating: "4.4",
    time: "15-20 min",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    name: "The Biryani House",
    cuisine: "Biryani • Mughlai",
    rating: "4.8",
    time: "25-35 min",
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    name: "Dilli Tadka",
    cuisine: "North Indian • Street Food",
    rating: "4.5",
    time: "20-25 min",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 16,
    name: "Sushi Sakura",
    cuisine: "Japanese • Asian",
    rating: "4.7",
    time: "30-35 min",
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 17,
    name: "The Healthy Fork",
    cuisine: "Healthy • Bowls",
    rating: "4.6",
    time: "15-20 min",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 18,
    name: "Frost & Whisk",
    cuisine: "Desserts • Ice Cream",
    rating: "4.8",
    time: "15-20 min",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=80"
  }
];


// ============================================================
// FOOD ITEMS
// 54 items = 3 items for each restaurant
// ============================================================

const foods = [

  // Royal Handi
  {
    id: 1,
    name: "Chicken Biryani",
    restaurant: "Royal Handi",
    restaurantId: 1,
    cuisine: "North Indian",
    price: 249,
    rating: 4.8,
    time: "25-30 min",
    moods: ["comfort", "spicy", "party"],
    diet: "nonveg",
    tags: ["Best Seller"],
    img: "images/Chicken-Biryani.jpg",
    desc: "Fragrant basmati rice, tender chicken and aromatic spices slow-cooked for a rich and satisfying meal."
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    restaurant: "Royal Handi",
    restaurantId: 1,
    cuisine: "North Indian",
    price: 219,
    rating: 4.7,
    time: "25-30 min",
    moods: ["comfort", "spicy"],
    diet: "veg",
    tags: ["Popular"],
    img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85",
    desc: "Soft paneer cubes cooked in a creamy tomato gravy with Indian spices."
  },
  {
    id: 3,
    name: "Tandoori Chicken",
    restaurant: "Royal Handi",
    restaurantId: 1,
    cuisine: "North Indian",
    price: 289,
    rating: 4.6,
    time: "30-35 min",
    moods: ["spicy", "party"],
    diet: "nonveg",
    tags: ["Chef Special"],
    img: "images/tandoori-chicken.jpg",
    desc: "Juicy chicken marinated in yoghurt and spices and roasted until smoky."
  },

  // Crust & Craft
  {
    id: 4,
    name: "Margherita Pizza",
    restaurant: "Crust & Craft",
    restaurantId: 2,
    cuisine: "Italian",
    price: 299,
    rating: 4.5,
    time: "25-30 min",
    moods: ["comfort", "quick"],
    diet: "veg",
    tags: ["Classic"],
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",
    desc: "Classic pizza topped with tomato, mozzarella, basil and olive oil."
  },
  {
    id: 5,
    name: "Truffle Mushroom Pizza",
    restaurant: "Crust & Craft",
    restaurantId: 2,
    cuisine: "Italian",
    price: 399,
    rating: 4.6,
    time: "30-35 min",
    moods: ["comfort", "party"],
    diet: "veg",
    tags: ["Chef Special"],
    img: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85",
    desc: "Mushrooms, mozzarella and a delicate truffle finish on an artisan base."
  },
  {
    id: 6,
    name: "Creamy Alfredo Pasta",
    restaurant: "Crust & Craft",
    restaurantId: 2,
    cuisine: "Italian",
    price: 329,
    rating: 4.6,
    time: "25-30 min",
    moods: ["comfort"],
    diet: "veg",
    tags: ["Creamy"],
    img: "images/alfredo-pasta.jpg",
    desc: "Silky Alfredo sauce, herbs and parmesan tossed with pasta."
  },

  // Green Bowl Co.
  {
    id: 7,
    name: "Paneer Tikka Bowl",
    restaurant: "Green Bowl Co.",
    restaurantId: 3,
    cuisine: "North Indian",
    price: 199,
    rating: 4.7,
    time: "20-25 min",
    moods: ["healthy", "comfort", "quick"],
    diet: "veg",
    tags: ["High Protein"],
    img: "images/paneer_tikka.jpg",
    desc: "Smoky paneer, colourful vegetables, rice and refreshing mint dressing."
  },
  {
    id: 8,
    name: "Berry Protein Smoothie",
    restaurant: "Green Bowl Co.",
    restaurantId: 3,
    cuisine: "Healthy",
    price: 219,
    rating: 4.6,
    time: "10-15 min",
    moods: ["healthy", "quick"],
    diet: "veg",
    tags: ["Fresh"],
    img: "images/berry-smoothie.jpg",
    desc: "Refreshing berries, banana, yoghurt and seeds blended together."
  },
  {
    id: 9,
    name: "Garden Salad Bowl",
    restaurant: "Green Bowl Co.",
    restaurantId: 3,
    cuisine: "Healthy",
    price: 189,
    rating: 4.7,
    time: "10-15 min",
    moods: ["healthy", "quick"],
    diet: "veg",
    tags: ["Fresh"],
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    desc: "Fresh vegetables, greens, seeds and a light house dressing."
  },

  // Wok This Way
  {
    id: 10,
    name: "Hakka Veg Noodles",
    restaurant: "Wok This Way",
    restaurantId: 4,
    cuisine: "Chinese",
    price: 169,
    rating: 4.4,
    time: "15-20 min",
    moods: ["quick", "comfort"],
    diet: "veg",
    tags: ["Value Pick"],
    img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=85",
    desc: "Wok-tossed noodles with crunchy vegetables and savoury sauce."
  },
  {
    id: 11,
    name: "Chicken Momos",
    restaurant: "Wok This Way",
    restaurantId: 4,
    cuisine: "Chinese",
    price: 159,
    rating: 4.6,
    time: "15-20 min",
    moods: ["spicy", "quick", "party"],
    diet: "nonveg",
    tags: ["Crowd Favourite"],
    img: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=900&q=85",
    desc: "Juicy steamed dumplings served with chilli-garlic dip."
  },
  {
    id: 12,
    name: "Schezwan Fried Rice",
    restaurant: "Wok This Way",
    restaurantId: 4,
    cuisine: "Chinese",
    price: 199,
    rating: 4.5,
    time: "15-20 min",
    moods: ["spicy", "quick"],
    diet: "veg",
    tags: ["Spicy"],
    img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=85",
    desc: "Wok-fried rice tossed with vegetables and bold Schezwan sauce."
  },

  // Burger District
  {
    id: 13,
    name: "Fiery Chicken Burger",
    restaurant: "Burger District",
    restaurantId: 5,
    cuisine: "Fast Food",
    price: 229,
    rating: 4.5,
    time: "15-20 min",
    moods: ["spicy", "quick"],
    diet: "nonveg",
    tags: ["Hot Pick"],
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",
    desc: "Crispy chicken, spicy sauce, lettuce and cheese in a toasted bun."
  },
  {
    id: 14,
    name: "Crispy Veg Burger",
    restaurant: "Burger District",
    restaurantId: 5,
    cuisine: "Fast Food",
    price: 179,
    rating: 4.4,
    time: "15-20 min",
    moods: ["quick", "comfort"],
    diet: "veg",
    tags: ["Value Pick"],
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=85",
    desc: "Crispy vegetable patty with lettuce, cheese and signature sauce."
  },
  {
    id: 15,
    name: "Loaded French Fries",
    restaurant: "Burger District",
    restaurantId: 5,
    cuisine: "Fast Food",
    price: 149,
    rating: 4.5,
    time: "10-15 min",
    moods: ["quick", "party"],
    diet: "veg",
    tags: ["Bestseller"],
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85",
    desc: "Crispy fries topped with cheese, herbs and creamy sauce."
  },

  // Sugar Cloud
  {
    id: 16,
    name: "Mango Cheesecake",
    restaurant: "Sugar Cloud",
    restaurantId: 6,
    cuisine: "Desserts",
    price: 179,
    rating: 4.9,
    time: "20-25 min",
    moods: ["sweet"],
    diet: "veg",
    tags: ["Trending"],
    img: "images/mango_cheesecake.jpg",
    desc: "Silky cheesecake topped with mango compote and biscuit crumble."
  },
  {
    id: 17,
    name: "Chocolate Lava Cake",
    restaurant: "Sugar Cloud",
    restaurantId: 6,
    cuisine: "Desserts",
    price: 149,
    rating: 4.8,
    time: "20-25 min",
    moods: ["sweet", "comfort"],
    diet: "veg",
    tags: ["Must Try"],
    img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",
    desc: "Warm chocolate cake with a rich molten centre."
  },
  {
    id: 18,
    name: "Strawberry Sundae",
    restaurant: "Sugar Cloud",
    restaurantId: 6,
    cuisine: "Desserts",
    price: 159,
    rating: 4.7,
    time: "15-20 min",
    moods: ["sweet", "party"],
    diet: "veg",
    tags: ["Sweet Pick"],
    img: "images/strawberry-sundae.jpg",
    desc: "Creamy vanilla ice cream with strawberry sauce and toppings."
  },

  // South Street
  {
    id: 19,
    name: "Masala Dosa",
    restaurant: "South Street",
    restaurantId: 7,
    cuisine: "South Indian",
    price: 129,
    rating: 4.7,
    time: "15-20 min",
    moods: ["comfort", "quick", "healthy"],
    diet: "veg",
    tags: ["Budget Pick"],
    img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85",
    desc: "Crispy dosa filled with spiced potato and served with chutneys."
  },
  {
    id: 20,
    name: "Idli Sambar",
    restaurant: "South Street",
    restaurantId: 7,
    cuisine: "South Indian",
    price: 99,
    rating: 4.6,
    time: "10-15 min",
    moods: ["healthy", "quick", "comfort"],
    diet: "veg",
    tags: ["Budget Pick"],
    img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=85",
    desc: "Soft steamed idlis served with warm sambar and coconut chutney."
  },
  {
    id: 21,
    name: "Medu Vada",
    restaurant: "South Street",
    restaurantId: 7,
    cuisine: "South Indian",
    price: 119,
    rating: 4.5,
    time: "15-20 min",
    moods: ["quick", "comfort"],
    diet: "veg",
    tags: ["Crispy"],
    img: "https://images.unsplash.com/photo-1630383249896-424e482df921?auto=format&fit=crop&w=900&q=85",
    desc: "Crispy lentil fritters served with sambar and chutney."
  },

  // Punjab Junction
  {
    id: 22,
    name: "Butter Chicken Combo",
    restaurant: "Punjab Junction",
    restaurantId: 8,
    cuisine: "North Indian",
    price: 329,
    rating: 4.8,
    time: "25-30 min",
    moods: ["comfort", "spicy"],
    diet: "nonveg",
    tags: ["Popular"],
    img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85",
    desc: "Creamy butter chicken served with naan and basmati rice."
  },
  {
    id: 23,
    name: "Dal Makhani",
    restaurant: "Punjab Junction",
    restaurantId: 8,
    cuisine: "North Indian",
    price: 199,
    rating: 4.7,
    time: "25-30 min",
    moods: ["comfort"],
    diet: "veg",
    tags: ["Classic"],
    img: "images/dalmakhani.jpg",
    desc: "Slow-cooked black lentils finished with butter and spices."
  },
  {
    id: 24,
    name: "Amritsari Fish",
    restaurant: "Punjab Junction",
    restaurantId: 8,
    cuisine: "North Indian",
    price: 299,
    rating: 4.6,
    time: "30-35 min",
    moods: ["spicy", "party"],
    diet: "nonveg",
    tags: ["Special"],
    img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85",
    desc: "Crispy spiced fish inspired by classic Amritsari street food."
  },

  // Tandoor Tales
  {
    id: 25,
    name: "Paneer Tikka",
    restaurant: "Tandoor Tales",
    restaurantId: 9,
    cuisine: "North Indian",
    price: 249,
    rating: 4.6,
    time: "25-30 min",
    moods: ["spicy", "party"],
    diet: "veg",
    tags: ["Popular"],
    img: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=85",
    desc: "Char-grilled paneer with peppers, onions and smoky spices."
  },
  {
    id: 26,
    name: "Butter Naan",
    restaurant: "Tandoor Tales",
    restaurantId: 9,
    cuisine: "North Indian",
    price: 59,
    rating: 4.8,
    time: "15-20 min",
    moods: ["comfort", "quick"],
    diet: "veg",
    tags: ["Budget Pick"],
    img: "images/butter-naan.jpg",
    desc: "Soft tandoor-baked naan brushed with butter."
  },
  {
    id: 27,
    name: "Chicken Seekh Kebab",
    restaurant: "Tandoor Tales",
    restaurantId: 9,
    cuisine: "North Indian",
    price: 279,
    rating: 4.7,
    time: "25-30 min",
    moods: ["spicy", "party"],
    diet: "nonveg",
    tags: ["Grill Special"],
    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=900&q=85",
    desc: "Juicy minced chicken kebabs grilled with herbs and spices."
  },

  // Pasta Piazza
  {
    id: 28,
    name: "Penne Arrabbiata",
    restaurant: "Pasta Piazza",
    restaurantId: 10,
    cuisine: "Italian",
    price: 289,
    rating: 4.5,
    time: "25-30 min",
    moods: ["spicy", "comfort"],
    diet: "veg",
    tags: ["Spicy"],
    img: "images/penne-arrabbiata.jpg",
    desc: "Penne pasta in a tomato and chilli sauce with Italian herbs."
  },
  {
    id: 29,
    name: "Pesto Pasta",
    restaurant: "Pasta Piazza",
    restaurantId: 10,
    cuisine: "Italian",
    price: 319,
    rating: 4.6,
    time: "25-30 min",
    moods: ["comfort", "healthy"],
    diet: "veg",
    tags: ["Fresh"],
    img: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?auto=format&fit=crop&w=900&q=85",
    desc: "Pasta tossed in basil pesto with herbs and parmesan."
  },
  {
    id: 30,
    name: "Garlic Bread",
    restaurant: "Pasta Piazza",
    restaurantId: 10,
    cuisine: "Italian",
    price: 149,
    rating: 4.5,
    time: "15-20 min",
    moods: ["quick", "comfort", "party"],
    diet: "veg",
    tags: ["Side Favourite"],
    img: "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?auto=format&fit=crop&w=900&q=85",
    desc: "Toasted garlic bread with herbs and melted cheese."
  },

  // Chai & Co.
  {
    id: 31,
    name: "Veg Cheese Sandwich",
    restaurant: "Chai & Co.",
    restaurantId: 11,
    cuisine: "Fast Food",
    price: 149,
    rating: 4.5,
    time: "10-15 min",
    moods: ["quick", "comfort"],
    diet: "veg",
    tags: ["Quick Bite"],
    img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=900&q=85",
    desc: "Toasted sandwich loaded with vegetables, cheese and sauce."
  },
  {
    id: 32,
    name: "Masala Chai",
    restaurant: "Chai & Co.",
    restaurantId: 11,
    cuisine: "Cafe",
    price: 79,
    rating: 4.7,
    time: "10-15 min",
    moods: ["comfort", "quick"],
    diet: "veg",
    tags: ["Tea Time"],
    img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85",
    desc: "Aromatic Indian tea brewed with milk, ginger and spices."
  },
  {
    id: 33,
    name: "Cold Coffee",
    restaurant: "Chai & Co.",
    restaurantId: 11,
    cuisine: "Cafe",
    price: 129,
    rating: 4.6,
    time: "10-15 min",
    moods: ["sweet", "quick"],
    diet: "veg",
    tags: ["Chilled"],
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85",
    desc: "Creamy chilled coffee blended with milk and sweetness."
  },

  // Coastal Curry
  {
    id: 34,
    name: "Cheese Maggi",
    restaurant: "Coastal Curry",
    restaurantId: 12,
    cuisine: "Cafe",
    price: 119,
    rating: 4.5,
    time: "10-15 min",
    moods: ["comfort", "quick"],
    diet: "veg",
    tags: ["Student Pick"],
    img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=85",
    desc: "Hot noodles tossed with vegetables and melted cheese."
  },
  {
    id: 35,
    name: "Fish Curry Rice",
    restaurant: "Coastal Curry",
    restaurantId: 12,
    cuisine: "South Indian",
    price: 299,
    rating: 4.7,
    time: "30-35 min",
    moods: ["comfort", "spicy"],
    diet: "nonveg",
    tags: ["Coastal Special"],
    img: "images/fish-curry.jpg",
    desc: "Tender fish in a fragrant coastal curry served with rice."
  },
  {
    id: 36,
    name: "Coconut Prawn Curry",
    restaurant: "Coastal Curry",
    restaurantId: 12,
    cuisine: "South Indian",
    price: 349,
    rating: 4.6,
    time: "30-35 min",
    moods: ["spicy", "party"],
    diet: "nonveg",
    tags: ["Chef Special"],
    img: "https://www.scrumptiously.com/wp-content/uploads/2023/02/CoconutPrawnCurry.webp",
    desc: "Prawns simmered in creamy coconut curry with coastal spices."
  },

  // Rolls Republic
  {
    id: 37,
    name: "Lemon Rice",
    restaurant: "Rolls Republic",
    restaurantId: 13,
    cuisine: "South Indian",
    price: 139,
    rating: 4.5,
    time: "15-20 min",
    moods: ["healthy", "quick"],
    diet: "veg",
    tags: ["Light Meal"],
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=85",
    desc: "Fluffy rice tempered with lemon, peanuts and curry leaves."
  },
  {
    id: 38,
    name: "Paneer Kathi Roll",
    restaurant: "Rolls Republic",
    restaurantId: 13,
    cuisine: "Fast Food",
    price: 199,
    rating: 4.5,
    time: "15-20 min",
    moods: ["quick", "comfort"],
    diet: "veg",
    tags: ["Street Favourite"],
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/02/paneer-kathi-roll-recipe.jpg",
    desc: "Spiced paneer, onions and chutney wrapped in a soft paratha."
  },
  {
    id: 39,
    name: "Chicken Seekh Roll",
    restaurant: "Rolls Republic",
    restaurantId: 13,
    cuisine: "Fast Food",
    price: 229,
    rating: 4.6,
    time: "15-20 min",
    moods: ["spicy", "quick"],
    diet: "nonveg",
    tags: ["Popular"],
    img: "https://th.bing.com/th/id/R.37e9a2d562177e0ee80269d683c07ba1?rik=zBvQEZY%2buZlQDA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-QpnZv6Mt2kw%2fVgOFEg25fAI%2fAAAAAAAAAww%2fM-Sg4KkSr_k%2fs1600%2fchicken-seekh-roll.jpg&ehk=KZ26w9ZqUP7ATg12Hfty5weERXV7lwcpD%2b36Bs1OQP0%3d&risl=&pid=ImgRaw&r=0",
    desc: "Juicy chicken seekh, onions and sauces wrapped in a flaky roll."
  },

  // The Biryani House
  {
    id: 40,
    name: "Cheese Corn Roll",
    restaurant: "The Biryani House",
    restaurantId: 14,
    cuisine: "Fast Food",
    price: 179,
    rating: 4.4,
    time: "15-20 min",
    moods: ["quick", "party"],
    diet: "veg",
    tags: ["Veg Favourite"],
    img: "https://orders.popskitchen.in/storage/2024/09/image-304.png",
    desc: "Sweet corn and cheese rolled with herbs and creamy sauce."
  },
  {
    id: 41,
    name: "Mutton Biryani",
    restaurant: "The Biryani House",
    restaurantId: 14,
    cuisine: "Biryani",
    price: 349,
    rating: 4.8,
    time: "30-35 min",
    moods: ["comfort", "spicy", "party"],
    diet: "nonveg",
    tags: ["Signature"],
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85",
    desc: "Long-grain basmati rice layered with tender mutton and spices."
  },
  {
    id: 42,
    name: "Chicken 65 Biryani",
    restaurant: "The Biryani House",
    restaurantId: 14,
    cuisine: "Biryani",
    price: 299,
    rating: 4.7,
    time: "25-30 min",
    moods: ["spicy", "party"],
    diet: "nonveg",
    tags: ["Hot Favourite"],
    img: "https://cravingfoodies.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-17-at-10.59.45-AM-1024x585.jpeg",
    desc: "Fragrant biryani topped with crispy spicy chicken 65."
  },

  // Dilli Tadka
  {
    id: 43,
    name: "Veg Dum Biryani",
    restaurant: "Dilli Tadka",
    restaurantId: 15,
    cuisine: "Biryani",
    price: 229,
    rating: 4.6,
    time: "25-30 min",
    moods: ["comfort", "healthy"],
    diet: "veg",
    tags: ["Veg Special"],
    img: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?auto=format&fit=crop&w=900&q=85",
    desc: "Aromatic basmati rice slow-cooked with vegetables and spices."
  },
  {
    id: 44,
    name: "Aloo Tikki Chaat",
    restaurant: "Dilli Tadka",
    restaurantId: 15,
    cuisine: "Fast Food",
    price: 99,
    rating: 4.5,
    time: "10-15 min",
    moods: ["quick", "spicy", "party"],
    diet: "veg",
    tags: ["Street Favourite"],
    img: "https://tse1.mm.bing.net/th/id/OIP.IoX3gNJ3FzsYGnen21yX0wHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Crispy potato patties topped with yoghurt, chutneys and spices."
  },
  {
    id: 45,
    name: "Chole Bhature",
    restaurant: "Dilli Tadka",
    restaurantId: 15,
    cuisine: "North Indian",
    price: 179,
    rating: 4.7,
    time: "20-25 min",
    moods: ["comfort", "spicy"],
    diet: "veg",
    tags: ["Popular"],
    img: "https://static.vecteezy.com/system/resources/previews/015/933/726/large_2x/chole-bhature-is-a-north-indian-food-dish-a-combination-of-chana-masala-and-bhatura-or-puri-free-photo.jpg",
    desc: "Fluffy bhature served with spicy chickpea curry."
  },

  // Sushi Sakura
  {
    id: 46,
    name: "Pav Bhaji",
    restaurant: "Sushi Sakura",
    restaurantId: 16,
    cuisine: "Fast Food",
    price: 149,
    rating: 4.6,
    time: "15-20 min",
    moods: ["comfort", "quick"],
    diet: "veg",
    tags: ["Classic"],
    img: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg",
    desc: "Buttery toasted pav served with spicy vegetable bhaji."
  },
  {
    id: 47,
    name: "Salmon Sushi Roll",
    restaurant: "Sushi Sakura",
    restaurantId: 16,
    cuisine: "Japanese",
    price: 399,
    rating: 4.7,
    time: "30-35 min",
    moods: ["healthy", "party"],
    diet: "nonveg",
    tags: ["Premium"],
    img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=85",
    desc: "Fresh salmon and seasoned rice rolled with crisp vegetables."
  },
  {
    id: 48,
    name: "Veg California Roll",
    restaurant: "Sushi Sakura",
    restaurantId: 16,
    cuisine: "Japanese",
    price: 329,
    rating: 4.6,
    time: "30-35 min",
    moods: ["healthy", "quick"],
    diet: "veg",
    tags: ["Fresh"],
    img: "https://tse4.mm.bing.net/th/id/OIP.A8eT8G6whr4NWeLgIDR1CQHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Seasoned rice, avocado and crunchy vegetables in a sushi roll."
  },

  // The Healthy Fork
  {
    id: 49,
    name: "Teriyaki Chicken Bowl",
    restaurant: "The Healthy Fork",
    restaurantId: 17,
    cuisine: "Japanese",
    price: 349,
    rating: 4.7,
    time: "25-30 min",
    moods: ["healthy", "comfort"],
    diet: "nonveg",
    tags: ["Balanced"],
    img: "https://simplehomeedit.com/wp-content/uploads/2021/04/Chicken-Teriyaki-Bowl-Recipe.webp",
    desc: "Grilled chicken glazed with teriyaki sauce, rice and vegetables."
  },
  {
    id: 50,
    name: "Quinoa Power Bowl",
    restaurant: "The Healthy Fork",
    restaurantId: 17,
    cuisine: "Healthy",
    price: 279,
    rating: 4.7,
    time: "15-20 min",
    moods: ["healthy", "quick"],
    diet: "veg",
    tags: ["Protein Rich"],
    img: "https://tse3.mm.bing.net/th/id/OIP.VKPTTpGIKLG3c7y-MPIHUgHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Quinoa, roasted vegetables, greens and seeds with dressing."
  },
  {
    id: 51,
    name: "Avocado Toast",
    restaurant: "The Healthy Fork",
    restaurantId: 17,
    cuisine: "Healthy",
    price: 229,
    rating: 4.6,
    time: "10-15 min",
    moods: ["healthy", "quick"],
    diet: "veg",
    tags: ["Fresh"],
    img: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=900&q=85",
    desc: "Toasted bread topped with creamy avocado, seeds and herbs."
  },

  // Frost & Whisk
  {
    id: 52,
    name: "Fruit & Granola Bowl",
    restaurant: "Frost & Whisk",
    restaurantId: 18,
    cuisine: "Healthy",
    price: 199,
    rating: 4.8,
    time: "10-15 min",
    moods: ["healthy", "sweet", "quick"],
    diet: "veg",
    tags: ["Fresh"],
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    desc: "Seasonal fruit, crunchy granola and yoghurt."
  },
  {
    id: 53,
    name: "Classic Vanilla Scoop",
    restaurant: "Frost & Whisk",
    restaurantId: 18,
    cuisine: "Desserts",
    price: 119,
    rating: 4.7,
    time: "10-15 min",
    moods: ["sweet"],
    diet: "veg",
    tags: ["Classic"],
    img: "https://thumbs.dreamstime.com/b/classic-vanilla-ice-cream-scoops-glass-dessert-cup-classic-presentation-vanilla-ice-cream-scoops-elegantly-served-339409260.jpg",
    desc: "Smooth creamy vanilla ice cream served chilled."
  },
  {
    id: 54,
    name: "Brownie Sundae",
    restaurant: "Frost & Whisk",
    restaurantId: 18,
    cuisine: "Desserts",
    price: 199,
    rating: 4.9,
    time: "15-20 min",
    moods: ["sweet", "party", "comfort"],
    diet: "veg",
    tags: ["Must Try"],
    img: "https://tse1.mm.bing.net/th/id/OIP.TazQx6yLkZeq8sNzYStaAwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    desc: "Warm chocolate brownie topped with ice cream and chocolate sauce."
  }
];


// ============================================================
// APPLICATION STATE
// ============================================================

let state = {
  mood: "all",
  budget: 500,
  cuisine: "all",
  diet: "all",
  search: "",
  selectedRestaurant: "all",

  cart: JSON.parse(
    localStorage.getItem("tastigo-cart") || "[]"
  ),

  favorites: JSON.parse(
    localStorage.getItem("tastigo-favorites") || "[]"
  )
};


// ============================================================
// SHORT DOM HELPERS
// ============================================================

const $ = selector => document.querySelector(selector);

const $$ = selector => [
  ...document.querySelectorAll(selector)
];


// ============================================================
// SAVE LOCAL DATA
// ============================================================

function saveState() {
  localStorage.setItem(
    "tastigo-cart",
    JSON.stringify(state.cart)
  );

  localStorage.setItem(
    "tastigo-favorites",
    JSON.stringify(state.favorites)
  );
}


// ============================================================
// TOAST MESSAGE
// ============================================================

function showToast(message, type = "normal") {

  const container = $("#toast-container");

  if (!container) return;

  const toast = document.createElement("div");

  toast.className = `toast ${type}`;

  toast.innerHTML = `
    <span>${type === "success" ? "✓" : "i"}</span>
    ${message}
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 20);

  setTimeout(() => {

    toast.classList.remove("show");

    setTimeout(() => {
      toast.remove();
    }, 250);

  }, 2800);
}


// ============================================================
// FILTER MATCHING
// ============================================================

function matchesFilters(food) {

  const query = state.search
    .trim()
    .toLowerCase();

  const searchableText =
    `${food.name}
     ${food.restaurant}
     ${food.cuisine}
     ${food.tags.join(" ")}`
      .toLowerCase();

  const searchOk =
    !query ||
    searchableText.includes(query);

  const moodOk =
    state.mood === "all" ||
    food.moods.includes(state.mood);

  const cuisineOk =
    state.cuisine === "all" ||
    food.cuisine === state.cuisine;

  const dietOk =
    state.diet === "all" ||
    food.diet === state.diet;

  const restaurantOk =
    state.selectedRestaurant === "all" ||
    food.restaurantId ===
      Number(state.selectedRestaurant);

  const budgetOk =
    food.price <= state.budget;

  return (
    searchOk &&
    moodOk &&
    cuisineOk &&
    dietOk &&
    restaurantOk &&
    budgetOk
  );
}


// ============================================================
// RENDER FOOD ITEMS
// ============================================================

function renderFoods() {

  const grid = $("#foodGrid");

  if (!grid) return;

  const list =
    foods.filter(matchesFilters);

  const count =
    $("#resultCount");

  if (count) {
    count.textContent = list.length;
  }

  const moodNames = {
    all: "Top picks for your mood",
    comfort: "Comfort food picks",
    spicy: "Spicy picks",
    healthy: "Healthy picks",
    sweet: "Sweet cravings",
    quick: "Quick bite picks",
    party: "Party-ready picks"
  };

  const heading =
    $("#resultHeading");

  if (heading) {

    if (
      state.selectedRestaurant !== "all"
    ) {

      const restaurant =
        restaurants.find(
          r =>
            r.id ===
            Number(
              state.selectedRestaurant
            )
        );

      heading.textContent =
        restaurant
          ? `${restaurant.name} — Menu`
          : "Restaurant Menu";

    } else {

      heading.textContent =
        state.search
          ? `Results for “${state.search}”`
          : moodNames[state.mood];
    }
  }

  const emptyState =
    $("#emptyState");

  if (emptyState) {
    emptyState.classList.toggle(
      "hidden",
      list.length !== 0
    );
  }

  grid.innerHTML =
    list.map(foodCard).join("");
}


// ============================================================
// FOOD CARD
// ============================================================

function foodCard(food) {

  const favourite =
    state.favorites.includes(food.id);

  return `
    <article class="food-card">

      <div
        class="food-image-wrap"
        data-open-item="${food.id}"
      >

        <img
          src="${food.img}"
          alt="${food.name}"
          loading="lazy"
        >

        <span class="food-badge">
          ${food.tags[0]}
        </span>

        <span
          class="veg-dot"
          title="${
            food.diet === "veg"
              ? "Vegetarian"
              : "Non-vegetarian"
          }"
        ></span>

        <button
          class="fav-btn ${
            favourite ? "active" : ""
          }"
          data-fav="${food.id}"
          aria-label="Favourite"
        >
          ${favourite ? "♥" : "♡"}
        </button>

      </div>

      <div class="food-info">

        <h3>${food.name}</h3>

        <div class="food-sub">
          ${food.restaurant}
          ·
          ${food.cuisine}
        </div>

        <div class="food-meta">

          <span class="rating">
            ★ ${food.rating}
          </span>

          <span>
            ${food.time}
          </span>

          <strong class="price">
            ₹${food.price}
          </strong>

        </div>

        <button
          class="add-btn"
          data-add="${food.id}"
        >
          + Add to cart
        </button>

      </div>

    </article>
  `;
}


// ============================================================
// RENDER RESTAURANTS
// ============================================================

function renderRestaurants(showAll = false) {

  const grid =
    $("#restaurantGrid");

  if (!grid) return;

  const list =
    showAll
      ? restaurants
      : restaurants.slice(0, 6);

  grid.innerHTML =
    list.map(restaurant => {

      return `
        <article
          class="restaurant-card"
          data-restaurant="${restaurant.id}"
          role="button"
          tabindex="0"
        >

          <img
            src="${restaurant.img}"
            alt="${restaurant.name}"
            loading="lazy"
          >

          <div class="restaurant-info">

            <h3>
              ${restaurant.name}
            </h3>

            <p>
              ${restaurant.cuisine}
            </p>

            <div class="restaurant-line">

              <span class="restaurant-rating">
                ★ ${restaurant.rating}
              </span>

              <span>
                ⏱ ${restaurant.time}
              </span>

            </div>

            <button
              class="text-btn restaurant-menu-btn"
              data-restaurant="${restaurant.id}"
            >
              View menu →
            </button>

          </div>

        </article>
      `;

    }).join("");
}


// ============================================================
// OPEN RESTAURANT MENU
// ============================================================

function openRestaurantMenu(id) {

  const restaurant =
    restaurants.find(
      r => r.id === Number(id)
    );

  if (!restaurant) return;

  state.selectedRestaurant =
    restaurant.id;

  state.search = "";

  if ($("#globalSearch")) {
    $("#globalSearch").value = "";
  }

  if ($("#heroSearch")) {
    $("#heroSearch").value = "";
  }

  if ($("#clearSearch")) {
    $("#clearSearch").style.display =
      "none";
  }

  renderFoods();

  const section =
    $("#recommendationSection");

  if (section) {

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }

  showToast(
    `${restaurant.name} menu opened`,
    "success"
  );
}


// ============================================================
// CLEAR RESTAURANT
// ============================================================

function clearRestaurantSelection() {

  state.selectedRestaurant =
    "all";

  renderFoods();
}


// ============================================================
// ADD TO CART
// ============================================================

function addToCart(id) {

  const food =
    foods.find(
      item => item.id === id
    );

  if (!food) return;

  const existing =
    state.cart.find(
      item => item.id === id
    );

  if (existing) {

    existing.qty++;

  } else {

    state.cart.push({
      id: id,
      qty: 1
    });

  }

  saveState();

  renderCart();

  updateCartCount();

  showToast(
    `${food.name} added to your cart`,
    "success"
  );
}


// ============================================================
// CART COUNT
// ============================================================

function updateCartCount() {

  const cartCount =
    $("#cartCount");

  if (!cartCount) return;

  cartCount.textContent =
    state.cart.reduce(
      (total, item) =>
        total + item.qty,
      0
    );
}


// ============================================================
// RENDER CART
// ============================================================

function renderCart() {

  const body =
    $("#cartBody");

  const footer =
    $("#cartFooter");

  if (!body || !footer) return;

  if (!state.cart.length) {

    body.innerHTML = `
      <div class="cart-empty">

        <div>🛒</div>

        <h3>
          Your cart is waiting
        </h3>

        <p>
          Add something delicious
          to get started.
        </p>

      </div>
    `;

    footer.innerHTML = "";

    return;
  }

  body.innerHTML =
    state.cart.map(item => {

      const food =
        foods.find(
          f => f.id === item.id
        );

      if (!food) return "";

      return `
        <div class="cart-item">

          <img
            src="${food.img}"
            alt="${food.name}"
          >

          <div>

            <h4>
              ${food.name}
            </h4>

            <small>
              ₹${food.price}
              ·
              ${food.restaurant}
            </small>

            <div class="qty">

              <button
                data-qty="${food.id}"
                data-change="-1"
              >
                −
              </button>

              <span>
                ${item.qty}
              </span>

              <button
                data-qty="${food.id}"
                data-change="1"
              >
                +
              </button>

            </div>

          </div>

          <strong>
            ₹${food.price * item.qty}
          </strong>

        </div>
      `;

    }).join("");

  const subtotal =
    state.cart.reduce(
      (total, item) => {

        const food =
          foods.find(
            f => f.id === item.id
          );

        return total +
          (
            food
              ? food.price * item.qty
              : 0
          );

      },
      0
    );

  const delivery =
    subtotal >= 399
      ? 0
      : 35;

  const total =
    subtotal + delivery;

  footer.innerHTML = `

    <div class="bill-line">
      <span>Item total</span>
      <span>₹${subtotal}</span>
    </div>

    <div class="bill-line">
      <span>Delivery fee</span>
      <span>
        ${
          delivery === 0
            ? "FREE"
            : "₹35"
        }
      </span>
    </div>

    <div class="bill-line total">
      <span>Total</span>
      <span>₹${total}</span>
    </div>

    <button
      class="checkout-btn"
      id="checkoutBtn"
    >
      Proceed to checkout →
    </button>
  `;
}


// ============================================================
// PANELS / MODALS
// ============================================================

function openPanel(id) {

  const overlay =
    $("#overlay");

  const panel =
    $(id);

  if (overlay) {
    overlay.classList.add("active");
  }

  if (panel) {
    panel.classList.add("open");
  }
}


function closeAll() {

  const overlay =
    $("#overlay");

  if (overlay) {
    overlay.classList.remove(
      "active"
    );
  }

  $$(".side-panel, .modal")
    .forEach(element => {
      element.classList.remove(
        "open"
      );
    });
}


function openModal(id) {

  closeAll();

  const modal =
    $(id);

  if (modal) {
    modal.classList.add("open");
  }
}


// ============================================================
// FOOD DETAILS
// ============================================================

function showItem(id) {

  const food =
    foods.find(
      item => item.id === id
    );

  if (!food) return;

  const content =
    $("#itemModalContent");

  if (!content) return;

  content.innerHTML = `

    <img
      class="item-modal-hero"
      src="${food.img}"
      alt="${food.name}"
    >

    <div class="item-modal-info">

      <span class="mini-label">
        ${food.restaurant.toUpperCase()}
      </span>

      <h2>
        ${food.name}
      </h2>

      <p class="muted">
        ${food.desc}
      </p>

      <div class="item-tags">

        ${food.moods.map(
          mood =>
            `<span class="item-tag">
              ${mood}
            </span>`
        ).join("")}

        <span class="item-tag">
          ${food.cuisine}
        </span>

        <span class="item-tag">
          ${
            food.diet === "veg"
              ? "Vegetarian"
              : "Non-vegetarian"
          }
        </span>

      </div>

      <div class="item-modal-bottom">

        <strong>
          ₹${food.price}
        </strong>

        <button
          class="primary-btn"
          data-add="${food.id}"
        >
          Add to cart
        </button>

      </div>

    </div>
  `;

  openModal("#itemModal");
}


// ============================================================
// APPLY FILTERS
// ============================================================

function applyFilters() {

  renderFoods();

  const section =
    $("#recommendationSection");

  if (section) {

    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }

  const count =
    $("#resultCount");

  showToast(
    `${count ? count.textContent : 0} tasty matches found`,
    "success"
  );
}


// ============================================================
// SEARCH
// ============================================================

function setSearch(value) {

  state.search =
    value;

  state.selectedRestaurant =
    "all";

  if ($("#globalSearch")) {
    $("#globalSearch").value =
      value;
  }

  if ($("#heroSearch")) {
    $("#heroSearch").value =
      value;
  }

  if ($("#clearSearch")) {
    $("#clearSearch").style.display =
      value ? "block" : "none";
  }

  renderFoods();
}


// ============================================================
// RESET FILTERS
// ============================================================

function resetFilters() {

  state.mood = "all";
  state.budget = 500;
  state.cuisine = "all";
  state.diet = "all";
  state.search = "";
  state.selectedRestaurant = "all";

  if ($("#budgetSlider")) {
    $("#budgetSlider").value =
      500;
  }

  if ($("#budgetValue")) {
    $("#budgetValue").textContent =
      500;
  }

  $$(".mood-card")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.mood === "all"
      );

    });

  $$("[data-cuisine]")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.cuisine === "all"
      );

    });

  $$(".diet-pill")
    .forEach(button => {

      button.classList.remove(
        "active"
      );

    });

  if ($("#globalSearch")) {
    $("#globalSearch").value = "";
  }

  if ($("#heroSearch")) {
    $("#heroSearch").value = "";
  }

  if ($("#clearSearch")) {
    $("#clearSearch").style.display =
      "none";
  }

  renderFoods();

  showToast(
    "Filters reset"
  );
}


// ============================================================
// ADD MORE CUISINE FILTERS AUTOMATICALLY
// ============================================================

function addDynamicCuisinePills() {

  const container =
    $("#cuisinePills");

  if (!container) return;

  const cuisines =
    [
      ...new Set(
        foods.map(
          food => food.cuisine
        )
      )
    ];

  cuisines.forEach(cuisine => {

    const exists =
      [
        ...container.querySelectorAll(
          "[data-cuisine]"
        )
      ].some(
        button =>
          button.dataset.cuisine ===
          cuisine
      );

    if (exists) return;

    const button =
      document.createElement(
        "button"
      );

    button.className =
      "choice-pill";

    button.dataset.cuisine =
      cuisine;

    button.textContent =
      cuisine;

    container.appendChild(
      button
    );
  });
}


// ============================================================
// MOOD FILTER
// ============================================================

$$(".mood-card")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        $$(".mood-card")
          .forEach(item =>
            item.classList.remove(
              "active"
            )
          );

        button.classList.add(
          "active"
        );

        state.mood =
          button.dataset.mood;

        state.selectedRestaurant =
          "all";

        renderFoods();
      }
    );

  });


// ============================================================
// BUDGET FILTER
// ============================================================

const budgetSlider =
  $("#budgetSlider");

if (budgetSlider) {

  budgetSlider.addEventListener(
    "input",
    event => {

      state.budget =
        Number(
          event.target.value
        );

      if ($("#budgetValue")) {

        $("#budgetValue")
          .textContent =
          state.budget;

      }

      renderFoods();
    }
  );
}


// ============================================================
// GLOBAL CLICK EVENTS
// ============================================================

document.addEventListener(
  "click",
  event => {

    // -------------------------
    // Cuisine
    // -------------------------

    const cuisine =
      event.target.closest(
        "[data-cuisine]"
      );

    if (cuisine) {

      $$("[data-cuisine]")
        .forEach(button =>
          button.classList.remove(
            "active"
          )
        );

      cuisine.classList.add(
        "active"
      );

      state.cuisine =
        cuisine.dataset.cuisine;

      state.selectedRestaurant =
        "all";

      renderFoods();

      return;
    }


    // -------------------------
    // Diet
    // -------------------------

    const diet =
      event.target.closest(
        "[data-diet]"
      );

    if (diet) {

      const active =
        diet.classList.contains(
          "active"
        );

      $$(".diet-pill")
        .forEach(button =>
          button.classList.remove(
            "active"
          )
        );

      state.diet =
        active
          ? "all"
          : diet.dataset.diet;

      if (!active) {
        diet.classList.add(
          "active"
        );
      }

      renderFoods();

      return;
    }


    // -------------------------
    // Restaurant
    // -------------------------

    const restaurantButton =
      event.target.closest(
        "[data-restaurant]"
      );

    if (restaurantButton) {

      event.stopPropagation();

      openRestaurantMenu(
        restaurantButton.dataset.restaurant
      );

      return;
    }


    // -------------------------
    // Add to cart
    // -------------------------

    const add =
      event.target.closest(
        "[data-add]"
      );

    if (add) {

      addToCart(
        Number(
          add.dataset.add
        )
      );

      if (
        event.target.closest(
          "#itemModal"
        )
      ) {
        closeAll();
      }

      return;
    }


    // -------------------------
    // Favourite
    // -------------------------

    const favourite =
      event.target.closest(
        "[data-fav]"
      );

    if (favourite) {

      event.stopPropagation();

      const id =
        Number(
          favourite.dataset.fav
        );

      if (
        state.favorites.includes(
          id
        )
      ) {

        state.favorites =
          state.favorites.filter(
            item => item !== id
          );

        showToast(
          "Removed from favourites"
        );

      } else {

        state.favorites.push(
          id
        );

        showToast(
          "Added to favourites",
          "success"
        );
      }

      saveState();

      renderFoods();

      return;
    }


    // -------------------------
    // Food details
    // -------------------------

    const food =
      event.target.closest(
        "[data-open-item]"
      );

    if (
      food &&
      !event.target.closest(
        "[data-fav]"
      )
    ) {

      showItem(
        Number(
          food.dataset.openItem
        )
      );

      return;
    }


    // -------------------------
    // Cart quantity
    // -------------------------

    const quantityButton =
      event.target.closest(
        "[data-qty]"
      );

    if (quantityButton) {

      const id =
        Number(
          quantityButton.dataset.qty
        );

      const change =
        Number(
          quantityButton.dataset.change
        );

      const item =
        state.cart.find(
          cartItem =>
            cartItem.id === id
        );

      if (item) {

        item.qty += change;

        if (item.qty <= 0) {

          state.cart =
            state.cart.filter(
              cartItem =>
                cartItem.id !== id
            );
        }
      }

      saveState();

      renderCart();

      updateCartCount();
    }

  }
);


// ============================================================
// SEARCH INPUTS
// ============================================================

const globalSearch =
  $("#globalSearch");

if (globalSearch) {

  globalSearch.addEventListener(
    "input",
    event => {

      setSearch(
        event.target.value
      );

    }
  );
}


const heroSearch =
  $("#heroSearch");

if (heroSearch) {

  heroSearch.addEventListener(
    "input",
    event => {

      setSearch(
        event.target.value
      );

    }
  );
}


// ============================================================
// HERO SEARCH BUTTON
// ============================================================

const heroSearchBtn =
  $("#heroSearchBtn");

if (heroSearchBtn) {

  heroSearchBtn.addEventListener(
    "click",
    () => {

      const section =
        $("#recommendationSection");

      if (section) {

        section.scrollIntoView({
          behavior: "smooth"
        });

      }

    }
  );
}


// ============================================================
// CLEAR SEARCH
// ============================================================

const clearSearch =
  $("#clearSearch");

if (clearSearch) {

  clearSearch.addEventListener(
    "click",
    () => {

      setSearch("");

    }
  );
}


// ============================================================
// QUICK SEARCH BUTTONS
// ============================================================

$$(".quick-search")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        setSearch(
          button.dataset.search
        );

        const section =
          $("#recommendationSection");

        if (section) {

          section.scrollIntoView({
            behavior: "smooth"
          });

        }

      }
    );

  });


// ============================================================
// FILTER BUTTONS
// ============================================================

const applyFilter =
  $("#applyFilter");

if (applyFilter) {

  applyFilter.addEventListener(
    "click",
    applyFilters
  );
}


const resetMood =
  $("#resetMood");

if (resetMood) {

  resetMood.addEventListener(
    "click",
    resetFilters
  );
}


const emptyReset =
  $("#emptyReset");

if (emptyReset) {

  emptyReset.addEventListener(
    "click",
    resetFilters
  );
}


// ============================================================
// CART BUTTON
// ============================================================

const cartBtn =
  $("#cartBtn");

if (cartBtn) {

  cartBtn.addEventListener(
    "click",
    () => {

      renderCart();

      openPanel(
        "#cartPanel"
      );

    }
  );
}


// ============================================================
// LOGIN
// ============================================================

const loginBtn =
  $("#loginBtn");

if (loginBtn) {

  loginBtn.addEventListener(
    "click",
    () => {

      openModal(
        "#loginModal"
      );

    }
  );
}


// ============================================================
// LOCATION
// ============================================================

const locationBtn =
  $("#locationBtn");

if (locationBtn) {

  locationBtn.addEventListener(
    "click",
    () => {

      openModal(
        "#locationModal"
      );

    }
  );
}


// ============================================================
// ORDERS
// ============================================================

const ordersBtn =
  $("#ordersBtn");

if (ordersBtn) {

  ordersBtn.addEventListener(
    "click",
    () => {

      openModal(
        "#orderModal"
      );

    }
  );
}


// ============================================================
// OFFERS
// ============================================================

const offersBtn =
  $("#offersBtn");

if (offersBtn) {

  offersBtn.addEventListener(
    "click",
    () => {

      showToast(
        "TASTY100 gives ₹100 OFF on your first demo order",
        "success"
      );

    }
  );
}


// ============================================================
// CLAIM OFFER
// ============================================================

const claimOffer =
  $("#claimOffer");

if (claimOffer) {

  claimOffer.addEventListener(
    "click",
    async () => {

      try {

        await navigator.clipboard
          .writeText(
            "TASTY100"
          );

        showToast(
          "TASTY100 copied to clipboard",
          "success"
        );

      } catch {

        showToast(
          "Use code TASTY100 at checkout",
          "success"
        );

      }

    }
  );
}


// ============================================================
// SAVE LOCATION
// ============================================================

const saveLocation =
  $("#saveLocation");

if (saveLocation) {

  saveLocation.addEventListener(
    "click",
    () => {

      const input =
        $("#locationInput");

      const value =
        input &&
        input.value.trim()
          ? input.value.trim()
          : "Jaipur, Rajasthan";

      const locationText =
        document.querySelector(
          ".location-btn strong"
        );

      if (locationText) {

        locationText.textContent =
          value;

      }

      closeAll();

      showToast(
        `Delivery location set to ${value}`,
        "success"
      );

    }
  );
}


// ============================================================
// MOBILE MENU
// ============================================================

const mobileMenu =
  $("#mobileMenu");

if (mobileMenu) {

  mobileMenu.addEventListener(
    "click",
    () => {

      showToast(
        "Use the search and Smart Filter to explore Tastigo"
      );

    }
  );
}


// ============================================================
// OVERLAY
// ============================================================

const overlay =
  $("#overlay");

if (overlay) {

  overlay.addEventListener(
    "click",
    closeAll
  );
}


// ============================================================
// CLOSE BUTTONS
// ============================================================

$$("[data-close]")
  .forEach(button => {

    button.addEventListener(
      "click",
      closeAll
    );

  });


// ============================================================
// ESCAPE KEY
// ============================================================

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      closeAll();

    }

  }
);


// ============================================================
// LOGIN FORM
// ============================================================

const loginForm =
  $("#loginForm");

if (loginForm) {

  loginForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      closeAll();

      showToast(
        "Demo sign-in successful. Backend authentication can be connected later.",
        "success"
      );

    }
  );
}


// ============================================================
// CHECKOUT
// ============================================================

document.addEventListener(
  "click",
  event => {

    if (
      event.target.id ===
      "checkoutBtn"
    ) {

      if (
        !state.cart.length
      ) {
        return;
      }

      closeAll();

      openModal(
        "#orderModal"
      );

      showToast(
        "Demo order placed successfully!",
        "success"
      );

    }

  }
);


// ============================================================
// VIEW ALL RESTAURANTS
// ============================================================

let showingAllRestaurants =
  false;

const viewAllRestaurants =
  $("#viewAllRestaurants");

if (viewAllRestaurants) {

  viewAllRestaurants.addEventListener(
    "click",
    () => {

      showingAllRestaurants =
        !showingAllRestaurants;

      renderRestaurants(
        showingAllRestaurants
      );

      viewAllRestaurants.textContent =
        showingAllRestaurants
          ? "Show fewer ↑"
          : "View all →";

      if (
        showingAllRestaurants
      ) {

        const section =
          document.querySelector(
            ".restaurant-section"
          );

        if (section) {

          section.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

        }

      }

    }
  );
}


// ============================================================
// COUPON CARD
// ============================================================

const couponCard =
  document.querySelector(
    ".coupon-card"
  );

if (couponCard) {

  couponCard.addEventListener(
    "click",
    async () => {

      try {

        await navigator.clipboard
          .writeText(
            "TASTY100"
          );

        showToast(
          "Coupon TASTY100 copied",
          "success"
        );

      } catch {

        showToast(
          "Coupon: TASTY100",
          "success"
        );

      }

    }
  );
}


// ============================================================
// INITIALIZE TASTIGO
// ============================================================

addDynamicCuisinePills();

renderFoods();

renderRestaurants(false);

renderCart();

updateCartCount();


// ============================================================
// END OF SCRIPT
// ============================================================
