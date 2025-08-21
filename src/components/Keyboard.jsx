import clsx from "clsx"

export default function Keyboard({ guessedLetters, secretWord, isGameOver, onGuess }){
    // Static value
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    const keyboardElements = alphabet.split('').map((letter)=> {
            const isGuessed = guessedLetters.includes(letter)
            const isCorrect = isGuessed && secretWord.includes(letter)
            const isWrong = isGuessed && !secretWord.includes(letter)
            
            const keyboardClasses = clsx("alpha-letter", {
                correct:isCorrect, 
                wrong:isWrong,
            }) 
            
            return(
                <button
                key={letter}
                className = {keyboardClasses}
                disabled = {isGameOver}
                aria-disabled = {guessedLetters.includes(letter)}
                aria-label={`Letter ${letter}`} 
                onClick={() => onGuess(letter)} 
                >
                    {letter.toUpperCase()}
                </button>
            )
    })

    return (
        <section className="alphabets">
            {keyboardElements}
        </section>
    )
}