import './home.css'
import heroImg from '../../images/guy-lady.png';

const Home = () => {
  return (
    <div className="home">
      <div>
        <h1>UNLEASH YOUR <span>POTENTIAL</span></h1>
        <p>Experience the Rare Fitness difference</p>
        <button><a href="">Get Started Today!</a></button>
      </div>
      <div className='heroImg-div'>
        <img src={heroImg} alt="" />
      </div>
    </div>
  )
}

export default Home