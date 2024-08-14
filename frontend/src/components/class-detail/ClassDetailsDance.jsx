import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios.js';
import './classDetails.css';
import time from '../../images/time.svg';

function ClassDetailsDance() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);



  useEffect(() => {
      axios.get(`/classes/66b939dfef6010e43f2a69b4/subclasses/${id}`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the course details!', error);
      });
  }, [id]);

  if (!course) return <p>Loading...</p>;

  return (
    <div className="classDetails">
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
          <button>Enroll Now</button>
          <p>RareFit</p>
        </div>
      </div>
    </div>
  );
}

export default ClassDetailsDance;
