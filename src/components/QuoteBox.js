import React from "react";
import "../App.css";
import quotes from "../quotes.json";

const QuoteBox = ({ colorGlobal, phraseAndAuthor }) => {
    console.log(quotes[phraseAndAuthor].quote, " ", phraseAndAuthor);
    console.log(quotes[phraseAndAuthor].author, " ", phraseAndAuthor);
    return (
        <>
            <p style={{ color: colorGlobal }}>{quotes[phraseAndAuthor].quote}</p>

            <h4 className="author" style={{ color: colorGlobal }}>
                {quotes[phraseAndAuthor].author}
            </h4>
        </>
    );
};

export default QuoteBox;
