import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import InfoSuperHero from './Pages/InfoSuperHero';

const App = () => {
  return (
    <div className="p-8 text-blue-200">
      <div>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/superheroe/:id" element={<InfoSuperHero/>}/>
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
};

export default App;