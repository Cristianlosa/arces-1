import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './components/Chat';
import HomeView from './views/HomeView';
import WhoView from './views/WhoView';

const NotFound = () => <div>Page not found</div>;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} exact />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeView />} exact />
          <Route path="/who" element={<WhoView />} exact />
          <Route path="*" element={<NotFound />} exact />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}


export default App;
