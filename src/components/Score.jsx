function Score(props) {
    const { actualScore, bestScore } = props;

    return (
        <>
            <p><span>Score: {actualScore}</span><span>Best Score: {bestScore}</span></p>
        </>
    )
}

export default Score;