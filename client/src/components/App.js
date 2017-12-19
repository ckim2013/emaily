// If a given file is exporting a class, or a react component of any type,
// be it a functional or class component, we will label the file with a
// capital letter. Otherwise, if the file returns a function or a series of
// function, we will label the file with lowercase.
import React from 'react';

const App = () => {
  return (
    <div>
      Hi There!
    </div>
  );
};

export default App;
