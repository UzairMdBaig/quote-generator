import './App.css';
import React, {useState} from 'react';

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }

  const shareTo = (e)=>{
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert(`Shared ${e.target.innerHTML.slice(6,)}!!`)
  }

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={shareTo} className="btn">Share on Whatsapp</button>
          <button onClick={shareTo} className="btn">Share on facebook</button>
          <button onClick={shareTo} className="btn">Share on linkedin</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
      </div>
    </>
  )

}


export default App;
