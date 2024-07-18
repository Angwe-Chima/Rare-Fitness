import "./classes.css";
// import image from "../../images/background3.jpg";
import CoursesData from "./courses/CoursesData";
import { Link } from "react-router-dom";

const Classes = () => {
  return (
    <div className="classes">
      <div className="classBanner">
        <h1>Get Registered And Start Classes</h1>
      </div>

      <section>
        <h2>Classes</h2>
        <div className="class-cards">
          {CoursesData.map((element, idx) => (
            <Link to={`/classes/${element.urlTitle.toLowerCase()}`} key={idx} className="card">
              <img src={element.courseImg} alt={element.urlTitle} />
              <p>{element.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Classes;
