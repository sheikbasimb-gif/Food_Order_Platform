import { Link } from 'react-router-dom';
import { Utensils, Instagram, Facebook, Twitter, Youtube, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white shadow-md">
                <Utensils className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                FoodGo
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Delicious food, delivered with care. Bringing your favorite meals from top restaurants right to your doorstep.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-orange-500 hover:bg-slate-700 flex items-center justify-center transition-colors cursor-pointer" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-orange-500 hover:bg-slate-700 flex items-center justify-center transition-colors cursor-pointer" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-orange-500 hover:bg-slate-700 flex items-center justify-center transition-colors cursor-pointer" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </span>
              <span className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-orange-500 hover:bg-slate-700 flex items-center justify-center transition-colors cursor-pointer" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/restaurants" className="hover:text-orange-400 transition-colors">Explore Restaurants</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-400 transition-colors">Contact Support</Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">Customer Support</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="hover:text-slate-200 cursor-pointer">Help Center</li>
              <li className="hover:text-slate-200 cursor-pointer">FAQ</li>
              <li className="hover:text-slate-200 cursor-pointer">Partner With Us</li>
              <li className="hover:text-slate-200 cursor-pointer">Delivery Areas</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white text-base mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="hover:text-slate-200 cursor-pointer">Privacy Policy</li>
              <li className="hover:text-slate-200 cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-slate-200 cursor-pointer">Cookie Policy</li>
              <li className="hover:text-slate-200 cursor-pointer">Security</li>
            </ul>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} FoodGo Platform. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-orange-500 fill-orange-500" /> for College Full-Stack Demo
          </p>
        </div>
      </div>
    </footer>
  );
}
