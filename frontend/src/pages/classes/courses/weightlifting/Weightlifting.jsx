import { useEffect, useState } from 'react';
import axios from '../../../../api/axios.js';
import './weightlifting.css';
import time from '../../../../images/time.svg';

function Weightlifting() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/classes/66b939d3ef6010e43f2a69b2/subclasses')
      .then(response => {
        setCourses(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="weightLift subClass">
      <div className='weightLiftDiv'>
        <div>
          <h2>Weight Lifting</h2>
          <p>
            Have fun swimming in the refreshing waters of euphoria and choke
            your friends with laughter as they drown in confusion.
          </p>
        </div>
      </div>
      <section>
        <h2>Sub-Classes</h2>
        <div className="classDiv">
          {courses.map(course => (
            <div className="card" key={course.id}>
              <div className="classImgDiv" style={{ backgroundImage: `url(${course.image || 'default-image.jpg'})` }}>
                {/* <img src={course.image} alt={course.name} /> */}
              </div>
              <div className="classDetDiv">
                <div className="classTop">
                  <h2>{course.title}</h2>
                  <div className="time">
                    <span>{course.duration}</span>
                    <img src={time} alt="time icon" />
                  </div>
                </div>
                <div className="classMid">
                  <p>{course.description}</p>
                </div>
                <div className="classBtm">
                <a href={`/weight-class-details/${course._id}`}>Class Details</a>
                  <p>RareFit</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Weightlifting;
