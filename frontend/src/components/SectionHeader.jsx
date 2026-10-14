import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function SectionHeader({ title, subtitle, actionText, actionLink }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-6">
      <div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base text-slate-500 font-medium mt-1">
            {subtitle}
          </p>
        )}
      </div>

      {actionText && actionLink && (
        <Link
          to={actionLink}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-600 hover:text-orange-700 hover:underline transition-colors mt-2 sm:mt-0"
        >
          {actionText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
}
