import { Utensils, Heart, ShieldCheck, Truck, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="space-y-12 max-w-4xl mx-auto py-4">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-orange-500/20">
          <Utensils className="w-8 h-8" />
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          About FoodGo
        </h1>
        <p className="text-base sm:text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
          FoodGo is a modern, convenient food ordering & delivery platform built to seamlessly connect food lovers with local culinary partners.
        </p>
      </div>

      {/* Main Mission Card */}
      <div className="foodgo-card p-8 sm:p-10 space-y-6 bg-gradient-to-br from-white to-orange-50/30">
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">What is FoodGo?</h2>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Designed with a focus on speed, hygiene, and convenience, FoodGo bridges the gap between hungry customers and top-rated local restaurants. Whether you are craving authentic Hyderabadi Biryani, handcrafted Italian pizzas, or fresh South Indian delicacies, FoodGo delivers your favorite meals fresh and hot directly to your doorstep.
        </p>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          This application represents a full-stack engineering demonstration featuring an independent React.js frontend combined with a robust Java Spring Boot REST backend architecture.
        </p>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="foodgo-card p-6 text-center space-y-3">
          <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto">
            <Truck className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-lg text-slate-800">Lightning Fast</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Optimized delivery routes ensuring your food arrives hot in 30 minutes or less.
          </p>
        </div>

        <div className="foodgo-card p-6 text-center space-y-3">
          <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-lg text-slate-800">Hygiene Assured</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Partnering strictly with quality-checked and hygiene-certified kitchen partners.
          </p>
        </div>

        <div className="foodgo-card p-6 text-center space-y-3">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="font-extrabold text-lg text-slate-800">Customer Centric</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Dedicated customer support and real-time tracking from kitchen to doorstep.
          </p>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="foodgo-card p-8 text-center space-y-4 bg-slate-900 text-white">
        <h3 className="text-2xl font-bold">Ready to order your next meal?</h3>
        <p className="text-xs sm:text-sm text-slate-300">Explore hundreds of dishes and popular restaurants around you.</p>
        <div>
          <Link to="/restaurants" className="btn-primary py-2.5 px-6 text-sm">
            Browse Menu Now
          </Link>
        </div>
      </div>

    </div>
  );
}
