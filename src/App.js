import './styles/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MovieCard from './component/MovieCard';
import Description from './component/Description'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact  path="/" element={<MovieCard/>}/>
          <Route path="/description/:id" element={<Description/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
