import Navbar from './components/Navbar';
import Card from './components/card';
import data from './data';
import './App.css';

const App = () => {
  return (
    <div className='container'>
      <Navbar />
      {data.map((el) => (
        <Card key={el.id} {...el} />
      ))}
    </div>
  );
};

export default App;
