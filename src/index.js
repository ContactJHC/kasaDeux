import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css';
import App from './App';
// import Footer from './components/footer/Footer';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
</style> 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Router>
      <Route exact path="http://localhost:3000">
        <App />
      </Route>
      <Route exact path='http://localhost:3000/location'>
        <Footer />
      </Route>
    </Router> */}

  </React.StrictMode>
);


