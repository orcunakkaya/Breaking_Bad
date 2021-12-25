import './App.css';
import {
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';

  function App() {
    return (
      <HashRouter>
        <nav>
          <ul>
            <li>
              <Link translate="no" to="/">Breaking Bad</Link>
            </li>
            <div>
              <li>
                <Link to="/">Characters</Link>
              </li>
              <li>
                <Link to="/quotes">Quotes</Link>
              </li>
            </div>
          </ul>
        </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/char/:char_id" element={<Detail />} />
          <Route path="/quotes" element={<Quotes />}/>
          <Route path="/quotes/:quote_id" element={<QuoteDetail />} />
        </Routes>
      </div>
    </HashRouter>
    );
  }

export default App;