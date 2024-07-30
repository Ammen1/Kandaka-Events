import b from "../assets/b.png";


export default function Component() {

  return (
    <div className="relative font-sans bg-slate-950 overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="Background"
          className="w-full h-screen object-cover "
          height="2048"
          src={b}
          style={{
            aspectRatio: "581/2048",
            objectFit: "cover",
          }}
          width="581"
        />
      </div>
      <div className="relative flex flex-col items-center px-10 py-4">
  <main className="flex flex-col items-center text-center mb-6 ">
    <div className="flex items-center justify-between w-full">
      <div className="flex-1 flex ml-44 translate-y-12 justify-center">
        <img
          src="b1.png"
          alt="arrow-up"
          className="w-auto h-[600px] object-contain"
        />
      </div>
      <div className="flex-shrink-0">
        <img
          src="go.png"
          alt="arrow-up"
          className="w-56 h-[565px] translate-x-28  object-cover"
        />
      </div>
    </div>
  </main>
</div>

    </div>
  );
}
