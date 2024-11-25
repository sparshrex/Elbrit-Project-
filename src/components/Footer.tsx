import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center space-x-4">
            <Phone className="w-5 h-5 text-yellow-400" />
            <div>
              <p className="text-sm text-teal-100">Phone Number</p>
              <p>+974 3119 1843</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Mail className="w-5 h-5 text-yellow-400" />
            <div>
              <p className="text-sm text-teal-100">Email Address</p>
              <p>Elbritecph@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <MapPin className="w-5 h-5 text-yellow-400" />
            <div>
              <p className="text-sm text-teal-100">Office Location</p>
              <p>Ambassador Street, Zone 61</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-teal-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <img src={Logo} alt="Elbrit" className="h-8 mb-4 md:mb-0" />
            <p className="text-sm text-teal-100 text-center md:text-left">
              © Elbrit Life Sciences Private Limited, C70, SEC - G Block, Mumbai 400051
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}