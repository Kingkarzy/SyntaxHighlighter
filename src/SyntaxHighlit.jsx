// This syntax highlighter is built entirely with React, NextJS and without the use of any external libraries like HighlighJS .

import React, { useState } from 'react';

function SyntaxHighlighter() {
  const [code, setCode] = useState('');
    
  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const highlightCode = (code) => {
    const keywords = ['if', 'else', 'while', 'for', 'function', 'return'];
    const operators = ['+', '-', '*', '/', '=', '==', '!=', '>', '<', '>=', '<='];
    const punctuations = [';', ',', '.', '(', ')', '{', '}'];
    const comments = ['//', '/*'];

    // Split the code into tokens using regular expressions
    const tokens = code
      .split(/(\b|\B)/)
      .filter((token) => token.trim() !== ' ');
    // Classify each token based on its type
    return tokens.map((token, i) => {
      if (keywords.includes(token)) {
        return <span key={i} className="keyword" style={{color: 'red'}}>{token}</span>;
      } else if (operators.includes(token)) {
        return <span key={i} className="operator">{token}</span>;
      } else if (punctuations.includes(token)) {
        return <span key={i} className="punctuation">{token}</span>;
      } else if (comments.includes(token)) {
        return <span className="comment">{token}</span>;
      } else {
        return <span key={i} className="text">{token}</span>;
      }
    });
  };

  return (
    <div className='container'>
      <label htmlFor="code-input">Enter some code:</label>
      <br />
      <textarea id="code-input" value={code} onChange={handleCodeChange} />
      <br />
      <h4> MY RESULT </h4> 
      <br />
      <pre>
        {highlightCode(code)}
        <style jsx>{`
          .container{ padding: 2rem;  font-size: 1.1rem; width:auto; height:auto;}
          .keyword { color: red; }
          .operator { color: green; }
          .punctuation { color: blue; } 
          .comment { color: gray; }
          .text { color: white; }
          pre{
            width:50%;
            height:30vh;
            background: rgba(0, 0, 0, 0.5);
            margin:auto;
            text-align:left;
          }
          textarea{
            width: 50%;
            height:20vh;
            margin:10px;
          }
        `}
        </style>
      </pre>
    </div>
  );
}

export default SyntaxHighlighter;
