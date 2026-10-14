export default function CategoryCard({ category, isActive = false, onClick }) {
  return (
    <button
      onClick={() => onClick && onClick(category)}
      className={`group flex flex-col items-center p-3 sm:p-4 rounded-2xl transition-all duration-200 text-center ${
        isActive
          ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/25 scale-105'
          : 'bg-white hover:bg-orange-50/60 border border-slate-100 text-slate-800 shadow-xs hover:shadow-md'
      }`}
    >
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden mb-2 shadow-xs group-hover:scale-105 transition-transform duration-200 bg-slate-100">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80';
          }}
        />
      </div>
      <span className="font-bold text-xs sm:text-sm tracking-tight truncate max-w-[100px]">
        {category.name}
      </span>
      {category.itemCount && (
        <span className={`text-[11px] font-medium mt-0.5 ${isActive ? 'text-orange-100' : 'text-slate-400'}`}>
          {category.itemCount}
        </span>
      )}
    </button>
  );
}
