import { useState } from "react";

export default function ThemeGenerator() {
  const [theme1, setTheme1] = useState("#fffff");
  const [theme2, setTheme2] = useState("#fffff");
  const [theme3, setTheme3] = useState("#fffff");

  const generateColors = () => {
    let color1 = (Math.random() * 0xfffff * 1000000).toString(16);
    let color2 = (Math.random() * 0xfffff * 1000000).toString(16);
    let color3 = (Math.random() * 0xfffff * 1000000).toString(16);

    setTheme1("#" + color1.slice(0, 6));
    setTheme2("#" + color2.slice(0, 6));
    setTheme3("#" + color3.slice(0, 6));
  };

  return (
    <div className="theme-wrapper">
      <h3>Theme Generator</h3>
      <div className="themes">
        <div className="theme" style={{ backgroundColor: theme1 }}>
          {theme1}
        </div>
        <div className="theme" style={{ backgroundColor: theme2 }}>
          {theme2}
        </div>
        <div className="theme" style={{ backgroundColor: theme3 }}>
          {theme3}
        </div>
      </div>
      <div className="button">
        <button onClick={generateColors}>Generate colors!</button>
      </div>
    </div>
  );
}
