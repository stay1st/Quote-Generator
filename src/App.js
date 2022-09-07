import React, { useState } from 'react';
import "./index.css";



export default function AuthorQuoteKeyPair() {

/* declaring a constant 'authorQuotes' equal to an object of key:value pairs
in order to map keys and values into two seperate arrays to render to the DOM*/
  const authorQuotes = {
    'Rocky Balboa': "The world ain’t all sunshine and rainbows. It’s a very mean and nasty place, and I don’t care how tough you are, it will beat you to your knees and keep you there permanently if you let it. You, me, or nobody is gonna hit as hard as life. But it ain’t about how hard you hit. It’s about how hard you can get hit and keep moving forward; how much you can take and keep moving forward. That’s how winning is done!...",
    'Henry Ford': "Whether You Think You Can, or Think You Can’t … You’re Right",
    'Walter Disney': "Whatever you do, do it well. Do it so well that when people see you do it they will want to come back and see you do it again and they will want to bring others and show them how well you do what you do.",
    'Thomas Edison': "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
    'Jim Carey': "You can fail at what you don't want, so you might as well take a chance on doing what you love.",
    'Art Williams': "All you can do, is all you can do, but all you can do is enough!"
  }

  const authors = Object.keys(authorQuotes).map(key => key);
  const quotes = Object.values(authorQuotes).map(key => key);

  const [author, setAuthor] = useState(['The Generator']);
/* declaring a constant 'quote' to local state for testing changes to state in
the definition of handleClick*/
  const [quote, setQuote] = useState(['Click the "New-Quote" button to start!']);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('Click the "New-Quote" button to start!');
  const [count, setCount] = useState(0);


  const handleClick = () => {

    let newCount = count < 5 ? count + 1 : count - 5
    setCount(newCount);

    if (count === 0) {
      setAuthor(authors[0]);
      setQuote(quotes[0]);
      console.log('handleClick () quote if:', quote)    // logging 'quote' in state
      console.log('handleClick () author if:', author)  //logging 'author' to check state
    } else {
      setAuthor(authors[count]);
      setQuote(quotes[count]);
      console.log('handleClick () quote else:', quote)
      console.log('handleClick () author else:', author)
    }

    let i = 0;
    let addText = '';

    function myLoop() {

      setLoading(true);

      setTimeout(function () {
        addText += quotes[count][i];
        setText(addText);
        i++;
        if (i < quotes[count].length) {
          myLoop();
        } else {
          clearTimeout();
          setLoading(false);
        }
      }, 100);
    }
    myLoop();
  };


  return (
    <div id='quote-box' style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <h1>QUOTE GENERATOR</h1>
      <blockquote id='text'>{text}</blockquote>
      <h4 id='author'>{author}</h4>
      <button disabled={loading} onClick={handleClick} id='new-quote'>NEW QUOTE</button>
      <div id="div-social-icons">
        <a id="tweet-quote" href="twitter.com/intent/tweet">
          <button id="social-icon">
            <i className="fa-brands fa-twitter"></i>
          </button>
        </a>
        <div id="divider" />
        <a id="tumblr-quote" href="#">
          <button id="social-icon">
            <i className="fa-brands fa-tumblr"></i>
          </button>
        </a>
      </div>
      <p id="the-maker">developed by JoshuaCrawford</p>
    </div>
  );
};