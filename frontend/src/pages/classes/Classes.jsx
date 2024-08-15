import { useState, useEffect } from "react";
import axios from "../../api/axios"; // Adjust the path according to your folder structure
import { Link } from "react-router-dom";
import "./classes.css";

const Classes = () => {
  const [courses, setCourses] = useState([]); // Initialize as an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/classes"); // Fetch all courses
        const fetchedCourses = response.data.data;

        if (Array.isArray(fetchedCourses)) {
          setCourses(fetchedCourses);
        } else {
          console.error("Expected an array of courses, but got:", fetchedCourses);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
        setError("Failed to load courses. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []); // Empty dependency array to run the effect only on mount

  if (loading) {
    return (
      <div className="loadingDiv">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="errorDiv">
        <h1>{error}</h1>
        <h3>Check your internet connection or try reloading the page.</h3>
      </div>
    );
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
            <Link
              to={`/classes/${course._id}`} // Dynamic route to course details
              key={idx}
              className="card"
            >
              <img
                src={course.courseImg || "default-placeholder.png"}
                alt={course.urlTitle || "Course Image"}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "default-placeholder.png"; // Fallback to a default image
                }}
              />
              <p>{course.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Classes;
