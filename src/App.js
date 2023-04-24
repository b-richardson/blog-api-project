import './App.css';
import Header from './Header';
import SearchNews from './SearchNews';




function App() {
  return (
    <div className="App">
          <Header />
          <div className='search-container'>
            <SearchNews />
          </div>
          


          <p>Brian Richardson</p>
    </div>
  );
}

export default App;
