import { useEffect, useState } from "react";
import axios from "axios";
import "./styles/App.css";
import getRandomNumber from "./utils/getRandomNumber";
import LocationInfo from "./components/LocationInfo";
import CardResident from "./components/CardResident";
import FilterList from "./components/FilterList";
import ErrorScreen from "./components/ErrorScreen";

function App() {
  // guarda una location
  const [location, setLocation] = useState();
  // guarda la información del input y hacer la petición cuando se hace submit
  const [searchInput, setSearchInput] = useState("");
  // guarda las sugerencias de la api
  const [suggestList, setSuggestList] = useState();

  const [hasError, setHasError] = useState(false);

  console.log(searchInput);

  useEffect(() => {
    let id = getRandomNumber();
    if (searchInput) {
      id = searchInput;
    }

    const URL = `https://rickandmortyapi.com/api/location/${id}`;

    axios
      .get(URL)
      .then((res) => {
        setHasError(false);
        setLocation(res.data);
      })
      .catch((err) => setHasError(true));
  }, [searchInput]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchInput(event.target.idLocation.value);
  };

  const handleChange = (event) => {
    if (event.target.value === "") {
      setSuggestList();
    } else {
      const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`;

      axios
        .get(URL)
        .then((res) => setSuggestList(res.data.results))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="App">
      <div className="display">
        <div className="appHeader"></div>
        <form className="formInput" onSubmit={handleSubmit}>
          <input
            className="inputText"
            id="idLocation"
            placeholder="Enter a number from 1 to 126"
            type="text"
            onChange={handleChange}
          />
          <button className="inputButton">
            <span className="inputButtonSpan">Search</span>
            <div class="line"></div>
            <div class="line-2"></div>
            <div class="speak"></div>
            <div class="speak one"></div>
            <div class="speak two"></div>
            <div class="speak three"></div>
          </button>
          <FilterList
            suggestList={suggestList}
            setSearchInput={setSearchInput}
          />
        </form>
        {hasError ? (
          <ErrorScreen />
        ) : (
          <>
            <LocationInfo location={location} />
            <div className="cardContainer">
              {location?.residents.map((url) => (
                <CardResident key={url} url={url} />
              ))}
            </div>
          </>
        )}
      </div>
      <footer className="footer">
        <h1>💀Developed🎸</h1>
        <h1>by</h1>
        <h1>🤘🏽DevPoul🥁</h1>
      </footer>
    </div>
  );
}

export default App;
