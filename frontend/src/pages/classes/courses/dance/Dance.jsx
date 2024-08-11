import './dance.css'

import time from "../../../../images/time.svg";
import DanceData from './DanceData.jsx'

function Dance() {
  return (
    <div className="dance subClass">
    <div className='danceDiv'>
      <div>
        <h2>Dances</h2>
        <p>
          Have fun smimming in the refreshing waters of euphoria and choke
          your friends with laughter as they drown in confusion
        </p>
      </div>
    </div>
    <section>
      <h2>Sub-Classes</h2>
      <div className="classDiv">

      {DanceData.map(course => (
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
                  <p>RareFit</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  </div>
  )
}


export default Dance