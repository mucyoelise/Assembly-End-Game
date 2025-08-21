import clsx from "clsx"
export default function LanguageChips({languages, wrongGuessCount}){
    
    const languageElements = languages.map((lang,ind)=>{
        const styles = {
            backgroundColor: lang.backgroundColor,
            color: lang.color
        }
        const isLangLost = wrongGuessCount > ind

        return (
            <span
                className = { clsx("chip", { lost: isLangLost }) }
                key = {lang.name}
                style = {styles}
            >
                {lang.name}
            </span>
        )
    })

    return (
        <section className="language-chips">
            {languageElements}
        </section>

    )
}