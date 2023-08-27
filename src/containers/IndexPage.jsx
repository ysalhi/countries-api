import React from 'react';
import SearchFilter from '../components/SearchFilter/SearchFilter';
import CountryList from '../components/CountryList/CountryList';

export default function IndexPage(props) {
  return (
    <><SearchFilter displayMode={props.displayMode} filterByRegion={props.filterByRegion} unfilter={props.unfilter} filter={props.filter} searchByName={props.searchByName}/>
        <CountryList countryData={props.countryData} filteredData={props.filteredData} displayMode={props.displayMode} />
    </>
  )
}
/* <SearchFilter displayMode={darkMode} filterByRegion={filterByRegion} unfilter={unfilter} filter={filter} searchByName={searchByName}/>
              <CountryList countryData={countryData} filteredData={filteredData} displayMode={darkMode} /> */