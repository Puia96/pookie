import React, { useState } from "react";
import mountainImg from "./assets/bright_lightning.jpg";
import shyEmoji from "./assets/emoji/shy_emoji.gif";

import cry1 from "./assets/emoji/sad/cry1.gif";
import cry2 from "./assets/emoji/sad/cry2.gif";
import sad1 from "./assets/emoji/sad/sad1.gif";
import sad2 from "./assets/emoji/sad/sad2.gif";
import sad3 from "./assets/emoji/sad/sad3.gif";

import happy1 from "./assets/emoji/happy/happy1.gif";
import happy2 from "./assets/emoji/happy/happy2.gif";

const App = () => {
  const emojis = [cry1, cry2, sad1, sad2, sad3];
  const [currentEmoji, setCurrentEmoji] = useState(shyEmoji);
  const [secondaryEmoji, setSecondaryEmoji] = useState(null);

  const [position, setPosition] = useState({ top: 0, left: 0 });

  const moveButton = () => {
    const buttonWidth = 120;
    const buttonHeight = 40;

    const areaWidth = 400;
    const areaHeight = 300;

    const maxTop = areaHeight - buttonHeight;
    const maxLeft = areaWidth - buttonWidth * 2 - 16; // prevent overlap with "Yes" button

    const randomTop = Math.floor(Math.random() * maxTop);
    const randomLeft = Math.floor(Math.random() * maxLeft);
    setPosition({ top: randomTop, left: randomLeft });

    // Move button randomly
    const newTop = Math.floor(Math.random() * 150);
    const newLeft = Math.floor(Math.random() * 250);
    setPosition({ top: newTop, left: newLeft });

    // Change emoji — ensure it's not the same as current one
    const otherEmojis = emojis.filter((emoji) => emoji !== currentEmoji);
    const randomIndex = Math.floor(Math.random() * otherEmojis.length);
    setCurrentEmoji(otherEmojis[randomIndex]);
  };

  const yesButton = () => {
    setCurrentEmoji(happy1);
    setSecondaryEmoji(happy2);
  };

  return (
    <div
      className="hero min-h-screen relative"
      style={{ backgroundImage: `url(${mountainImg})` }}
    >
      <div className="hero-overlay"></div>
      <div className="card card-side border py-5">
        {secondaryEmoji && (
          <img src={secondaryEmoji} alt="happy" className="w-40 h-40" />
        )}
        <figure>
          {secondaryEmoji && <p className="">Thank you!</p>}
          <img src={currentEmoji} alt="shy_emoji" className="w-28 h-28" />
        </figure>
        {!secondaryEmoji && (
          <div className="card-body">
            <h2 className="card-title text-white">Hello!</h2>
            <p className="text-white mb-4">
              Would you like to have dinner with me sometime?
            </p>

            <div className="relative mb-5 lg:ml-28 md:ml-24 sm:ml-20">
              <button
                onClick={moveButton}
                className="btn btn-soft text-black bg-red-500 border-none hover:bg-red-700 transition-all duration-200"
                style={{
                  position: "absolute",
                  top: `${position.top}px`,
                  left: `${position.left}px`,
                }}
              >
                Sorry, No
              </button>

              <button
                onClick={yesButton}
                className="btn btn-soft btn-primary hover:bg-blue-300"
                style={{
                  position: "absolute",
                  top: "0px",
                  right: "0px",
                }}
              >
                Of course, Yes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
