import { useState } from 'react';
import { Star, Plus, Check } from 'lucide-react';

export default function FoodCard({ food, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    if (onAddToCart) onAddToCart(food);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="foodgo-card group overflow-hidden flex flex-col h-full">
      <div className="relative h-40 overflow-hidden bg-slate-100">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=500&q=80';
          }}
        />

        {/* Veg/Non-Veg Badge */}
        <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-xs p-1 rounded-md shadow-xs">
          <span className={`block w-3 h-3 border ${food.isVeg ? 'border-emerald-600 bg-emerald-500' : 'border-red-600 bg-red-500'} rounded-full`} />
        </div>

        {/* Rating */}
        <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[11px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
          {food.rating}
        </div>
      </div>

      <div className="p-4 flex flex-col flex-grow justify-between space-y-3">
        <div>
          <h3 className="font-bold text-base text-slate-800 line-clamp-1 group-hover:text-orange-600 transition-colors">
            {food.name}
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            {food.restaurant}
          </p>
          {food.description && (
            <p className="text-xs text-slate-400 line-clamp-2 mt-1">
              {food.description}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-slate-100">
          <span className="text-base font-extrabold text-slate-900">
            ₹{food.price}
          </span>

          <button
            type="button"
            onClick={handleAdd}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl font-bold text-xs transition-all ${
              added
                ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                : 'bg-orange-50 text-orange-600 hover:bg-orange-600 hover:text-white border border-orange-100'
            }`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" /> Added
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" /> Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
