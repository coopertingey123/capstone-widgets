import { useState } from "react";
import SwapiComponent from "./swapi_component";
export default function Swapi() {
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("people");
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://swapi.dev/api/${option}/?search=${search}`)
      .then((response) => response.json())
      .then((response) => {
        setData(response.results);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="swapi-wrapper">
      <h3>Swapi Query Widget</h3>
      <div className="query-wrapper">
        <p>Query swapi data: </p>
        <select
          name=""
          id=""
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          <option value="people">People</option>
          <option value="films">Films</option>
          <option value="planets">Planets</option>
          <option value="starships">Starships</option>
          <option value="species">Species</option>
          <option value="vehicles">Vehicles</option>
        </select>
      </div>

      <div className="button-wrapper">
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <div className="button">
          <button onClick={fetchData} style={{ marginLeft: "20px" }}>
            Search
          </button>
        </div>
      </div>

      <div className="swapi-data-wrapper">
        {data.length ? (
          data.map((item) => {
            let keys = Object.keys(item);
            return <SwapiComponent item={item} keys={keys} />;
          })
        ) : (
          <div>Data here</div>
        )}
      </div>
    </div>
  );
}
