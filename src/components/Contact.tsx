import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <a 
            href="mailto:lekkalathanuja12@gmail.com"
            className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Mail className="text-indigo-600 h-6 w-6" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">lekkalathanuja12@gmail.com</p>
            </div>
          </a>
          
          <a 
            href="tel:+919390945421"
            className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Phone className="text-indigo-600 h-6 w-6" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+91 9390945421</p>
            </div>
          </a>
          
          <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg">
            <MapPin className="text-indigo-600 h-6 w-6" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-600">Visakhapatnam</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;