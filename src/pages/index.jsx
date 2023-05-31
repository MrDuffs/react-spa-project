import { Route, Routes } from 'react-router-dom';
import Main from './main';
import AboutMe from './about-me';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  );
}

export default App;
