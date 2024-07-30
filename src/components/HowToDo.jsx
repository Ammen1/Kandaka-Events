

export default function WhatWeDo() {
  return (
    <div className="flex justify-center items-center py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-white mb-16">
          WHAT WE DO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.title} className="text-center hover:animate-pulse hover:bg-teal-900 p-6 rounded-lg shadow-lg">
              <div className="flex justify-center  items-center mb-4">
                <service.icon className="h-16 w-16 hover:animate-bounce text-white " />
              </div>
              <h3 className="text-xl leading-6 font-medium text-gradient mb-4">
                {service.title}
              </h3>
              <p className="text-base leading-6 font-medium text-white">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    title: "Corporate Events",
    description: "We specialize in organizing high-impact corporate events tailored to your business needs.",
    icon: CorporateEventsIcon,
  },
  {
    title: "Sporting Events",
    description: "From local tournaments to international competitions, we handle every aspect of sporting events.",
    icon: SportingEventsIcon,
  },
  {
    title: "Live Entertainment",
    description: "Experience unforgettable moments with our expertly managed live entertainment events.",
    icon: LiveEntertainmentIcon,
  },
  {
    title: "Production Services",
    description: "Comprehensive production services to ensure your event is executed seamlessly.",
    icon: ProductionServicesIcon,
  },
  {
    title: "Artist Management",
    description: "Professional artist management to ensure your talent is showcased to its fullest.",
    icon: ArtistManagementIcon,
  },
  {
    title: "Nightlife Events and Concerts",
    description: "Organizing vibrant nightlife events and memorable concerts for all types of audiences.",
    icon: NightlifeEventsIcon,
  },
  {
    title: "Meetings",
    description: "Efficiently managed meetings to suit any business or organizational need.",
    icon: MeetingsIcon,
  },
  {
    title: "Sponsorship Management",
    description: "Expert sponsorship management to maximize your event's exposure and success.",
    icon: SponsorshipManagementIcon,
  },
  {
    title: "Tour & Vacations",
    description: "Organizing tours and vacations to create unforgettable travel experiences.",
    icon: TourVacationsIcon,
  },
  {
    title: "Fashion Events",
    description: "Hosting glamorous fashion events that leave a lasting impression.",
    icon: FashionEventsIcon,
  },
  {
    title: "Professional Congress Organization (PCO)",
    description: "Providing expert organization for professional congresses and large-scale conferences.",
    icon: PCOIcon,
  },
  {
    title: "Incentives",
    description: "Designing and executing incentive programs that motivate and reward.",
    icon: IncentivesIcon,
  },
  {
    title: "Event Logistics",
    description: "Comprehensive logistics solutions to ensure every detail of your event is covered.",
    icon: EventLogisticsIcon,
  },
  {
    title: "Road Shows & Product Launches",
    description: "Creating impactful road shows and product launches to engage and excite your audience.",
    icon: RoadShowsIcon,
  },
];

function CorporateEventsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 12h4v6h-4zM6 12h4v6H6zM14 12h4v6h-4zM18 12h4v6h-4zM4 6h16v6H4z" />
    </svg>
  );
}

function SportingEventsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4l6 6-6 6h16l6-6-6-6z" />
    </svg>
  );
}

function LiveEntertainmentIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12h6M12 9v6" />
    </svg>
  );
}

function ProductionServicesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 8h16v8H4z" />
      <path d="M4 12h16" />
    </svg>
  );
}

function ArtistManagementIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8l4 4-4 4-4-4z" />
    </svg>
  );
}

function NightlifeEventsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12h20M12 2v20" />
    </svg>
  );
}

function MeetingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  );
}

function SponsorshipManagementIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 12h4v8h8v-4h2v4h8v-8h4L12 2z" />
    </svg>
  );
}

function TourVacationsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2l8 8-8 8-8-8z" />
    </svg>
  );
}

function FashionEventsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L2 12h4v8h8v-4h2v4h8v-8h4L12 2z" />
    </svg>
  );
}

function PCOIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M4 12l8 8 8-8-8-8-8 8z" />
    </svg>
  );
}

function IncentivesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 8h16v8H4z" />
    </svg>
  );
}

function EventLogisticsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 8h16v8H4z" />
      <path d="M4 12h16" />
    </svg>
  );
}

function RoadShowsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 4h16v16H4z" />
      <path d="M12 12l-4 4 4 4 4-4-4-4z" />
    </svg>
  );
}
