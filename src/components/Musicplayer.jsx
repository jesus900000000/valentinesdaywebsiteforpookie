import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const startAudio = () => {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
      document.removeEventListener("click", startAudio);
    };

    document.addEventListener("click", startAudio);
    return () => document.removeEventListener("click", startAudio);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      {/* floating control */}
      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          bottom: "70px",
          right: "20px",
          padding: "10px 14px",
          borderRadius: "12px",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        }}
      >
        {playing ? "Pause Music" : "Play Music"}
      </button>
    </>
  );
}
