'use client';

import { useState } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl p-4 animate-in slide-in-from-bottom-4 fade-in-0 w-64">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-800">Contact Us</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X className="h-4 w-4 text-slate-600" />
            </button>
          </div>

          <div className="space-y-2">
            <a
              href="https://wa.me/919953539988"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
            >
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-800">WhatsApp</div>
                <div className="text-xs text-slate-500">Chat with us</div>
              </div>
            </a>

            <a
              href="tel:+911144759969"
              className="flex items-center gap-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-800">Call Us</div>
                <div className="text-xs text-slate-500">+91 11 4475 9969</div>
              </div>
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110",
          isOpen
            ? "bg-slate-600 hover:bg-slate-700"
            : "bg-emerald-600 hover:bg-emerald-700"
        )}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>
    </div>
  );
}