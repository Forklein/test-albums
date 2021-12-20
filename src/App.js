import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const movies = await axios.get('https://jsonplaceholder.typicode.com/photos');
        setData(movies.data.slice(0, 20));
      } catch (error) {
        console.log(error)
      }
    }
    getMovies();
  }, []);




  return (
    <div className="App">
      {data.map(item => {
        return <img key={item.id} src={item.url} alt={item.title}></img>;
      })}
    </div>
  );
}

export default App;
