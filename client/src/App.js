import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Header from './components/Header';

function App() {
  return (
    
    <BrowserRouter>
      <Header></Header>
      <main className="container">
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/createpost" exact Component={CreatePost} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
