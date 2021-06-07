import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';
import SearchFilter from './components/SearchFilter/SearchFilter';
import CountryList from './components/CountryList/CountryList';
import React from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  function changeDisplayMode(isDarkMode) {
    setDarkMode(isDarkMode);
  }
  
  return (
    <div className="App">
      <Header displayMode={darkMode} switchMode={changeDisplayMode}/>
      <MainContainer displayMode={darkMode}>
        <SearchFilter displayMode={darkMode}/>
        <CountryList displayMode={darkMode}/>
      </MainContainer>
    </div>
  );
}

export default App;
