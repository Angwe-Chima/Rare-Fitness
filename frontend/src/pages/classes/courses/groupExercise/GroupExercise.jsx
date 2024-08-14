import { useEffect, useState } from 'react';
import axios from '../../../../api/axios.js';
import './groupExercise.css';
import time from '../../../../images/time.svg';

function GroupExercise() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/classes/66b939fcef6010e43f2a69b8/subclasses')
      .then(response => {
        setCourses(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="groupExercise subClass">
      <div className='groupExerciseDiv'>
        <div>
          <h2>Group Exercise</h2>
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
                <a href={`/group-class-details/${course._id}`}>Class Details</a>
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

export default GroupExercise;
