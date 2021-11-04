import Image from "next/image";

function Header() {
  return (
    <div>
      <div className="flex justify-between bg-white max-w-6xl">
        {" "}
        {/* using Tailwind to style */}
        {/* Left */}
        <div className="relative hidden lg:inline-grid w-24 h-24 cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit=""
          ></Image>
        </div>
        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain" // Preserves aspect raetio
          ></Image>
        </div>
        {/* Middle */}
        <h1>Hello World</h1>
        {/* Right */}
      </div>
    </div>
  );
}

export default Header;
