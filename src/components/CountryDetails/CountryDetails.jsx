import './CountryDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useParams, Link } from 'react-router-dom';
import React from 'react';

function CountryDetails(props) {
    let { alphaCode } = useParams();
    var countryId = getCountryIdByAlphaCode(alphaCode);
    
    function getCountryNameByAlphaCode(alpha) {
        for(let i=0; i<props.countryData.length; i++) {
            if (props.countryData[i].alpha3Code===alpha) {
                return props.countryData[i].name;
            }
        }
    }

    function getCountryIdByAlphaCode(alpha) {
        for(let i=0; i<props.countryData.length; i++) {
            if (props.countryData[i].alpha3Code==alpha) {
                return i;
            }
        }
    }


    return (
        <div>
            <Link className="noStyle" to="/">
                <div className={props.displayMode ? "backButton-dark" : "backButton-light"}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <div className="backButtonText">Back</div>

                </div>
            </Link>
            <div className="detailLayout">
                <div className="countryFlagDetail">
                    <img className="flagDetailImg" src={props.countryData[countryId].flag} />
                </div>
                <div className="countryDetailsList">
                    <div className="detailsCountryName"> {props.countryData[countryId].name}</div>
                    <div className="detailsPanels">
                        <div className="detailsLeftPanel">
                            <div className="detailsPanelItem">
                                <div className="detailsPanelTitle">Native Name: </div>
                                {props.countryData[countryId].nativeName}
                            </div>
                            <div className="detailsPanelItem">
                                <div className="detailsPanelTitle">Population: </div>
                                {props.countryData[countryId].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </div>
                            <div className="detailsPanelItem">
                                <div className="detailsPanelTitle">Region: </div>
                                {props.countryData[countryId].region}
                            </div>
                            <div className="detailsPanelItem">
                                <div className="detailsPanelTitle">Sub Region: </div>
                                {props.countryData[countryId].subregion}
                            </div>
                            <div className="detailsPanelItem">
                                <div className="detailsPanelTitle">Capital: </div>
                                {props.countryData[countryId].capital}
                            </div>
                        </div>
                        <div className="detailsRightPanel">
                            <div className="detailsPanelItem">
                                <div className="detailsPanelTitle">Top Level Domain: </div>
                                {props.countryData[countryId].topLevelDomain}
                            </div>
                            <div className="detailsPanelItem">
                                <div className="detailsPanelTitle">Currencies: </div>
                                {props.countryData[countryId].currencies.map((currency, i) => [
                                    i > 0 && ", ",
                                    <>{currency.name}</>
                                ])}
                            </div>
                            <div className="detailsPanelItem">
                                <div className="detailsPanelTitle">Languages: </div>
                                {props.countryData[countryId].languages.map((language, i) => [
                                    i > 0 && ", ",
                                    <>{language.name}</>
                                ])}
                            </div>
                        </div>

                    </div>
                    <div className="detailsBordersDiv">
                        <div className="detailsPanelTitle borderCountries">Border Countries: </div>
                        {props.countryData[countryId].borders.map((border) => (
                            <div className={props.displayMode ? "borderButton-dark" : "borderButton-light"}>{getCountryNameByAlphaCode(border)}</div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
}

export default CountryDetails;