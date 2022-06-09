function Buttons({chosenWine}) {
    return (
        <div className="buttonsChosen">
            <button className="change" onClick={() => chosenWine("Франция")}>ФРАНЦУЗСКИЕ ВИНА</button>
            <button className="change" onClick={() => chosenWine("Италия")}>ИТАЛЬЯНСКИЕ ВИНА</button>
            <button className="change" onClick={() => chosenWine("Грузия")}>ГРУЗИНСКИЕ ВИНА</button>
            <button className="change" onClick={() => chosenWine("Россия")}>РОССИЙСКИЕ ВИНА</button>
        </div>
    )
}

export default Buttons;