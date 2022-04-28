import WeatherWidget from "./weather";
import Swapi from "./swapi";
import ColorSlider from "./colorSlider";
import DateFormatter from "./dateFormatter";
import ThemeGenerator from "./themeGenerator";

export default function Dashboard() {

    return (
        <div className="dashboard-wrapper">
            <div className="col-1">
                <div className="dashboard">
                    <WeatherWidget/>
                </div>
                <div className="dashboard">
                    <ThemeGenerator/>
                </div>
            </div>
            <div className="col-2">
                <div className="dashboard">
                    <Swapi/>
                </div>
            </div>
            <div className="col-3">
                <div className="dashboard">
                    <ColorSlider/>
                </div>
                <div className="dashboard">
                    <DateFormatter/>
                </div>
            </div>
        </div>
    )
}