import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import Favorites from './pages/Favorites/Favorites'
import Home  from './pages/Home/Home'
import configStore from './redux/store'
import './App.css';

function App() {
  const store = configStore();
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
