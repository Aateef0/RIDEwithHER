import { Mail, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 to-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-purple-600 font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold">RIDEwithHER</span>
            </div>
            <p className="text-purple-100 text-sm italic mb-4">
              "Women Supporting Women"
            </p>
            <p className="text-purple-200 text-sm">
              Safe, affordable two-wheeler rides for women, by women.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-purple-200">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#safety" className="hover:text-white transition-colors">
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a href="#policies" className="hover:text-white transition-colors">
                  Customer Policies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-purple-200 hover:text-white transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp Business</span>
              </a>
              <a
                href="mailto:hello@ridewithher.com"
                className="flex items-center gap-3 text-sm text-purple-200 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>hello@ridewithher.com</span>
              </a>
            </div>

            <div className="mt-6">
              <p className="text-sm text-purple-200 mb-3">Follow Us</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-700 pt-8">
          <p className="text-center text-sm text-purple-300">
            © 2024 RIDEwithHER. All rights reserved. | Women-only ride service | Indore, India
          </p>
        </div>
      </div>
    </footer>
  );
}
