import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export default function Cart() {
  // Mock Cart Items State for Phase 2 UI Demonstration
  const [cartItems, setCartItems] = useState([
    {
      id: 101,
      name: 'Hyderabadi Chicken Biryani',
      restaurant: 'The Biryani Hub',
      price: 240,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 103,
      name: 'Farmhouse Margherita Pizza',
      restaurant: 'Pizza Point',
      price: 280,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80'
    }
  ]);

  const [checkoutStatus, setCheckoutStatus] = useState('');

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : item;
          }
          return item;
        })
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = cartItems.length > 0 ? 40 : 0;
  const tax = cartItems.length > 0 ? Math.round(subtotal * 0.05) : 0; // 5% GST
  const total = subtotal + deliveryFee + tax;

  const handleCheckout = () => {
    setCheckoutStatus('Phase 2 UI Checkout Triggered! Payment integration will follow in Phase 3.');
    setTimeout(() => setCheckoutStatus(''), 4000);
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      
      {/* Page Title */}
      <div className="flex items-center gap-3 border-b border-amber-100 pb-4">
        <div className="p-3 bg-orange-100 text-orange-600 rounded-2xl shadow-xs">
          <ShoppingBag className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Your Cart</h1>
          <p className="text-sm text-slate-500 font-medium">Review your items and proceed to checkout.</p>
        </div>
      </div>

      {checkoutStatus && (
        <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-800 text-sm font-semibold flex items-center gap-2 animate-in fade-in duration-200">
          <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0" />
          {checkoutStatus}
        </div>
      )}

      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="foodgo-card p-4 sm:p-5 flex items-center justify-between gap-4 transition-all"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover bg-slate-100 shrink-0"
                  />
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-sm sm:text-base line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">{item.restaurant}</p>
                    <p className="text-sm font-bold text-orange-600 mt-1">₹{item.price}</p>
                  </div>
                </div>

                {/* Quantity Controls & Remove */}
                <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                  <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-7 h-7 bg-white hover:bg-slate-200 rounded-lg flex items-center justify-center text-slate-700 transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-6 text-center font-bold text-xs sm:text-sm text-slate-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-7 h-7 bg-white hover:bg-slate-200 rounded-lg flex items-center justify-center text-slate-700 transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                    title="Remove Item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            <div className="flex items-center justify-between pt-2">
              <Link
                to="/restaurants"
                className="text-xs font-bold text-orange-600 hover:underline inline-flex items-center gap-1"
              >
                ← Add More Items
              </Link>
            </div>
          </div>

          {/* Order Summary Card */}
          <div className="lg:col-span-4 foodgo-card p-6 space-y-5 bg-white border border-amber-100 shadow-lg">
            <h3 className="font-extrabold text-lg text-slate-900 border-b border-slate-100 pb-3">
              Order Summary
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-slate-800">₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className="font-bold text-slate-800">₹{deliveryFee}</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes & Charges (5% GST)</span>
                <span className="font-bold text-slate-800">₹{tax}</span>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-between text-base font-extrabold text-slate-900">
                <span>Total Amount</span>
                <span className="text-orange-600">₹{total}</span>
              </div>
            </div>

            {/* Promo Code Mock Input */}
            <div className="pt-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Promo Code"
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl uppercase font-bold focus:outline-none"
                />
                <button type="button" className="btn-secondary text-xs px-3 py-2">
                  Apply
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCheckout}
              className="btn-primary w-full py-3 text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              Proceed to Checkout <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      ) : (
        <div className="foodgo-card p-12 text-center space-y-4 max-w-md mx-auto">
          <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">Your Cart is Empty</h3>
          <p className="text-sm text-slate-500">
            Looks like you haven't added any delicious food items to your cart yet.
          </p>
          <div className="pt-2">
            <Link to="/restaurants" className="btn-primary text-xs">
              Explore Restaurants <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}
