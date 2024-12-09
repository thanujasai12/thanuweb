import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './Modal';

const Updates = () => {
  const [selectedUpdate, setSelectedUpdate] = useState<{
    image: string;
    title: string;
    description: string;
  } | null>(null);

  const updates = [
    {
      image: "https://media.licdn.com/dms/image/v2/D5622AQGAf_97R_hg1g/feedshare-shrink_800/feedshare-shrink_800/0/1730317447580?e=1735776000&v=beta&t=opehSo8eRxvQdnZU_XQ6c5omiXhw5wV7gHQCKroG5qU",
      title: "Won Hackathon at TECHRITZ 2024",
      description: "Successfully participated and secured victory in the hackathon conducted by Vignan Institute of Engineering for Women, demonstrating innovative problem-solving skills."
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D5622AQFoZgUF_1ce5g/feedshare-shrink_1280/feedshare-shrink_1280/0/1728376107064?e=1735776000&v=beta&t=5tJwLgSxmkmrHSfv-RLswrNQ_qtw8X0hyaHdLrf7x_U",
      title: "GDG Info Session",
      description: "Successfully organized GDG Info Session for 350+ students as GDG Lead, fostering tech community growth and knowledge sharing."
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D5622AQH4u1IEPe-QoQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1729520008364?e=1735776000&v=beta&t=6XeOoDFn5ngUf9dy3cr06NBY4S8ct2CYCPwRQWUeJeU",
      title: "Drone Technology Workshop",
      description: "Organised Drone Technology Workshop for 350+ Students, providing hands-on experience with cutting-edge drone technology."
    }
  ];

  return (
    <section id="updates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Recent Updates</h2>
          <p className="text-gray-600">Portfolio Chronicles: Unveiling My Recent Exploits and Endeavors</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updates.map((update, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer"
              onClick={() => setSelectedUpdate(update)}
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">
                  {update.title}
                </h3>
                <p className="text-gray-600">
                  {update.description}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm">
                  Click to view details
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedUpdate}
        onClose={() => setSelectedUpdate(null)}
        image={selectedUpdate?.image || ''}
        title={selectedUpdate?.title || ''}
        description={selectedUpdate?.description || ''}
      />
    </section>
  );
};

export default Updates;