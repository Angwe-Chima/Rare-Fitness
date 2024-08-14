import { useState, useEffect } from "react";
import axios from "../../api/axios"; // Adjust the path according to your folder structure
import { Link } from "react-router-dom";
import "./classes.css";

const Classes = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('/classes'); 
        const fetchedCourses = response.data.data;

        if (Array.isArray(fetchedCourses)) {
          setCourses(fetchedCourses);
        } else {
          console.error('Expected an array of courses, but got:', fetchedCourses);
        }
      } catch (error) {
        console.error('Error fetching courses:', error);
        setError('Failed to load courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="loadingDiv"><h1>Loading...</h1></div>;
  }

  if (error) {
    return <div className="errorDiv"><h1>{error}</h1> <h3 >Check internet connection...</h3></div>;
  }

  return (
    <div className="classes">
      <div className="classBanner">
        <h1>Get Registered And Start Classes</h1>
      </div>

      <section>
        <h2>Classes</h2>
        <div className="class-cards">
          {courses.map((course, idx) => (
            <Link to={`/classes/${course.urlTitle.toLowerCase()}`} key={idx} className="card">
              <img src={course.courseImg} alt={course.urlTitle} />
              <p>{course.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Classes;
