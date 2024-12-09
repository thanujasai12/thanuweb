import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img
              src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/avatars/thanuja_sai_lekkala_Z5f1RZm.jpg"
              alt="Thanuja Sai"
              className="rounded-full w-64 h-64 object-cover shadow-lg mx-auto"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              Dedicated Computer Science student with strong skills in programming and problem-solving. 
              Seeking an opportunity to apply my knowledge in software development and algorithms while 
              contributing to innovative projects and gaining valuable industry experience.
            </p>
            <div className="space-y-3">
              <a href="tel:+919390945421" className="flex items-center gap-3 hover:text-indigo-600 transition-colors">
                <Phone className="text-indigo-600" />
                <span>+91 9390945421</span>
              </a>
              <a href="mailto:lekkalathanuja12@gmail.com" className="flex items-center gap-3 hover:text-indigo-600 transition-colors">
                <Mail className="text-indigo-600" />
                <span>lekkalathanuja12@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="text-indigo-600" />
                <span>Visakhapatnam</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;