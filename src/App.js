import logo from './logo.svg';
import './App.css';
import balon from '../src/imagenes/balon.png'
import copa from '../src/imagenes/copa.png'

function App() {
  return (
    <div className=" app sm:flex flex-col justify-center items-center  w-screen h-screen bg-cover">
      <div className="flex flex-col justify-between items-center py-6 jus w-2/4 bg-white  h-full my-6">
        <div className="box">
          <img src={balon} className='w-40' alt="" />
        </div>
        <div className="flex flex-col items-center w-9/12">
          <button className='btn'>AboutMe</button>
          <button className='btn'>Briefcase</button>
          <button className='btn'>Projects</button>
        </div>
        <div className="box flex flex-col items-center">
          <img src={copa} className='w-40' />
          <p className='text-cyan-600 font-bold'>@Sebastian Cepeda</p>
        </div>
      </div>
    </div>
  );
}

export default App;
