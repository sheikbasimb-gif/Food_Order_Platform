import { useState } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBar({ placeholder = 'Search for restaurants, dishes or cuisines...', onSearch, className = '' }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`relative flex items-center w-full ${className}`}>
      <div className="absolute left-4 text-slate-400 pointer-events-none">
        <Search className="w-5 h-5" />
      </div>

      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          if (onSearch) onSearch(e.target.value);
        }}
        placeholder={placeholder}
        className="w-full pl-11 pr-24 py-3.5 bg-white border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 text-sm shadow-xs focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
      />

      {query && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-20 text-slate-400 hover:text-slate-600 p-1"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      <button
        type="submit"
        className="absolute right-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors"
      >
        Search
      </button>
    </form>
  );
}
