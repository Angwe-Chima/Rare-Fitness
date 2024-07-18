import "./home.css";
import heroImg from "../../images/guy-lady.png";
import dumbbell from "../../images/dumbbell.png";
import muscle from "../../images/muscle.png";
import gym from "../../images/gym.png";
import weightlifting from "../../images/weightlifting.png";
import backgroundAbout from "../../images/background2.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div>
          <h1>
            UNLEASH YOUR <span>POTENTIAL</span>
          </h1>
          <p>Experience the Rare Fitness difference</p>
          <a href="/classes">Get Started Today!</a>
        </div>
        <div className="heroImg-div">
          <img src={heroImg} alt="" />
        </div>
      </div>

      <section className="choose-us">
        <div className="card-title">
          <h2>Achieve Your Ideal Physique</h2>
        </div>
        <div className="cards">
          <div className="card">
            <img src={dumbbell} alt="Dumbbell" />
            <h3>Optimal Health</h3>
            <p>
              Experience personalized training tailored to your fitness goals.
              Our programs are designed to help you achieve a healthier,
              stronger you.
            </p>
          </div>
          <div className="card">
            <img src={weightlifting} alt="Weightlifting" />
            <h3>Weight Lifting</h3>
            <p>
              Push your limits with our state-of-the-art weightlifting
              equipment. Our expert trainers ensure you lift safely and
              effectively.
            </p>
          </div>
          <div className="card">
            <img src={gym} alt="Gym" />
            <h3>Certified Trainers</h3>
            <p>
              Benefit from one-on-one coaching sessions with our certified
              trainers. Get the guidance and motivation you need to succeed.
            </p>
          </div>
          <div className="card">
            <img src={muscle} alt="Muscle" />
            <h3>Shop Equipments</h3>
            <p>
              Achieve peak performance with our premium gym equipment. Quality
              gear for exceptional results.
            </p>
          </div>
        </div>
      </section>

      <section className="about-us">
        <div>
          <p>About Us</p>
          <h2>Empower Your Fitness Journey</h2>
          <p>
            At our gym, we are dedicated to helping you achieve your fitness
            goals. With a team of expert trainers and state-of-the-art
            facilities, we provide a supportive and motivating environment for
            all fitness levels. Our personalized programs are designed to
            enhance your strength, endurance, and overall well-being. Join us
            and transform your body, mind, and life.
          </p>
        </div>
        <div className="side-img">
          <img src={backgroundAbout} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Home;
