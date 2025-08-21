export default function AccessibilityStatus({secretWord, guessedLetters, numGuessesLeft}){
    
    const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
    
    if (!lastGuessedLetter) return null
    
    return (
        <section 
            className="sr-only"
            aria-live="polite"
            role="status"
        >
            <p>
                {
                    secretWord.includes(lastGuessedLetter) ?
                    `Correct! The letter ${lastGuessedLetter} is in the word.`:
                    `Oops!! The letter ${lastGuessedLetter} is not in the word.`
                }
                You have {numGuessesLeft} attempts left.
            </p>
            <p>Current word:
                {secretWord.split('').map(letter => (
                    guessedLetters.includes(letter) ?
                    letter + "." : "blank."
                ) 
                ).join(" ")}
            </p>
        </section>
    )
}