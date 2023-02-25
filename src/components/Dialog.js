function Dialog(props) {
    const { status, startNewGame } = props;

    if (status !== "play") {
        return (
            <>
                <div className="overlay"></div>
                <div className="dialog">
                    <p>{status === "lose" ? "Oops, you chose the same color twice!" : "Congratulations, you won the game!"}</p>
                    <button type="button" onClick={startNewGame}>Start a new game</button>
                </div>
            </>)
    }
}

export default Dialog;