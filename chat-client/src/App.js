import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './shared/Chat';
import Navbar from './shared/NavBar';
import HomeView from './views/HomeView';
import NotFound from './views/NotFound';
import WhoView from './views/WhoView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeView />} exact />
          <Route path="/chat" element={<Chat />} />
          <Route path="/who" element={<WhoView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
