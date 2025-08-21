import clsx from "clsx"
export default function WordDisplay({secretWord, guessedLetters, isGameLost}){
    const letterElements = secretWord.split("").map((letter,ind)=>{
            
        const shouldRevealLetter = guessedLetters.includes(letter) || isGameLost
        const letterClasses = 
            clsx("letter", !guessedLetters.includes(letter) && isGameLost &&  "missed-letter")
        return (
        <span className = {letterClasses} key = {ind}>
            {
            shouldRevealLetter ?
            letter.toUpperCase() : ""
            }
        </span>
        )
    })
    
    return (
        <section className="word">
            {letterElements}
        </section>
    )
}