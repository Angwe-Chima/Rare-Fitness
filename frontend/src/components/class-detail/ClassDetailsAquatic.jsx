import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios.js";
import "./classDetails.css";
import time from "../../images/time.svg";

function ClassDetailsAquatic() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios
      .get(`/classes/66b94bbc74dfa5b4eed41f73/subclasses/${id}`)
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
          <div className="classtime">
            <img src={time} alt="time icon" />
          </div>
        </div>
        <div className="class_description">
          <h3>Description</h3>
          <p>{course.description}</p>
        </div>
        <div className="learningOutComes">
          <h3>Learning Outcomes</h3>
        {course.learningOutcomes.map((item, idx) => (
            <p key={idx}>Instructors: {item.outcome}</p>
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
            <p key={idx}>Instructors: {item.name}</p>
          ))}
        </div>
        <div className="class_duration">
        <span>Duration: {course.duration}</span>
        </div>
        <div className="class_time">
        <span>Time: {course.time}</span>
        </div>
     
        <div className="curriculum">
          {course.curriculum.map((item, idx) => (
            <details key={idx}>
              <summary>Week {item.week}</summary>
              <p>{item.content}</p>
            </details>
          ))}
        </div>
        <div className="language">
         Rating: {course.rating}
        </div>
        <div className="language">
         Language: {course.language}
        </div>
      </div>
    </div>
  );
}

export default ClassDetailsAquatic;
