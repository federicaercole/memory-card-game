function Dialog(props) {
    const { lose, winning, resetConditions } = props;

    let message = "";

    if (lose) {
        message = "You lose!";
    } else if (winning) {
        message = "You win!";
    }

    if (message !== "") {
        return (
            <>
                <div className="overlay"></div>
                <div className="dialog">
                    <p>{message}</p>
                    <button type="button" onClick={resetConditions}>Start a new game</button>
                </div>
            </>)
    }
}

export default Dialog;