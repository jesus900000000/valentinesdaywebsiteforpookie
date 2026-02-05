/** Imports */

import { useState, useEffect, useRef, use } from "react";
import Confetti from "react-confetti";
import "./App.css";
import SlideShow from "./components/Slideshow";
import MusicPlayer from "./components/Musicplayer";


/** App Component */
function App() {

  /** Const */
  const [answer, setAnswer] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef(null);
  const audioRef2 = useRef(null);
  const [showMain, setShowMain] = useState(false);



  /** useEffect hook for sounds */
  useEffect(() => {
    audioRef.current = new Audio("/villager1.mp3");
    audioRef2.current = new Audio("/levelup.mp3");
  }, []);

  const playVillagerSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const playLevelUpSound = () => {
    if (audioRef2.current) {
      audioRef2.current.currentTime = 0;
      audioRef2.current.play();
    }
  };


  /** Screen bubble up emojies */
  const hearts = ["🥔💖🥔💖", "🥔🥔💖", "🥔💖💖", "🥔💖", "💖"];


  /** SlideShow Component */
  if (!showMain) {
    return (
      <>
      <MusicPlayer />
      <SlideShow
        slides={[
          <div>
            💖 Are you a crafting table? 💖
            <img style={{ width: "20%", height: "20%" }} src="/1.JPG" alt="Valentine 1" />
            <img style={{ width: "20%", height: "20%" }} src="/2.jpg" alt="Valentine 2" />
            <img style={{ width: "20%", height: "20%" }} src="/3.JPG" alt="Valentine 3" />
            <img style={{ width: "20%", height: "20%" }} src="/4.jpg" alt="Valentine 4" />
          </div>,
          <div>
            <img style={{ width: "20%", height: "20%" }} src="/23.jpg" alt="Valentine 9" />
            <img style={{ width: "20%", height: "20%" }} src="/10.jpg" alt="Valentine 10" />
            <img style={{ width: "20%", height: "20%" }} src="/19.jpg" alt="Valentine 7" />
            <img style={{ width: "20%", height: "20%" }} src="/20.jpg" alt="Valentine 8" />
            Because ...💖 💖 💖
            <img style={{ width: "20%", height: "20%" }} src="/7.jpg" alt="Valentine 7" />
            <img style={{ width: "20%", height: "20%" }} src="/9.jpg" alt="Valentine 8" />
            <img style={{ width: "20%", height: "20%" }} src="/21.jpg" alt="Valentine 7" />
            <img style={{ width: "20%", height: "20%" }} src="/22.jpg" alt="Valentine 8" />
          </div>,
          <div>💖 TU Y YO 💖 👷‍♀️👷‍♂️ CRAFTED a beautiful relationship! 💖
            <img style={{ width: "20%", height: "20%" }} src="/11.jpg" alt="Valentine 9" />
            <img style={{ width: "20%", height: "20%" }} src="/12.jpg" alt="Valentine 6" />
            <img style={{ width: "20%", height: "20%" }} src="/13.jpg" alt="Valentine 7" />
            <img style={{ width: "20%", height: "20%" }} src="/14.jpg" alt="Valentine 8" />
            <img style={{ width: "20%", height: "20%" }} src="/15.jpg" alt="Valentine 9" />
            <img style={{ width: "20%", height: "20%" }} src="/16.jpg" alt="Valentine 6" />
            <img style={{ width: "20%", height: "20%" }} src="/17.jpg" alt="Valentine 7" />
            <img style={{ width: "20%", height: "20%" }} src="/18.jpg" alt="Valentine 8" />
          </div>,
        ]}
        onFinish={() => setShowMain(true)}
      />
      </>
      
    );
  }


  /** JSX */
  return (



    <div className="container">
      <MusicPlayer />

      {/** Imports */}
      {/** Basically while showConfetti is false, nothing will show. until its true then the component <Confetti /> is shown. */}


      {showConfetti && <Confetti />}

      <h1>💖 Will you be my Valentine? 💖</h1>

      {!answer && (
        <div className="buttons">
          <button
            className="yes"
            onClick={() => {
              setAnswer("yes");
              setShowConfetti(true);
              playLevelUpSound();
              playLevelUpSound();
            }}
          >
            Yes 💕💕
          </button>

          <button
            className="no"
            onMouseEnter={(e) => {
              playVillagerSound();

              const btn = e.target;
              btn.style.position = "absolute";
              btn.style.left = Math.random() * 80 + "%";
              btn.style.top = Math.random() * 80 + "%";
            }}
          >
            No 😡
          </button>
        </div>
      )}

      {answer === "yes" && (
        <div className="response">
          <h2>💘💘💘 YAYYY 💘💘💘</h2>
          <p>
            ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
            <br />
            🥰 Ana + Jesus 🥰
            <br />
            ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️
          </p>
          <h2>💘💘💘 YAYYY 💘💘💘</h2>
        </div>
      )}

      {/* Floating hearts */}
      <div className="hearts">
        {Array.from({ length: 20 }).map((_, i) => {
          const style = {
            position: "absolute",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
          };

          const emoji =
            hearts[Math.floor(Math.random() * hearts.length)];

          return (
            <span key={i} style={style}>
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default App;
