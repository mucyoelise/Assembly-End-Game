import clsx from 'clsx'
import { getFarewellText } from '../utils'

export default function GameStatus({
    isGameWon,
    isGameLost,
    isGameOver,
    isLastGuessedIncorrect,
    wrongGuessCount,
    languages
}){
   
    const gameStatusClass = clsx("game-status", {
        won: isGameWon,
        lost: isGameLost,
        farewell: !isGameOver && isLastGuessedIncorrect
    })

    function renderGameStatus(){
        if(!isGameOver & isLastGuessedIncorrect){
            return (
            <p className="farewell-message">
                {
                    getFarewellText(languages[wrongGuessCount - 1].name)
                }     
            </p>
            )
        }
        if(isGameWon){
            return (
                <>
                    <h2>You won!</h2>
                    <p>Well done! 🎉</p>
                </>
            )
        }
        if(isGameLost){
            return(
                <>
                    <h2>Game over!</h2>
                    <p>You lose! Better start learning Assembly😭</p>
                </>
            )
        }
        return null
    }
    return (
        <section
                aria-live="polie"
                role="status" 
                className={gameStatusClass}
        >
                {renderGameStatus()}
        </section>
    )
}