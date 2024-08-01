import React from 'react';

const pastWorks = [
  {
    image: 'oda.png',
    description: 'Oda awards Celebrate outstanding individuals. An evening of glitz, glamour, and recognition as we honor artists, entrepreneurs, innovators, and community leaders for their remarkable achievements',
  },
  {
    image: 'tejo.png',
    description: 'Recent events organized by our team include the Ethiopian Community Day in South Africa, a remarkable celebration held across four cities - Cape Town, Durban, Pretoria, and Johannesburg. This event, featuring the mesmerizing Tobiya Poetic Jazz, enthralled attendees and showcased the richness of Ethiopian culture',
  },
  {
    image: 'africa.png',
    description: 'African Unions 60th Anniversary Celebration, a grand commemoration that highlighted cultural heritage and unity. Collaborating with esteemed partners such as the Ethiopian Skylight Hotel and Arts TV, we attracted distinguished guests, leaders, and influencers from around the world',
  },
 
];

const Products = () => {
  return (
    <div className="text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 text-center">Our Past Work</h2>
        <div className="space-y-8">
          {pastWorks.map((work, index) => (
            <div key={index} className="flex flex-col gap-10 md:flex-row items-center">
              <p className="text-lg w-full md:w-1/2">{work.description}</p>
              <img src={work.image} alt={`Past Work ${index + 1}`} className=" lg:translate-x-28 w-full h-full md:w-1/2 mb-4 md:mb-0 md:mr-4" />
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
