import { Star, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RestaurantCard({ restaurant }) {
  return (
    <div className="foodgo-card group overflow-hidden flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80';
          }}
        />

        {/* Discount Badge */}
        {restaurant.discount && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-orange-600 to-amber-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {restaurant.discount}
          </div>
        )}

        {/* Price Range Badge */}
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2 py-0.5 rounded-md">
          {restaurant.priceRange}
        </div>
      </div>

      {/* Details Container */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-3">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-extrabold text-lg text-slate-800 group-hover:text-orange-600 transition-colors line-clamp-1">
              {restaurant.name}
            </h3>
            <div className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 font-bold text-xs px-2 py-0.5 rounded-md border border-emerald-100 shrink-0">
              <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              {restaurant.rating}
            </div>
          </div>

          <p className="text-xs text-slate-500 font-medium line-clamp-1">
            {restaurant.cuisine}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs font-semibold text-slate-600">
          <span className="flex items-center gap-1 text-slate-500">
            <Clock className="w-3.5 h-3.5 text-amber-500" />
            {restaurant.deliveryTime}
          </span>

          <Link
            to="/restaurants"
            className="px-3 py-1.5 bg-amber-50 hover:bg-orange-600 text-orange-600 hover:text-white font-bold rounded-lg text-xs transition-colors"
          >
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
