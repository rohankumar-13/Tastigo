const foods = [
  {id:1,name:"Royal Handi Biryani",restaurant:"Royal Handi",cuisine:"North Indian",price:249,rating:4.8,time:"25-30 min",moods:["comfort","spicy","party"],diet:"nonveg",tags:["Best seller","Spicy"],img:"https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=900&q=85",desc:"Fragrant basmati rice, slow-cooked spices and tender chicken in a traditional handi."},
  {id:2,name:"Paneer Tikka Bowl",restaurant:"Green Bowl Co.",cuisine:"North Indian",price:199,rating:4.7,time:"20-25 min",moods:["healthy","comfort","quick"],diet:"veg",tags:["High protein","Veg"],img:"https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=85",desc:"Smoky paneer, colourful vegetables, rice and a refreshing mint dressing."},
  {id:3,name:"Truffle Mushroom Pizza",restaurant:"Crust & Craft",cuisine:"Italian",price:399,rating:4.6,time:"30-35 min",moods:["comfort","party"],diet:"veg",tags:["Chef special"],img:"https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85",desc:"Crisp artisan base, creamy mozzarella, mushrooms and a delicate truffle finish."},
  {id:4,name:"Fiery Chicken Burger",restaurant:"Burger District",cuisine:"Fast Food",price:229,rating:4.5,time:"15-20 min",moods:["spicy","quick"],diet:"nonveg",tags:["Hot pick"],img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85",desc:"Crispy chicken, spicy sauce, lettuce and cheese in a toasted brioche bun."},
  {id:5,name:"Mango Bliss Cheesecake",restaurant:"Sugar Cloud",cuisine:"Desserts",price:179,rating:4.9,time:"20-25 min",moods:["sweet"],diet:"veg",tags:["Trending"],img:"https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=900&q=85",desc:"Silky cheesecake topped with bright mango compote and biscuit crumble."},
  {id:6,name:"Hakka Veg Noodles",restaurant:"Wok This Way",cuisine:"Chinese",price:169,rating:4.4,time:"15-20 min",moods:["quick","comfort"],diet:"veg",tags:["Value pick"],img:"https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&w=900&q=85",desc:"Wok-tossed noodles with crunchy vegetables, spring onion and savoury sauce."},
  {id:7,name:"Masala Dosa",restaurant:"South Street",cuisine:"South Indian",price:129,rating:4.7,time:"15-20 min",moods:["comfort","quick","healthy"],diet:"veg",tags:["Budget pick"],img:"https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85",desc:"Golden crisp dosa filled with spiced potato, served with sambar and chutneys."},
  {id:8,name:"Berry Protein Smoothie",restaurant:"Green Bowl Co.",cuisine:"Healthy",price:219,rating:4.6,time:"10-15 min",moods:["healthy","quick"],diet:"veg",tags:["Fresh"],img:"https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=85",desc:"A refreshing blend of berries, banana, yoghurt and seeds for a quick boost."},
  {id:9,name:"Butter Chicken Combo",restaurant:"Punjab Junction",cuisine:"North Indian",price:329,rating:4.8,time:"25-30 min",moods:["comfort","spicy"],diet:"nonveg",tags:["Popular"],img:"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85",desc:"Creamy tomato butter chicken paired with naan and fragrant basmati rice."},
  {id:10,name:"Classic Margherita",restaurant:"Crust & Craft",cuisine:"Italian",price:299,rating:4.5,time:"25-30 min",moods:["comfort","quick"],diet:"veg",tags:["Classic"],img:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85",desc:"Simple, elegant pizza with tomato, mozzarella, basil and extra virgin olive oil."},
  {id:11,name:"Chocolate Lava Cake",restaurant:"Sugar Cloud",cuisine:"Desserts",price:149,rating:4.8,time:"20-25 min",moods:["sweet","comfort"],diet:"veg",tags:["Must try"],img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=85",desc:"Warm chocolate cake with a rich molten centre. Best enjoyed immediately."},
  {id:12,name:"Chicken Momos",restaurant:"Wok This Way",cuisine:"Chinese",price:159,rating:4.6,time:"15-20 min",moods:["spicy","quick","party"],diet:"nonveg",tags:["Crowd favourite"],img:"https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=900&q=85",desc:"Juicy steamed dumplings served with fiery chilli-garlic dip."}
];

const restaurants = [
  {name:"Royal Handi", cuisine:"North Indian • Biryani",rating:"4.8",time:"25-30 min",img:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"},
  {name:"Crust & Craft", cuisine:"Italian • Pizza",rating:"4.6",time:"30-35 min",img:"https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"},
  {name:"Green Bowl Co.", cuisine:"Healthy • Salads",rating:"4.7",time:"20-25 min",img:"https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"},
  {name:"Wok This Way", cuisine:"Chinese • Asian",rating:"4.6",time:"15-20 min",img:"https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"}
];

let state = {
  mood:"all", budget:500, cuisine:"all", diet:"all",
  search:"", cart:JSON.parse(localStorage.getItem("tastigo-cart") || "[]"),
  favorites:JSON.parse(localStorage.getItem("tastigo-favorites") || "[]")
};

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

function saveState(){
  localStorage.setItem("tastigo-cart", JSON.stringify(state.cart));
  localStorage.setItem("tastigo-favorites", JSON.stringify(state.favorites));
}

function showToast(message, type="normal"){
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${type==="success" ? "✓" : "i"}</span>${message}`;
  $("#toast-container").appendChild(toast);
  setTimeout(()=>toast.classList.add("show"),20);
  setTimeout(()=>{ toast.classList.remove("show"); setTimeout(()=>toast.remove(),250); },2800);
}

function matchesFilters(food){
  const query = state.search.trim().toLowerCase();
  const text = `${food.name} ${food.restaurant} ${food.cuisine} ${food.tags.join(" ")}`.toLowerCase();
  const searchOk = !query || text.includes(query);
  const moodOk = state.mood === "all" || food.moods.includes(state.mood);
  const cuisineOk = state.cuisine === "all" || food.cuisine === state.cuisine;
  const dietOk = state.diet === "all" || food.diet === state.diet;
  return searchOk && moodOk && cuisineOk && dietOk && food.price <= state.budget;
}

function renderFoods(){
  const list = foods.filter(matchesFilters);
  $("#resultCount").textContent = list.length;
  const moodNames = {all:"Top picks for your mood",comfort:"Comfort food picks",spicy:"Spicy picks",healthy:"Healthy picks",sweet:"Sweet cravings",quick:"Quick bite picks",party:"Party-ready picks"};
  $("#resultHeading").textContent = state.search ? `Results for “${state.search}”` : moodNames[state.mood];
  const grid = $("#foodGrid");
  $("#emptyState").classList.toggle("hidden", list.length !== 0);
  grid.innerHTML = list.map(foodCard).join("");
}

function foodCard(food){
  const fav = state.favorites.includes(food.id);
  return `<article class="food-card">
    <div class="food-image-wrap" data-open-item="${food.id}">
      <img src="${food.img}" alt="${food.name}" loading="lazy">
      <span class="food-badge">${food.tags[0]}</span>
      <span class="veg-dot" title="${food.diet === "veg" ? "Vegetarian" : "Non-vegetarian"}"></span>
      <button class="fav-btn ${fav ? "active":""}" data-fav="${food.id}" aria-label="Favourite">${fav ? "♥":"♡"}</button>
    </div>
    <div class="food-info">
      <h3>${food.name}</h3>
      <div class="food-sub">${food.restaurant} · ${food.cuisine}</div>
      <div class="food-meta"><span class="rating">★ ${food.rating}</span><span>${food.time}</span><strong class="price">₹${food.price}</strong></div>
      <button class="add-btn" data-add="${food.id}">+ Add to cart</button>
    </div>
  </article>`;
}

function renderRestaurants(){
  $("#restaurantGrid").innerHTML = restaurants.map(r => `<article class="restaurant-card">
    <img src="${r.img}" alt="${r.name}" loading="lazy">
    <div class="restaurant-info"><h3>${r.name}</h3><p>${r.cuisine}</p><div class="restaurant-line"><span class="restaurant-rating">★ ${r.rating}</span><span>⏱ ${r.time}</span></div></div>
  </article>`).join("");
}

function addToCart(id){
  const item = state.cart.find(x => x.id === id);
  if(item) item.qty++;
  else state.cart.push({id,qty:1});
  saveState(); renderCart(); updateCartCount();
  const food = foods.find(x=>x.id===id);
  showToast(`${food.name} added to your cart`, "success");
}

function updateCartCount(){
  $("#cartCount").textContent = state.cart.reduce((sum,x)=>sum+x.qty,0);
}

function renderCart(){
  const body = $("#cartBody");
  if(!state.cart.length){
    body.innerHTML = `<div class="cart-empty"><div>🛒</div><h3>Your cart is waiting</h3><p>Add something delicious to get started.</p></div>`;
    $("#cartFooter").innerHTML = "";
    return;
  }
  body.innerHTML = state.cart.map(item=>{
    const f = foods.find(x=>x.id===item.id);
    return `<div class="cart-item">
      <img src="${f.img}" alt="${f.name}">
      <div><h4>${f.name}</h4><small>₹${f.price} · ${f.restaurant}</small>
      <div class="qty"><button data-qty="${f.id}" data-change="-1">−</button><span>${item.qty}</span><button data-qty="${f.id}" data-change="1">+</button></div></div>
      <strong>₹${f.price*item.qty}</strong>
    </div>`;
  }).join("");
  const subtotal = state.cart.reduce((s,x)=>s+foods.find(f=>f.id===x.id).price*x.qty,0);
  const delivery = subtotal >= 399 ? 0 : 35;
  const total = subtotal + delivery;
  $("#cartFooter").innerHTML = `<div class="bill-line"><span>Item total</span><span>₹${subtotal}</span></div>
    <div class="bill-line"><span>Delivery fee</span><span>${delivery ? "₹35" : "FREE"}</span></div>
    <div class="bill-line total"><span>Total</span><span>₹${total}</span></div>
    <button class="checkout-btn" id="checkoutBtn">Proceed to checkout →</button>`;
}

function openPanel(id){
  $("#overlay").classList.add("active");
  $(id).classList.add("open");
}
function closeAll(){
  $("#overlay").classList.remove("active");
  $$(".side-panel, .modal").forEach(el=>el.classList.remove("open"));
}

function openModal(id){ closeAll(); $(id).classList.add("open"); }

function showItem(id){
  const f = foods.find(x=>x.id===id);
  $("#itemModalContent").innerHTML = `<img class="item-modal-hero" src="${f.img}" alt="${f.name}">
    <div class="item-modal-info"><span class="mini-label">${f.restaurant.toUpperCase()}</span><h2>${f.name}</h2>
    <p class="muted">${f.desc}</p>
    <div class="item-tags">${f.moods.map(m=>`<span class="item-tag">${m}</span>`).join("")}<span class="item-tag">${f.cuisine}</span><span class="item-tag">${f.diet==="veg"?"Vegetarian":"Non-vegetarian"}</span></div>
    <div class="item-modal-bottom"><strong>₹${f.price}</strong><button class="primary-btn" data-add="${f.id}">Add to cart</button></div></div>`;
  openModal("#itemModal");
}

function applyFilters(){
  renderFoods();
  $("#recommendationSection").scrollIntoView({behavior:"smooth",block:"start"});
  showToast(`${$("#resultCount").textContent} tasty matches found`, "success");
}

function setSearch(value){
  state.search = value;
  $("#globalSearch").value = value;
  $("#heroSearch").value = value;
  $("#clearSearch").style.display = value ? "block" : "none";
  renderFoods();
}

$$(".mood-card").forEach(btn=>btn.addEventListener("click",()=>{
  $$(".mood-card").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  state.mood=btn.dataset.mood;
  renderFoods();
}));

$("#budgetSlider").addEventListener("input", e=>{
  state.budget=Number(e.target.value);
  $("#budgetValue").textContent=state.budget;
  renderFoods();
});

$$("[data-cuisine]").forEach(btn=>btn.addEventListener("click",()=>{
  $$("[data-cuisine]").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");
  state.cuisine=btn.dataset.cuisine;
  renderFoods();
}));

$$("[data-diet]").forEach(btn=>btn.addEventListener("click",()=>{
  const isActive=btn.classList.contains("active");
  $$(".diet-pill").forEach(b=>b.classList.remove("active"));
  state.diet=isActive ? "all" : btn.dataset.diet;
  if(!isActive) btn.classList.add("active");
  renderFoods();
}));

$("#globalSearch").addEventListener("input",e=>setSearch(e.target.value));
$("#heroSearch").addEventListener("input",e=>setSearch(e.target.value));
$("#heroSearchBtn").addEventListener("click",()=>$("#recommendationSection").scrollIntoView({behavior:"smooth"}));
$("#clearSearch").addEventListener("click",()=>setSearch(""));
$$(".quick-search").forEach(b=>b.addEventListener("click",()=>{setSearch(b.dataset.search); $("#recommendationSection").scrollIntoView({behavior:"smooth"});}));

$("#applyFilter").addEventListener("click",applyFilters);
$("#resetMood").addEventListener("click",()=>{
  state.mood="all"; state.budget=500; state.cuisine="all"; state.diet="all"; state.search="";
  $("#budgetSlider").value=500; $("#budgetValue").textContent=500;
  $$(".mood-card").forEach(b=>b.classList.toggle("active",b.dataset.mood==="all"));
  $$(".choice-pill").forEach(b=>b.classList.toggle("active",b.dataset.cuisine==="all"));
  $$(".diet-pill").forEach(b=>b.classList.remove("active"));
  $("#globalSearch").value=""; $("#heroSearch").value=""; $("#clearSearch").style.display="none";
  renderFoods(); showToast("Filters reset");
});
$("#emptyReset").addEventListener("click",()=>$("#resetMood").click());

document.addEventListener("click",e=>{
  const add=e.target.closest("[data-add]");
  if(add){ addToCart(Number(add.dataset.add)); if(e.target.closest("#itemModal")) closeAll(); }
  const fav=e.target.closest("[data-fav]");
  if(fav){
    e.stopPropagation();
    const id=Number(fav.dataset.fav);
    state.favorites=state.favorites.includes(id)?state.favorites.filter(x=>x!==id):[...state.favorites,id];
    saveState(); renderFoods();
    showToast(state.favorites.includes(id)?"Added to favourites":"Removed from favourites");
  }
  const open=e.target.closest("[data-open-item]");
  if(open && !e.target.closest("[data-fav]")) showItem(Number(open.dataset.openItem));
  const qty=e.target.closest("[data-qty]");
  if(qty){
    const id=Number(qty.dataset.qty), change=Number(qty.dataset.change);
    const item=state.cart.find(x=>x.id===id);
    if(item){ item.qty += change; if(item.qty<=0) state.cart=state.cart.filter(x=>x.id!==id); }
    saveState(); renderCart(); updateCartCount();
  }
});

$("#cartBtn").addEventListener("click",()=>{renderCart();openPanel("#cartPanel");});
$("#loginBtn").addEventListener("click",()=>openModal("#loginModal"));
$("#locationBtn").addEventListener("click",()=>openModal("#locationModal"));
$("#ordersBtn").addEventListener("click",()=>openModal("#orderModal"));
$("#offersBtn").addEventListener("click",()=>{showToast("TASTY100 gives ₹100 OFF on your first demo order","success");});
$("#claimOffer").addEventListener("click",async()=>{
  try{await navigator.clipboard.writeText("TASTY100");showToast("TASTY100 copied to clipboard","success");}
  catch{showToast("Use code TASTY100 at checkout","success");}
});
$("#saveLocation").addEventListener("click",()=>{
  const value=$("#locationInput").value.trim() || "Jaipur, Rajasthan";
  $(".location-btn strong").textContent=value;
  closeAll(); showToast(`Delivery location set to ${value}`,"success");
});
$("#mobileMenu").addEventListener("click",()=>showToast("Use the Smart Filter section to personalize your results"));
$("#overlay").addEventListener("click",closeAll);
$$("[data-close]").forEach(b=>b.addEventListener("click",closeAll));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeAll();});

$("#loginForm").addEventListener("submit",e=>{
  e.preventDefault(); closeAll(); showToast("Demo sign-in successful. Backend auth can be connected later.","success");
});
document.addEventListener("click",e=>{
  if(e.target.id==="checkoutBtn"){
    if(!state.cart.length) return;
    closeAll(); openModal("#orderModal");
    showToast("Demo order placed successfully!","success");
  }
});
$("#viewAllRestaurants").addEventListener("click",()=>showToast("Restaurant discovery is ready for backend data"));
document.querySelector(".coupon-card").addEventListener("click",async()=>{
  try{await navigator.clipboard.writeText("TASTY100");showToast("Coupon TASTY100 copied","success");}catch{showToast("Coupon: TASTY100","success");}
});

renderFoods();
renderRestaurants();
renderCart();
updateCartCount();
