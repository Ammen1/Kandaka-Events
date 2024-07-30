import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faTruck, faBullhorn, faVideo } from '@fortawesome/free-solid-svg-icons';

const FounderProfile = () => {
  return (
    <div className=" text-white mt-10 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-8 text-center">Founder Profile</h1>

        <div className="flex flex-col md:flex-row items-center mb-16">
          <img src="photo.jpg" alt="Bruktawit Samuel" className="rounded-full shadow-lg w-full h-72 mb-4 md:mb-0 md:mr-8" />
          <div>
            <h2 className="text-3xl font-bold mb-4">Bruktawit Samuel</h2>
            <p className="text-lg mb-4">
              Bruktawit Samuel, the founder of Rhino Trading PLC, is an experienced event organizer with a passion for creating unforgettable experiences. With a background spanning over 5 years in event organizing, Bruktawit has honed her skills and expertise in the industry.
            </p>
            <p className="text-lg">
              During her career, Bruktawit worked with EML events and security for 3 years, gaining valuable insights into event management and security coordination. She also contributed her talents to Africa travelers, where she specialized in tour event organization for 2 years, combining her love for travel and event planning.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex flex-col md:flex-row items-center">
            <FontAwesomeIcon icon={faCalendarAlt} className="text-4xl text-white mb-4 md:mb-0 md:mr-4" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Kandaka Events</h3>
              <p className="text-lg">
                Kandaka Events hosts a variety of events ranging from grand-scale conferences to small intimate gatherings.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <FontAwesomeIcon icon={faTruck} className="text-4xl text-white mb-4 md:mb-0 md:mr-4" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Lole Movers</h3>
              <p className="text-lg">
                With Lole Movers, she provides professional packers and movers services, ensuring efficient and secure relocations.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <FontAwesomeIcon icon={faBullhorn} className="text-4xl text-white mb-4 md:mb-0 md:mr-4" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Nefertiti</h3>
              <p className="text-lg">
                Nefertiti, her digital marketing division, assists businesses in reaching their target audiences and maximizing their online presence.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <FontAwesomeIcon icon={faVideo} className="text-4xl text-white mb-4 md:mb-0 md:mr-4" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Nandi</h3>
              <p className="text-lg">
                Nandi, a production studio that delivers high-quality creative productions for various media platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderProfile;
