import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import SearchFilter from './components/SearchFilter/SearchFilter';
import CountryList from './components/CountryList/CountryList';
import CountryDetails from './components/CountryDetails/CountryDetails';
import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const APIEndpoint = 'https://restcountries.eu/rest/v2/all';

  const [darkMode, setDarkMode] = React.useState(false);
  const [countryData, setCountryData] = React.useState([]);
  function changeDisplayMode(isDarkMode) {
    setDarkMode(isDarkMode);
  }

  React.useEffect(async () => {
    const response = await axios(APIEndpoint,);

    setCountryData(response.data);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header displayMode={darkMode} switchMode={changeDisplayMode} />
        <MainContainer displayMode={darkMode}>
          <Switch>
            <Route path="/:countryId">
              <CountryDetails countryData={countryData} displayMode={darkMode}/>
            </Route>
            <Route exact path="/">
              <SearchFilter displayMode={darkMode} />
              <CountryList countryData={countryData} displayMode={darkMode} />
            </Route>
          </Switch>
        </MainContainer>
      </div>
    </BrowserRouter>
  );
}

export default App;
