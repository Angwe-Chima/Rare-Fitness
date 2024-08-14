import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios.js";
import "./classDetails.css";
import time from "../../images/time.png";
import language from "../../images/worldwide.png";
import star from "../../images/star.png";
import clock from "../../images/clock.png";
import coach from "../../images/coach.png";

function ClassDetailsCardio() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios
      .get(`/classes/66b939c7ef6010e43f2a69b0/subclasses/${id}`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the course details!", error);
      });
  }, [id]);

  if (!course) return <p>Loading...</p>;

  return (
    <div className="classDetail">
      <div className="class_left">
        <div className="classDetTop">
          <h2>{course.title}</h2>
        </div>
        <div className="class_description">
          <h3>Description</h3>
          <p>{course.description}</p>
        </div>
        <div className="learningOutComes">
          <h3>Learning Outcomes</h3>
          {course.learningOutcomes.map((item, idx) => (
            <p key={idx}>{item.outcome}</p>
          ))}
        </div>
        <div className="classReviews">
          <h3>Course Reviews</h3>
          {course.reviews.map((item, idx) => (
            <div key={idx}>
              <p>{item.user}</p>
              <p>{item.comment}</p>
            </div>
          ))}
        </div>

        <button className="course_btn">Apply</button>
      </div>

      <div className="class_right">
        <div className="classDetImgDiv">
          <img src={course.image} alt="" />
        </div>
        <div className="instructure">
          {course.instructors.map((item, idx) => (
            <div key={idx} className="info">
              <img src={coach} alt="" />
              <p> {item.name}</p>
            </div>
          ))}
        </div>
        <div className="class_duration info">
          <img src={time} alt="time icon" />
        <span>{course.duration}</span>
        </div>
        <div className="class_time info">
          <img src={clock} alt="" />
          <span>{course.time}</span>
        </div>

        <div className="curriculum">
          {course.curriculum.map((item, idx) => (
            <details key={idx}>
              <summary>Week {item.week}</summary>
              <p>{item.content}</p>
            </details>
          ))}
        </div>
        <div className="language info">
          <img src={star} alt="" />
          <p>{course.rating}</p>
        </div>
        <div className="language info">
          <img src={language} alt="" />
          <p> {course.language}</p>
        </div>
      </div>
    </div>
  );
}

export default ClassDetailsCardio;
