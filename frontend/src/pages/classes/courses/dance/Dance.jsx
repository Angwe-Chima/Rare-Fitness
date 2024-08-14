import { useEffect, useState } from 'react';
import axios from '../../../../api/axios.js';
import './dance.css';
import time from '../../../../images/time.svg';

function Dance() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/classes/66b939dfef6010e43f2a69b4/subclasses')
      .then(response => {
        setCourses(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="dance subClass">
      <div className='danceDiv'>
        <div>
          <h2>Dances</h2>
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
                <a href={`/dance-class-details/${course._id}`}>Class Details</a>
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

export default Dance;
