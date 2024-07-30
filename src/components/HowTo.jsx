
function AboutUs() {
  return (
    <div className="flex flex-col items-center py-16 text-white">
      <h2 className="text-3xl font-extrabold text-center mb-8">About Us</h2>
      <p className="text-lg leading-7 text-center mb-4">
        Welcome to Kandaka Events, a visionary Entertainment Company rooted in Ethiopia. Our persistent commitment lies in crafting extraordinary and unparalleled entertainment solutions. Our ultimate goal is to elevate your experience by offering cutting-edge sound and lighting systems, enchanting themes. Backed by a team of exceptionally talented, imaginative, and resourceful individuals, we guarantee unforgettable moments.
      </p>
      <p className="text-lg leading-7 text-center mb-4">
        At Kandaka, we firmly believe in setting ourselves apart from the crowd. As an event organizer company, we strive to surpass expectations by continually pushing the boundaries of what is possible in the industry. Our commitment lies in delivering events of the utmost quality, ensuring that each occasion is executed flawlessly, on schedule, and within your budget.
      </p>
    </div>
  );
}

export default function HowTo() {
  return (
    <div className="flex justify-center items-center py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutUs />
      </div>
    </div>
  );
}
