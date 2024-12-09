import React from 'react';

const Activities = () => {
  const activities = [
    {
      image: "https://media.licdn.com/dms/image/v2/D5622AQGAf_97R_hg1g/feedshare-shrink_800/feedshare-shrink_800/0/1730317447580?e=1735776000&v=beta&t=opehSo8eRxvQdnZU_XQ6c5omiXhw5wV7gHQCKroG5qU",
      title: "Recent Activity",
      description: "Leading and organizing tech events"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D5622AQGrqJHK4ET49w/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1729171847285?e=1735776000&v=beta&t=wZX_EqlFkHkw6eVHn7Klia2a-heRsHPkvxRccVtTwx4",
      title: "Community Event",
      description: "GDSC Info Session for 350+ students"
    },
    {
      image: "https://media.licdn.com/dms/image/v2/D5622AQE0txLYI1sMSQ/feedshare-shrink_800/feedshare-shrink_800/0/1729520007883?e=1735776000&v=beta&t=bk8xfsElzzqAXQ__Jbzo9_GHpzYZ_doGiCj8UkHWotE",
      title: "Workshop",
      description: "Drones Technology Workshop - GDSC Chapter"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {activities.map((activity, index) => (
        <div key={index} className="rounded-lg overflow-hidden shadow-lg">
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-bold text-lg mb-2">{activity.title}</h3>
            <p className="text-gray-600">{activity.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activities;