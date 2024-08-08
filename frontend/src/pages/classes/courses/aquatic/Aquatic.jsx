import "./aquatic.css";
import time from "../../../../images/time.svg";
import AquaticData from '../aquatic/AquaticData';

function Aquatic() {
  return (
    <div className="aquatic subClass">
      <div className="aquaticDiv">
        <div>
          <h2>Aquatic</h2>
          <p>
            Have fun smimming in the refreshing waters of euphoria and choke
            your friends with laughter as they drown in confusion
          </p>
        </div>
      </div>
      <section>
        <h2>Sub-Classes</h2>
        <div className="classDiv">
          {AquaticData.map(course => (
            <div className="card" key={course.id}>
              <div className="classImgDiv" style={{ backgroundImage: `url(${course.image})` }}>

              </div>
              <div className="classDetDiv">
                <div className="classTop">
                  <h2>{course.name}</h2>
                  <div className="time">
                    <span>{course.length}</span>
                    <img src={time} alt="time icon" />
                  </div>
                </div>
                <div className="classMid">
                  <p>{course.description}</p>
                </div>
                <div className="classBtm">
                  <button>Coming Soon</button>
                  <p>play sports</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Aquatic;
