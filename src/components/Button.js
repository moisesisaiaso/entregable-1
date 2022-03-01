import React from "react";
import "../App.css";
import quotes from "../quotes.json";

const getRandom = () => Math.floor(Math.random() * quotes.length);
const button = ({ arrayColors, color, setColor, setPhraseAndAuthor }) => {
    const changeColor = () => {
        if (color < arrayColors.length - 1) {
            //el problema surgia por que al ejecutarse la función del evento no había como evaluar la variable de incremento ya que no sabemos su valor actual, por eso con los estados se soluciona

            setColor(color + 1);
        } else {
            setColor(0);
        }

        const random = getRandom();
        setPhraseAndAuthor(random);
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
