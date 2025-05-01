import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Botones from './pages/Botones';
import Get from './pages/Get';
import Post from './pages/Post';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Botones />} />
          <Route path="/get" element={<Get />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;