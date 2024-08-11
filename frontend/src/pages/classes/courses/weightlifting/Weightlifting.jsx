import './weightlifting.css'
import time from "../../../../images/time.svg";
import WeightLiftingData from './WeightLiftingData.jsx'

function Weightlifting() {
  return (
    <div className="weightLift subClass">
    <div className='weightLiftDiv'>
      <div>
        <h2>Weight Lifting</h2>
        <p>
          Have fun smimming in the refreshing waters of euphoria and choke
          your friends with laughter as they drown in confusion
        </p>
      </div>
    </div>
    <section>
      <h2>Sub-Classes</h2>
      <div className="classDiv">

      {WeightLiftingData.map(course => (
            <div className="card" key={course.id}>
              <div className="classImgDiv" style={{ backgroundImage: `url(${course.image})` }}>
                {/* <img src={course.image} alt={course.name} /> */}
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

export default Weightlifting