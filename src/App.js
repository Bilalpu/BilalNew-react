
import './App.css';

import Main from './Containers/MainYotubePage'
import ShortSection from './Containers/MainShortPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (

    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/shorts" element={<ShortSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
