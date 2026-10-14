import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Compass, SlidersHorizontal, ArrowUpDown, Frown } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import RestaurantCard from '../components/RestaurantCard';
import { restaurants as allRestaurants } from '../data/restaurants';

export default function Restaurants() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'All';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState('recommended');

  const categories = ['All', 'Indian', 'Fast Food', 'Pizza', 'Chinese', 'Healthy', 'Desserts'];

  // Frontend Filter & Sort Logic
  const filteredRestaurants = useMemo(() => {
    return allRestaurants
      .filter((res) => {
        // Category Filter
        const matchesCategory =
          selectedCategory === 'All' ||
          res.category.toLowerCase() === selectedCategory.toLowerCase() ||
          res.cuisine.toLowerCase().includes(selectedCategory.toLowerCase());

        // Search Query Filter
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          !query ||
          res.name.toLowerCase().includes(query) ||
          res.cuisine.toLowerCase().includes(query) ||
          res.category.toLowerCase().includes(query);

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'deliveryTime') {
          const timeA = parseInt(a.deliveryTime) || 0;
          const timeB = parseInt(b.deliveryTime) || 0;
          return timeA - timeB;
        }
        if (sortBy === 'priceLow') return a.priceRange.length - b.priceRange.length;
        if (sortBy === 'priceHigh') return b.priceRange.length - a.priceRange.length;
        return 0; // Default recommended order
      });
  }, [searchQuery, selectedCategory, sortBy]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    if (query) {
      setSearchParams({ search: query });
    } else {
      setSearchParams({});
    }
  };

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    if (cat !== 'All') {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">
            <Compass className="w-4 h-4" /> Discovery Hub
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Explore Restaurants
          </h1>
          <p className="text-sm text-slate-500 font-medium mt-1">
            Discover top-rated food spots, local kitchens, and popular culinary hotspots near you.
          </p>
        </div>

        {/* Global Search Bar */}
        <div className="w-full md:max-w-md">
          <SearchBar
            placeholder="Search restaurants or cuisines..."
            onSearch={handleSearchChange}
          />
        </div>
      </div>

      {/* Filter Tabs & Sort Control */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-xs">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 shrink-0 mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5" /> Filters:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategorySelect(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                selectedCategory.toLowerCase() === cat.toLowerCase()
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto text-xs font-semibold text-slate-600">
          <ArrowUpDown className="w-3.5 h-3.5 text-orange-600" /> Sort by:
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 font-bold text-slate-700 focus:outline-none focus:border-orange-500 cursor-pointer"
          >
            <option value="recommended">Recommended</option>
            <option value="rating">Top Rated ⭐</option>
            <option value="deliveryTime">Fastest Delivery ⚡</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
          </select>
        </div>

      </div>

      {/* Active Filter Indicators */}
      {(selectedCategory !== 'All' || searchQuery) && (
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <span>Showing results for:</span>
          {selectedCategory !== 'All' && (
            <span className="bg-orange-50 text-orange-600 font-bold px-2.5 py-1 rounded-lg border border-orange-100">
              Category: {selectedCategory}
            </span>
          )}
          {searchQuery && (
            <span className="bg-orange-50 text-orange-600 font-bold px-2.5 py-1 rounded-lg border border-orange-100">
              Search: "{searchQuery}"
            </span>
          )}
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
              setSearchParams({});
            }}
            className="text-slate-400 hover:text-slate-600 underline font-semibold ml-2"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Restaurant Grid */}
      {filteredRestaurants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      ) : (
        <div className="foodgo-card p-12 text-center space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto">
            <Frown className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">No restaurants found</h3>
          <p className="text-sm text-slate-500">
            We couldn't find any restaurants matching your search criteria. Try clearing your filters or searching for something else.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
              setSearchParams({});
            }}
            className="btn-primary text-xs"
          >
            Reset Filters
          </button>
        </div>
      )}

    </div>
  );
}
