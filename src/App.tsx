import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Navigation } from './components';
import { Home, Login, Register } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Navigation component={<Home />} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
