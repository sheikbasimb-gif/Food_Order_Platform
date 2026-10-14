import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Zap, Award, MapPin } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import SectionHeader from '../components/SectionHeader';
import CategoryCard from '../components/CategoryCard';
import RestaurantCard from '../components/RestaurantCard';
import FoodCard from '../components/FoodCard';
import { categories } from '../data/categories';
import { restaurants } from '../data/restaurants';
import { foods } from '../data/foods';

export default function Home() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (query) => {
    if (query.trim()) {
      navigate(`/restaurants?search=${encodeURIComponent(query)}`);
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category.id === selectedCategory ? null : category.id);
    navigate(`/restaurants?category=${encodeURIComponent(category.name)}`);
  };

  return (
    <div className="space-y-14 sm:space-y-16">
      
      {/* SECTION 1 — HERO & SEARCH SECTION */}
      <section className="relative foodgo-card p-6 sm:p-12 overflow-hidden bg-gradient-to-br from-orange-600 via-amber-500 to-orange-500 text-white border-0 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Hero Content Left */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-extrabold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" /> FAST • FRESH • DELICIOUS
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-sm">
              Good food is just a few clicks away.
            </h1>

            <p className="text-base sm:text-lg text-amber-100 font-medium leading-relaxed max-w-xl">
              Order your favorite meals from the best restaurants around you and get them delivered fresh to your doorstep.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                to="/restaurants"
                className="bg-white text-orange-600 font-extrabold px-6 py-3 rounded-xl shadow-lg hover:bg-amber-50 hover:shadow-xl transition-all inline-flex items-center gap-2 text-sm sm:text-base"
              >
                Order Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/restaurants"
                className="bg-orange-700/40 backdrop-blur-md hover:bg-orange-700/60 text-white border border-white/30 font-bold px-6 py-3 rounded-xl transition-all text-sm sm:text-base"
              >
                Explore Restaurants
              </Link>
            </div>

            {/* Embedded Search Bar */}
            <div className="pt-4 max-w-xl">
              <SearchBar onSearch={handleSearch} placeholder="Search for restaurants, dishes or cuisines..." />
            </div>
          </div>

          {/* Hero Image Right */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 rotate-1 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
                alt="Delicious Food Spread"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-lg flex items-center gap-3 text-slate-800">
                <div className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-bold">
                  ⚡
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Average Delivery Time</p>
                  <p className="text-xs text-orange-600 font-extrabold">25 - 30 Minutes • Live Tracking</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Decorative Blurred Circles */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />
      </section>


      {/* SECTION 2 — EXPLORE BY CATEGORY */}
      <section>
        <SectionHeader
          title="Explore by Category"
          subtitle="What are you craving today?"
          actionText="View All Categories"
          actionLink="/restaurants"
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              category={cat}
              isActive={selectedCategory === cat.id}
              onClick={handleCategorySelect}
            />
          ))}
        </div>
      </section>


      {/* SECTION 3 — POPULAR RESTAURANTS */}
      <section>
        <SectionHeader
          title="Popular Restaurants"
          subtitle="Top-rated restaurants near you"
          actionText="See All Restaurants"
          actionLink="/restaurants"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.slice(0, 6).map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>


      {/* SECTION 4 — POPULAR DISHES */}
      <section>
        <SectionHeader
          title="Popular Dishes"
          subtitle="Customer favorites you'll love"
          actionText="Browse Full Menu"
          actionLink="/restaurants"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {foods.slice(0, 8).map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      </section>


      {/* SECTION 5 — WHY CHOOSE FOODGO */}
      <section className="foodgo-card p-8 sm:p-12 bg-gradient-to-b from-white to-amber-50/40">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Choose FoodGo?
          </h2>
          <p className="text-slate-500 font-medium text-sm sm:text-base">
            We provide the seamless food delivery experience you deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-md transition-shadow text-center space-y-3">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto text-xl font-bold">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-800">Fast Delivery</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Get your food delivered piping hot and fresh within 30 minutes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-md transition-shadow text-center space-y-3">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto text-xl font-bold">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-800">Quality Food</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Discover delicious meals from trusted, hygiene-certified restaurants.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-md transition-shadow text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto text-xl font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-800">Easy Ordering</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Simple, convenient ordering experience with instant cart management.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-md transition-shadow text-center space-y-3">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto text-xl font-bold">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-800">Live Tracking</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Know where your order is every step of the way from kitchen to door.
            </p>
          </div>
        </div>
      </section>


      {/* SECTION 6 — PROMOTIONAL BANNER */}
      <section className="foodgo-card relative overflow-hidden bg-slate-900 text-white p-8 sm:p-12">
        <div className="relative z-10 max-w-xl space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Special Offer</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Craving something delicious?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Order your favorite food today and enjoy it hot at home with free delivery on your first order.
          </p>
          <div className="pt-2">
            <Link
              to="/restaurants"
              className="btn-primary py-3 px-6 text-sm sm:text-base shadow-lg hover:shadow-orange-500/30"
            >
              Start Ordering Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Decorative Background Graphic */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block opacity-30 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
            alt="Pizza Promotion"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

    </div>
  );
}
