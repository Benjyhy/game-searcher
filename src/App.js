import React from 'react';
import { Route } from 'react-router-dom';

//components and pages
import Home from './pages/Home';
import Nav from './components/Nav';

//style and animation
import GlobalStyle from './components/GlobalStyle';

function App() {

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Route path={['/games/:id', '/']}>
        <Home />
      </Route>
    </div>
  );

}

export default App;
