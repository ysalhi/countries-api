import './SearchFilter.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown, faCheck } from '@fortawesome/free-solid-svg-icons';

function SearchFilter(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    function filterRegion(region) {
        if (props.filter == region) {
            props.unfilter();
        } else {
        props.filterByRegion(region);
        }
    }

    function handleChange(event) {
        console.log("handle change fired")
        props.searchByName(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <div className="searchFilterZone">
            <div className={props.displayMode ? "searchBox-dark" : "searchBox-light"}>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" value={searchValue} onChange={handleChange} className={props.displayMode ? "searchField-dark" : "searchField-light"} placeholder="Search for a country..."/>
            </div>
            <div className={props.displayMode ? "filterDropdown-dark" : "filterDropdown-light"} onClick={isOpen ? () => setIsOpen(false) : () => setIsOpen(true)}>
                Filter by Region
                <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon"/>
                {isOpen ? <div className={props.displayMode ? "dropdownList-dark" : "dropdownList-light"}>
                    <div className="countryFilter" onClick={() => filterRegion("Africa")}>{(props.filter=="Africa") ? <FontAwesomeIcon icon={faCheck} className="checkIcon" /> : "" }Africa</div>
                    <div className="countryFilter" onClick={() => filterRegion("Americas")}>{(props.filter=="Americas") ? <FontAwesomeIcon icon={faCheck} className="checkIcon"/> : "" }America</div>
                    <div className="countryFilter" onClick={() => filterRegion("Asia")}>{(props.filter=="Asia") ? <FontAwesomeIcon icon={faCheck} className="checkIcon"/> : "" }Asia</div>
                    <div className="countryFilter" onClick={() => filterRegion("Europe")}>{(props.filter=="Europe") ? <FontAwesomeIcon icon={faCheck} className="checkIcon"/> : "" }Europe</div>
                    <div className="countryFilter" onClick={() => filterRegion("Oceania")}>{(props.filter=="Oceania") ? <FontAwesomeIcon icon={faCheck} className="checkIcon"/> : "" }Oceania</div>
                </div> : <></>}
            </div>
        </div>
    );
}

export default SearchFilter;