import './MainContainer.css';

function MainContainer(props) {
    return (
        <div className={props.displayMode ? "mainContainer-dark" : "mainContainer-light"}>
            {props.children}
        </div>
    );
}

export default MainContainer;