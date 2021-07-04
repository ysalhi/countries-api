import './SearchFilter.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';

function SearchFilter(props) {
    const [isOpen, setIsOpen] = useState(false);



    return (
        <div className="searchFilterZone">
            <div className={props.displayMode ? "searchBox-dark" : "searchBox-light"}>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" className={props.displayMode ? "searchField-dark" : "searchField-light"} placeholder="Search for a country..."/>
            </div>
            <div className={props.displayMode ? "filterDropdown-dark" : "filterDropdown-light"} onClick={isOpen ? () => setIsOpen(false) : () => setIsOpen(true)}>
                Filter by Region
                <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon"/>
                {isOpen ? <div className={props.displayMode ? "dropdownList-dark" : "dropdownList-light"}>
                    <div className="countryFilter">Africa</div>
                    <div className="countryFilter">America</div>
                    <div className="countryFilter">Asia</div>
                    <div className="countryFilter">Europe</div>
                    <div className="countryFilter">Oceania</div>
                </div> : <></>}
            </div>
        </div>
    );
}

export default SearchFilter;