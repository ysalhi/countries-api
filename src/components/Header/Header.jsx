import './Header.css';
import moonIcon from './moon.png';

function Header(props) {
    function changeDisplayMode() {
        if (props.displayMode) {
            props.switchMode(false);
        } else {
            props.switchMode(true);
        }
    }
    return (
        <div className={props.displayMode ? "navbar-dark" : "navbar-light"}>
            <div className="appName">Where in the world?</div>
            <div className="darkModeZone" onClick={changeDisplayMode}>
                <img src={moonIcon} className="moonIcon" height={16} width={16} />
                Dark Mode
            </div>
        </div>
    );
}

export default Header;