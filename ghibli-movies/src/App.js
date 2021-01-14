import FilmList from './components/filmList'
import Film from './components/film'
import NavBar from './components/nav-bar'
import './App.css'
function App() {
  return (
    <div className="App">
      <NavBar />
      <FilmList/>
      <Film />
    </div>
  );
}

export default App;
