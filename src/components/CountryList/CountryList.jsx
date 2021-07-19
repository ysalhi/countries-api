import './CountryList.css';
import { Link } from 'react-router-dom';

function CountryList(props) {
    return (
        <div className="countryList">
            {props.filteredData.map((country, index) => (
                <Link to={`/${country.alpha3Code}`} className="noStyle" key={index}>
                <div className={props.displayMode ? "countryTile-dark" : "countryTile-light"}>
                    <div className="countryFlag">
                        <img className="flagImg" src={country.flag} />
                    </div>
                    <div className="countryName">{country.name}</div>
                    <div className="countryDetails">
                        <div className="countryDetailsTitle">Population: </div>
                        {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </div>
                    <div className="countryDetails">
                        <div className="countryDetailsTitle">Region: </div>
                        {country.region}
                    </div>
                    <div className="countryDetails">
                        <div className="countryDetailsTitle">Capital: </div>
                        {country.capital}
                    </div>
                </div>
                </Link>))}
        </div>
    );
}

export default CountryList;