import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios.js";
import "./classDetails.css";
import time from "../../images/time.svg";

function ClassDetails() {
  const { classId, subclassId } = useParams(); 
  const [course, setCourse] = useState(null); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios
      .get(`/classes/${classId}/subclasses/${subclassId}`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        setError("There was an error fetching the course details.");
        console.error("There was an error fetching the course details!", error);
      });
  }, [classId, subclassId]); // The effect depends on both IDs

  // Display a loading message while the data is being fetched
  if (error) return <p>{error}</p>;
  if (!course) return <p>Loading...</p>;

  return (
    <div className="classDetail">
      <div className="class_left">
        <div className="classDetTop">
          <h2>{course.title || 'No Title'}</h2>
          <div className="classtime">
            <img src={time} alt="time icon" />
            <span>{course.time || 'No Time Information'}</span>
          </div>
        </div>

        {/* Course Description */}
        <div className="class_description">
          <h3>Description</h3>
          <p>{course.description || 'No Description Available'}</p>
        </div>

        {/* Learning Outcomes */}
        <div className="learningOutComes">
          <h3>Learning Outcomes</h3>
          {course.learningOutcomes && course.learningOutcomes.length ? (
            course.learningOutcomes.map((item, idx) => (
              <p key={idx}>{item.outcome || 'No Outcome Information'}</p>
            ))
          ) : (
            <p>No Learning Outcomes Available</p>
          )}
        </div>

        {/* Course Reviews */}
        <div className="classReviews">
          <h3>Course Reviews</h3>
          {course.reviews && course.reviews.length ? (
            course.reviews.map((item, idx) => (
              <div key={idx}>
                <p><strong>{item.user || 'Anonymous'}</strong></p>
                <p>{item.comment || 'No Comment'}</p>
              </div>
            ))
          ) : (
            <p>No Reviews Available</p>
          )}
        </div>

        <button className="course_btn">Apply</button>
      </div>

      <div className="class_right">
        {/* Course Image */}
        <div className="classDetImgDiv">
          <img src={course.image || 'default-image.jpg'} alt={`${course.title} image`} />
        </div>

        {/* Instructors */}
        <div className="instructure">
          <h3>Instructors</h3>
          {course.instructors && course.instructors.length ? (
            course.instructors.map((item, idx) => (
              <p key={idx}>{item.name || 'No Instructor Information'}</p>
            ))
          ) : (
            <p>No Instructors Available</p>
          )}
        </div>

        {/* Course Duration and Time */}
        <div className="class_duration">
          <span>Duration: {course.duration || 'No Duration Information'}</span>
        </div>
        <div className="class_time">
          <span>Time: {course.time || 'No Time Information'}</span>
        </div>

        {/* Curriculum Details */}
        <div className="curriculum">
          <h3>Curriculum</h3>
          {course.curriculum && course.curriculum.length ? (
            course.curriculum.map((item, idx) => (
              <details key={idx}>
                <summary>Week {item.week || 'N/A'}</summary>
                <p>{item.content || 'No Content'}</p>
              </details>
            ))
          ) : (
            <p>No Curriculum Information Available</p>
          )}
        </div>

        {/* Rating and Language */}
        <div className="rating">
          <span>Rating: {course.rating || 'No Rating Information'}</span>
        </div>
        <div className="language">
          <span>Language: {course.language || 'No Language Information'}</span>
        </div>
      </div>
    </div>
  );
}

export default ClassDetails;
