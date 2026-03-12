import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Header from './components/Header';
import Error404 from './pages/Error404';
import Post from './pages/Post';
import EditPost from './pages/EditPost';

function App() {
  return (
    
    <BrowserRouter>
      <Header></Header>
      <main className="container">
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/createpost" exact Component={CreatePost} />
          <Route path="/post/:id" exact Component={Post} />
          <Route path="/editpost/:id" exact Component={EditPost} />
          
          <Route path="*" exact Component={Error404} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
