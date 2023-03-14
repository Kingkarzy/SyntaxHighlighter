import React from 'react';
import SyntaxHighlighter from './SyntaxHighlit';

function App() {
  return (
    <div className="container">
      <h1>Syntax Highlighter</h1>
      <SyntaxHighlighter />
      <style jsx>{`
        *{ 
          margin:0; 
          padding:0
        }
          .container { 
            text-align:center;
            background: linear-gradient(to bottom, #1A237E, #0D47A1) ;
            color: white;
           }
        `}
        </style>
    </div>  
  );
}

export default App;
