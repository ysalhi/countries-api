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
  const [filteredData, setFilteredData] = React.useState([]);
  const [filter, setFilter] = React.useState('');
  
  function changeDisplayMode(isDarkMode) {
    setDarkMode(isDarkMode);
  }

  function searchByName(name) {
    var searchedArray;
    if (filter === '' && name === '') {
      setFilteredData(countryData);
    } else if (filter === '' && name !== '') {
      searchedArray = countryData.filter(country => country.name.includes(name));
      setFilteredData(searchedArray);
    } else if (filter !== '' && name === '') {
      filterByRegion(filter);
    } else if (filter !== '' && name !== '') {
      filterByRegion(filter);
      setFilteredData(currentValue => currentValue.filter(country => country.name.includes(name)));
    }
  }


  function filterByRegion(region) {
    let filteredArray = countryData.filter(country => country.region == region);
    setFilteredData(filteredArray);
    setFilter(region);
    console.log(filteredData);
  }

  function unfilter() {
    setFilteredData(countryData);
    setFilter();
  }

  React.useEffect(async () => {
    const response = await axios(APIEndpoint,);

    setCountryData(response.data);
    setFilteredData(response.data);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header displayMode={darkMode} switchMode={changeDisplayMode} />
        <MainContainer displayMode={darkMode}>
          <Switch>
            <Route path="/:alphaCode">
              <CountryDetails countryData={countryData} displayMode={darkMode}/>
            </Route>
            <Route exact path="/">
              <SearchFilter displayMode={darkMode} filterByRegion={filterByRegion} unfilter={unfilter} filter={filter} searchByName={searchByName}/>
              <CountryList countryData={countryData} filteredData={filteredData} displayMode={darkMode} />
            </Route>
          </Switch>
        </MainContainer>
      </div>
    </BrowserRouter>
  );
}

export default App;
