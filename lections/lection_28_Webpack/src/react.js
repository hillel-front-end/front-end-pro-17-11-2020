import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return (
    <div>Hello from React</div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
