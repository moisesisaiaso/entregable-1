import React from "react";
import "../App.css";

const button = ({
    arrayColors,
    color,
    setColor,
    arrayQuotes,
    phraseAndAuthor,
    setPhraseAndAuthor,
}) => {
    const changeColor = () => {
        if (color < arrayColors.length - 1) {
            //el problema surgia por que al ejecutarse la función del evento no había como evaluar la variable de incremento ya que no sabemos su valor actual, por eso con los estados se soluciona

            setColor(color + 1);
        } else {
            setColor(0);
        }

        if (phraseAndAuthor < arrayQuotes.length - 1) {
            setPhraseAndAuthor(phraseAndAuthor + 1);
        } else {
            setPhraseAndAuthor(0);
        }
    };
    return (
        <>
            <button onClick={changeColor} style={{ backgroundColor: arrayColors[color] }}>
                push
            </button>
        </>
    );
};

export default button;
