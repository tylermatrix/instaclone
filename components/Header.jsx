import Image from "next/image";

function Header() {
  return (
    <div>
      <h1>I am a header</h1>

      {/* Left */}
      <div>
        <Image src="https://links.papareact.com/ocw" layout="fill"></Image>
      </div>
      {/* Middle */}

      {/* Right */}
    </div>
  );
}

export default Header;
