export default function Portfolio() {

    return (
        <div className="container portfolioContainer">
            <h1 className="contentHeading">Portfolio</h1>
            <hr className="contentDivide" />
            <img src={"./images/hangman.jpeg"} alt="hangman" className="portfolioPic" />
            <h3 className="hangmanTitle">Hangman</h3>
            <img src={"./images/trivia-game.jpg"} alt="trivia-game" className="portfolioPic" />
            <h3 className="triviaTitle">Trivia Game</h3>
            <a href="https://nameless-lowlands-48961.herokuapp.com/"><img src={"./images/hifi-logo.png"} alt="rock paper scissors" className="portfolioPic" /></a>
            <img src={"./images/rpg-game.jpg"} alt="rpg-game" className="portfolioPic" />
            <h3 className="rpgTitle">RPG Game</h3>
            <img src={"./images/info-widget.jpg"} alt="info-widget" className="portfolioPic" />
            <h3 className="widgetTitle">Rutgers Info Widget</h3>
        </div>
    )
}