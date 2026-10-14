import { useState } from 'react';
import { User, Mail, Phone, MapPin, Package, Settings, ShieldCheck, Heart } from 'lucide-react';

export default function Profile() {
  const [activeTab, setActiveTab] = useState('info');

  const mockUser = {
    name: 'Alex Morgan',
    email: 'alex.morgan@foodgo.com',
    phone: '+91 98765 43210',
    memberSince: 'January 2026',
    addresses: [
      { id: 1, tag: 'Home', text: 'Flat 402, Sunshine Apartments, Main Road, Block B', isDefault: true },
      { id: 2, tag: 'Campus/Work', text: 'Room 204, Student Hostel, College Campus', isDefault: false }
    ],
    orders: [
      { id: 'ORD-9821', restaurant: 'The Biryani Hub', date: 'Yesterday, 8:30 PM', items: '1x Hyderabadi Chicken Biryani', status: 'Delivered', amount: '₹280' },
      { id: 'ORD-9740', restaurant: 'Pizza Point', date: '10 Aug 2026', items: '1x Farmhouse Margherita Pizza', status: 'Delivered', amount: '₹322' }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      {/* Profile Header Banner */}
      <div className="foodgo-card p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-800 to-orange-950 text-white border-0 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center font-extrabold text-3xl text-white shadow-lg shrink-0">
            {mockUser.name.charAt(0)}
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{mockUser.name}</h1>
            <p className="text-xs sm:text-sm text-slate-300 font-medium flex items-center justify-center sm:justify-start gap-2">
              <Mail className="w-3.5 h-3.5 text-orange-400" /> {mockUser.email} • {mockUser.phone}
            </p>
            <span className="inline-block mt-2 px-3 py-1 bg-white/10 text-orange-300 text-xs font-semibold rounded-full border border-white/10">
              FoodGo Member • Joined {mockUser.memberSince}
            </span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto">
        <button
          onClick={() => setActiveTab('info')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shrink-0 ${
            activeTab === 'info'
              ? 'bg-orange-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <User className="w-4 h-4" /> Profile Info
        </button>

        <button
          onClick={() => setActiveTab('orders')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shrink-0 ${
            activeTab === 'orders'
              ? 'bg-orange-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Package className="w-4 h-4" /> Previous Orders
        </button>

        <button
          onClick={() => setActiveTab('addresses')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shrink-0 ${
            activeTab === 'addresses'
              ? 'bg-orange-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <MapPin className="w-4 h-4" /> Saved Addresses
        </button>

        <button
          onClick={() => setActiveTab('settings')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shrink-0 ${
            activeTab === 'settings'
              ? 'bg-orange-600 text-white shadow-xs'
              : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          <Settings className="w-4 h-4" /> Settings
        </button>
      </div>

      {/* Tab 1: Profile Info */}
      {activeTab === 'info' && (
        <div className="foodgo-card p-6 sm:p-8 space-y-6">
          <h2 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 rounded-xl space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Full Name</span>
              <p className="font-bold text-slate-800 text-sm">{mockUser.name}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</span>
              <p className="font-bold text-slate-800 text-sm">{mockUser.email}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Number</span>
              <p className="font-bold text-slate-800 text-sm">{mockUser.phone}</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl space-y-1">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Account Status</span>
              <p className="font-bold text-emerald-600 text-sm flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" /> Verified Student Account
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Previous Orders */}
      {activeTab === 'orders' && (
        <div className="space-y-4">
          {mockUser.orders.map((ord) => (
            <div key={ord.id} className="foodgo-card p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-slate-800 text-base">{ord.restaurant}</h3>
                  <p className="text-xs text-slate-400 font-medium">{ord.id} • {ord.date}</p>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-full border border-emerald-100">
                  {ord.status}
                </span>
              </div>
              <p className="text-xs text-slate-600 font-medium">{ord.items}</p>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
                <span className="font-bold text-slate-800">Total: {ord.amount}</span>
                <button type="button" className="btn-secondary text-xs py-1 px-3">
                  Reorder
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Saved Addresses */}
      {activeTab === 'addresses' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockUser.addresses.map((addr) => (
            <div key={addr.id} className="foodgo-card p-5 space-y-2 relative">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-md">
                  {addr.tag}
                </span>
                {addr.isDefault && (
                  <span className="text-[11px] font-semibold text-slate-400">Default Address</span>
                )}
              </div>
              <p className="text-xs text-slate-700 font-medium leading-relaxed pt-1">
                {addr.text}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Account Settings */}
      {activeTab === 'settings' && (
        <div className="foodgo-card p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-extrabold text-slate-900 border-b border-slate-100 pb-3">
            Account Settings
          </h2>
          <div className="space-y-3 text-xs sm:text-sm text-slate-700">
            <label className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl cursor-pointer">
              <span>Push Notifications for Order Updates</span>
              <input type="checkbox" defaultChecked className="accent-orange-600 w-4 h-4" />
            </label>
            <label className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl cursor-pointer">
              <span>Promotions & Offer Emails</span>
              <input type="checkbox" defaultChecked className="accent-orange-600 w-4 h-4" />
            </label>
          </div>
        </div>
      )}

    </div>
  );
}
