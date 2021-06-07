import './SearchFilter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function SearchFilter(props) {
    return (
        <div className="searchFilterZone">
            <div className="searchBox-light">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" />
            </div>
        </div>
    );
}

export default SearchFilter;