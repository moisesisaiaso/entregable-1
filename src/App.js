import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import QuoteBox from "./components/QuoteBox";
import Button from "./components/Button";
import quotes from "./quotes.json";

const getRandom = () => Math.floor(Math.random() * quotes.length);
function App() {
    const colors = ["aqua", "#b4baf3", "goldenrod", "mediumspringgreen", "#e37c56"];
    const [color, setColor] = useState(0);

    const [phraseAndAuthor, setPhraseAndAuthor] = useState(getRandom);
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: colors[color] }}>
                <div className="card">
                    <QuoteBox colorGlobal={colors[color]} phraseAndAuthor={phraseAndAuthor} />
                    <Button
                        arrayColors={colors}
                        color={color}
                        setColor={setColor}
                        setPhraseAndAuthor={setPhraseAndAuthor}
                    />
                </div>
            </header>
        </div>
    );
}

export default App;
