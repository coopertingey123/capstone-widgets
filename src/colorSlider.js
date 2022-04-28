import { useState } from "react"


export default function ColorSlider() {

    const [color, setColor] = useState("blue")
    const [sliderValue, setSliderValue] = useState("50")

    return (
        <div className="slider-wrapper">
            <h3>Change color slider</h3>
            <div className="middle-wrapper">
                <div className="my-color" style={{color: color, opacity: `${sliderValue}%`}}>
                    My Color
                </div>
                <div className="select">
                    Select Color: 
                    <select value={color} name="" id="" onChange={e => setColor(e.target.value)}>
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="yellow">Yellow</option>
                        <option value="purple">Purple</option>
                        <option value="orange">Orange</option>
                    </select>
                </div>
                <div className="slider">
                    <input type="range" min="1" max="100" value={sliderValue} onChange={e => setSliderValue(e.target.value)}/>
                </div>
            </div>
            <div className="opacity">
                Color Opacity: {sliderValue} %
            </div>
        </div>
    )
}