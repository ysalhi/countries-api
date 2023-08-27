import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import CountryDetails from './components/CountryDetails/CountryDetails';
import IndexPage from './containers/IndexPage';
import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const APIEndpoint = 'https://restcountries.com/v2/all';

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
    let filteredArray = countryData.filter(country => country.region === region);
    setFilteredData(filteredArray);
    setFilter(region);
    console.log(filteredData);
  }

  function unfilter() {
    setFilteredData(countryData);
    setFilter('');
  }

  React.useEffect(() => {
    async function fetchData() {
      const response = await axios(APIEndpoint,);

      setCountryData(response.data);
      setFilteredData(response.data);
    }
    fetchData();
    console.log(countryData);
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header displayMode={darkMode} switchMode={changeDisplayMode} />
        <MainContainer displayMode={darkMode}>
          <Routes>
            <Route path="/:alphaCode" element={<CountryDetails countryData={countryData} displayMode={darkMode}/>} />
            <Route exact path="/" element={<IndexPage displayMode={darkMode} filterByRegion={filterByRegion} unfilter={unfilter} filter={filter} searchByName={searchByName} countryData={countryData} filteredData={filteredData} />} />
          </Routes>
        </MainContainer>
      </div>
    </BrowserRouter>
  );
}

/*<Routes>
            <Route path="/:alphaCode" element={<CountryDetails countryData={countryData} displayMode={darkMode}/>} />
            <Route exact path="/">
              <SearchFilter displayMode={darkMode} filterByRegion={filterByRegion} unfilter={unfilter} filter={filter} searchByName={searchByName}/>
              <CountryList countryData={countryData} filteredData={filteredData} displayMode={darkMode} />
            </Route>
*/

export default App;
