import { Navigation } from './components';
import { Home } from './pages';

const App = () => {
  return (
    <div>
      <Navigation component={<Home />} />
    </div>
  );
};

export default App;
