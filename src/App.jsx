import {useState} from "react"
import { languages } from "./dataConfig/languages" 
import { getRandomWord } from "./utils"
import Confetti from "react-confetti"

import Header from "./components/Header"
import GameStatus from "./components/GameStatus"
import LanguageChips from "./components/LanguageChips"
import WordDisplay from "./components/WordDisplay"
import AccessibilityStatus from "./components/AccessibilityStatus"
import Keyboard from "./components/Keyboard"

import "./App.css"

export default function App (){
    // State values
    const [secretWord, setSecretWord] = useState( () => getRandomWord())
    const [guessedLetters, setGuessedLetters] = useState([])

    // Derived values
    const numGuessesLeft = languages.length - 1
    const wrongGuessCount = guessedLetters
        .filter(letter=>!secretWord.includes(letter)).length
    const isGameLost = wrongGuessCount >= numGuessesLeft 
    const isGameWon = secretWord.split('').every(
        (letter => guessedLetters.includes(letter))
    )
    
    const isGameOver = isGameLost || isGameWon
    const lastGuessedLetter = guessedLetters[guessedLetters.length-1]
    const isLastGuessedIncorrect = lastGuessedLetter && !secretWord.includes(lastGuessedLetter)

    function addGuessedLetter(letter){
        
        setGuessedLetters(prevLetters=>{
            return (
                prevLetters.includes(letter) ?
                prevLetters :
                [...prevLetters, letter]
            )
        })
    }

    function startNewGame(){
        setSecretWord(getRandomWord)
        setGuessedLetters([])
    }
    
    return (

        <main>
            {isGameWon && <Confetti recycle={false} numberOfPieces={2000} />}
            <Header numGuessesLeft = {numGuessesLeft} />
            <GameStatus 
                isGameLost = {isGameLost} 
                isGameOver = {isGameOver} 
                isGameWon = {isGameWon}
                isLastGuessedIncorrect = {isLastGuessedIncorrect}
                wrongGuessCount = {wrongGuessCount}
                languages = {languages}
            />
            <LanguageChips
                languages = {languages}
                wrongGuessCount = {wrongGuessCount} 
            />
            
            <WordDisplay
                secretWord = {secretWord}
                guessedLetters = {guessedLetters}
                isGameLost = {isGameLost}
            />
            
            {/* Combined visually-hidden aria-live region for status updates */}
            <AccessibilityStatus 
                secretWord={secretWord}
                guessedLetters={guessedLetters}
                numGuessesLeft={numGuessesLeft}
            />
            
            <Keyboard
                guessedLetters={guessedLetters}
                secretWord={secretWord}
                isGameOver={isGameOver}
                onGuess={addGuessedLetter}
            />
            
            {isGameOver && 
            <button className="new-game" 
                onClick={startNewGame}
            >
                New Game
            </button>}
        </main>
    )
}