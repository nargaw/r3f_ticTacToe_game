import useGame from "./stores/useGame"

export default function Interface()
{
    const getWinner = useGame(state => state.getWinner())
    const restart = useGame(state => state.restart)

    return <>
        <div className="interface">
            {getWinner !== '' && <div className="restart" onClick={restart}>Restart</div>}   
        </div>
    </>
}