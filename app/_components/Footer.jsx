import Link from "next/link";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 border-t border-primary-900">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-accent-400 mb-2">
                The Wild Oasis
              </h3>
              <p className="text-primary-300 text-sm leading-relaxed">
                Luxury cabin hotel nestled in the heart of the Italian
                Dolomites, offering unforgettable experiences surrounded by
                majestic mountains and pristine forests.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-primary-300 text-sm">
                <MapPinIcon className="h-4 w-4 text-accent-400" />
                <span>Dolomites, Italy</span>
              </div>
              <div className="flex items-center gap-3 text-primary-300 text-sm">
                <PhoneIcon className="h-4 w-4 text-accent-400" />
                <span>+39 123 456 789</span>
              </div>
              <div className="flex items-center gap-3 text-primary-300 text-sm">
                <EnvelopeIcon className="h-4 w-4 text-accent-400" />
                <span>info@wildoasis.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-100">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/cabins"
                  className="text-primary-300 hover:text-accent-400 transition-colors text-sm"
                >
                  Our Cabins
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-300 hover:text-accent-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/account"
                  className="text-primary-300 hover:text-accent-400 transition-colors text-sm"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/account/reservations"
                  className="text-primary-300 hover:text-accent-400 transition-colors text-sm"
                >
                  My Reservations
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-100">Services</h4>
            <ul className="space-y-2">
              <li className="text-primary-300 text-sm">Luxury Cabin Rentals</li>
              <li className="text-primary-300 text-sm">Mountain Activities</li>
              <li className="text-primary-300 text-sm">Spa & Wellness</li>
              <li className="text-primary-300 text-sm">Fine Dining</li>
              <li className="text-primary-300 text-sm">Guided Tours</li>
              <li className="text-primary-300 text-sm">Event Planning</li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-100">
              Stay Connected
            </h4>
            <p className="text-primary-300 text-sm">
              Subscribe to our newsletter for special offers and updates.
            </p>

            {/* Newsletter Form */}
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-primary-900 border border-primary-700 rounded-sm text-primary-100 text-sm placeholder-primary-400 focus:outline-none focus:border-accent-400 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-accent-500 hover:bg-accent-600 text-primary-800 font-semibold py-2 px-4 rounded-sm transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="text-primary-300 hover:text-accent-400 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-primary-300 hover:text-accent-400 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-primary-300 hover:text-accent-400 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-primary-400 text-sm">
              <GlobeAltIcon className="h-4 w-4" />
              <span>© {currentYear} The Wild Oasis. All rights reserved.</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-primary-400 hover:text-accent-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-primary-400 hover:text-accent-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-primary-400 hover:text-accent-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>

            <div className="flex items-center gap-1 text-primary-400 text-sm">
              <span>Made with</span>
              <HeartIcon className="h-4 w-4 text-red-500" />
              <span>in the Dolomites</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


