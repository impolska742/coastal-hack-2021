import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Quotegenerator.css";
const QuoteGenerator = () => {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });

  const getQuotes = () => {
    axios
      .get("https://type.fit/api/quotes")
      .then((res) => setQuotes(res.data))
      .catch((err) => console.log(err));

    if (quotes.length > 0) {
      setQuotes(quotes[Math.floor(Math.random() * quotes.length - 1)]);
    }
  };

  const getRandomQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length - 1)];
    setQuote(randomQuote);
    console.log(randomQuote);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="quote-gen-wrapper">
      <div className="quote-generator">
        <button className="btn" onClick={getRandomQuote}>
          Random Quote !!
        </button>

        <h1 className="quote">{quote.text}</h1>
        <p className="author">
          {quote.author === null ? "Anonymous" : quote.author}
        </p>
      </div>
    </div>
  );
};

export default QuoteGenerator;
