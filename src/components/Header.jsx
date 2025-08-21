export default function Header(props){
    return (
        <header>
                <h1>Assembly: Endgame</h1>
                <p>
                    Guess the word in under {props.numGuessesLeft} attempts 
                    to keep the programming world safe from Assembly!
                </p>
        </header>
    )
}