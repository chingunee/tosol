import React, { useState } from "react";

import Snowflakes from "magic-snowflakes";
import { ConnectKitButton } from "connectkit";
import { FaWallet } from "react-icons/fa";
import { verifyMessage } from "../src/Verify";
import { Link } from "react-router-dom";

const snowflakes = new Snowflakes({
  speed: 2,
  count: 10,
  wind: true,
  rotation: 3,
  zIndex: 10,
});

const flakes = new Snowflakes({
  speed: 2,
  color: "#2450b5",
  count: 10,
  wind: true,
  rotation: 3,
  zIndex: 80,
});

snowflakes.start();

function HomePage() {
  const [isClicked, setIsClicked] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-800">
        <div className="flex flex-col items-center">
          <div className="text-7xl font-bold bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600 text-transparent">
            Team No Alias
          </div>
          <h2 class="text-white my-5 text-4xl font-extralight">
            Permissionless Digital Signature & Steganography Service
          </h2>
          <ConnectKitButton onClick={handleClick} />
          {isClicked && (
            <>
              <div
                className="flex my-5 items-center space-x-2 text-[#0a1f2f] px-5 h-11 text-[1rem] bg-[#0ea5e9] rounded font-semibold cursor-pointer hover:text-[#28dbd1] hover:border-[#28dbd1] duration-300 hover:bg-[#0a1f2f] border border-transparent  "
                onClick={verifyMessage}
              >
                <p>Get Key</p>
                <FaWallet size={20} />
              </div>
              <div className="flex items-center space-x-2 text-[#0a1f2f] px-5 h-11 text-[1rem] bg-[#0ea5e9] rounded font-semibold cursor-pointer hover:text-[#28dbd1] hover:border-[#28dbd1] duration-300 hover:bg-[#0a1f2f] border border-transparent  ">
                <Link to="/stegno">Encode Message</Link>
              </div>
            </>
          )}
        </div>
      </div>
      <div></div>
    </>
  );
}

export default HomePage;
