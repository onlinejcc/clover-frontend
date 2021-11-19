import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Navigation } from './components';
import { Home, Login } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path ="/" element={<Navigation component={<Home />} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
