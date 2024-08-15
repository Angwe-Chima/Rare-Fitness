import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../api/axios.js";
import "./classCourse.css";
import time from "../../../images/time.svg";
import { Link } from "react-router-dom";

function ClassCourse() {
  const [subClasses, setSubClasses] = useState([]);
  const [classes, setClasses] = useState({});
  const { _id } = useParams(); // Extracts class ID from URL

  useEffect(() => {
    // Fetch subclasses of a specific class
    axios
      .get(`/classes/${_id}/subclasses`)
      .then((response) => {
        setSubClasses(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching subclasses:", error);
      });
  }, [_id]);

  useEffect(() => {
    // Fetch details of a specific class
    axios
      .get(`/classes/${_id}`)
      .then((response) => {
        setClasses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching class data:", error);
      });
  }, [_id]);

  return (
    <div className="classCourse subClass">
      <div
        className="classCourseDiv"
        style={{ backgroundImage: `url(${classes.topImage})` }}
      >
        <div>
          <h2>{classes.title || "Loading..."}</h2>
          <p>{classes.description || "Loading..."}</p>
        </div>
      </div>
      <section>
        <h2>Sub-Classes</h2>
        <div className="classDiv">
          {subClasses.length ? (
            subClasses.map((course) => (
              <div className="card" key={course._id}>
                <div
                  className="classImgDiv"
                  style={{ backgroundImage: `url(${course.image})` }}
                ></div>
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
                    <Link to={`/classes/${_id}/subclasses/${course._id}`}>
                      Class Details
                    </Link>
                    <p>RareFit</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No sub-classes available...</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default ClassCourse;
