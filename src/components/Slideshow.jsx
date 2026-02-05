import { useState } from "react";

export default function SlideShow({ slides, onFinish }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < slides.length - 1) {
      setIndex(index + 1);
    } else if (onFinish) {
      onFinish();
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.slide}>
        {slides[index]}
      </div>

      <button style={styles.nextBtn} onClick={next}>
        Next →
      </button>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  slide: {
    fontSize: "2rem",
    textAlign: "center",
    padding: "20px",
  },
  nextBtn: {
    position: "absolute",
    bottom: "30px",
    right: "30px",
    padding: "10px 16px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
