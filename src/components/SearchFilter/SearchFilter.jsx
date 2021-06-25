import './SearchFilter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons';

function SearchFilter(props) {
    return (
        <div className="searchFilterZone">
            <div className={props.displayMode ? "searchBox-dark" : "searchBox-light"}>
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" className={props.displayMode ? "searchField-dark" : "searchField-light"} placeholder="Search for a country..."/>
            </div>
            <div className={props.displayMode ? "filterDropdown-dark" : "filterDropdown-light"}>
                Filter by Region
                <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon"/>
            </div>
        </div>
    );
}

export default SearchFilter;