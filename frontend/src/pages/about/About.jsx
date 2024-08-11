import "./about.css";
import vision from "../../images/vision.jpeg";
import mission from "../../images/mission.jpeg";
import chima from "../../images/chima.png";
import oluchi from "../../images/oluchi.jpeg";
import nsikak from "../../images/nsikak.png";
import abbas from "../../images/abbas1.png";
import Review from "../../components/reviewCarousel/Review";

function About() {
  return (
    <div className="about_page">
      <div className="image-container1">
        <div className="text-overlay ">
          <h3>About Us</h3>
          <p>
            Reach out to us with any questions or concerns you may have, and
            well
          </p>
        </div>
      </div>
      <section className="who-we-are">
          <h2>Who We Are</h2>
          <p>
          We are a passionate and committed community with a mission to empower people from all walks of life to move, feel, and live at their absolute best. No matter your age, ability, or background, we believe that everyone deserves the opportunity to reach their full potential. Through our platform, we don't just provide resources; we cultivate a vibrant culture that celebrates inclusivity, fuels motivation, and injects a sense of joy into every step of the journey. We are driven by the belief that by fostering these values, we can help everyone lead a healthier, more fulfilling, and happier life. Our goal is to inspire and support each individual in unlocking their true potential and embracing the best version of themselves.
          </p>
      </section>
      <section className="mission">
        <div className="left">
          <h2>Our Mission</h2>
          <p>
            We aim to help people move, feel, and live their best, regardless of
            age, ability, or background. Through our platform, we strive to
            foster a culture of inclusivity, motivation, and fun, helping
            everyone unlock their full potential and live a healthier, happier
            life.
          </p>
        </div>
        <div className="rightt">
          <img src={mission} alt="image hiit" />
        </div>
      </section>

      <section className="vision">
        <div className="left">
          <h2>Our Vision</h2>
          <p>
          Our vision is to empower everyone, regardless of age, ability, or background, to move, feel, and live their best. We are committed to creating a platform that promotes inclusivity, inspiration, and enjoyment, guiding each individual to reach their full potential and embrace a healthier, more fulfilling life.
          </p>
        </div>
        <div className="rightt">
          <img src={vision} alt="image hiit" />
        </div>
      </section>

      <section className="our_team">
        <h2>Team Bio</h2>

        <div className="teamDiv">
          <div className="teamCard">
            <img src={chima} alt="" />
            <div className="teamDetails">
              <div>
                <h4>Angwe Destiny</h4>
                <p>
                  <span>
                    CEO of RareFit | Software Developer & Backend Specialist
                  </span>
                </p>
              </div>
              <div>
                <p>
                  Angwe Destiny is a passionate software developer with a focus
                  on backend development. As the CEO of RareFit, he leads the
                  way in creating innovative solutions that drive the platform's
                  success. With a keen eye for detail and a commitment to
                  excellence, Angwe is dedicated to building robust, scalable
                  systems that meet the needs of users and businesses alike.
                </p>
              </div>
            </div>
          </div>
          <div className="teamCard">
            <img src={abbas} alt="" />
            <div className="teamDetails">
              <div>
                <h4>Abubakar Abbas</h4>
                <p>
                  <span>
                    {" "}
                    COO of RareFit | Software Developer & Frontend Specialist
                  </span>
                </p>
              </div>
              <div>
                <p>
                  Abubakar Abbas is a skilled software developer with expertise
                  in frontend development. As the COO of RareFit, he plays a
                  pivotal role in ensuring the seamless operation and growth of
                  the platform. With a strong focus on user experience and
                  design, Abubakar is committed to delivering visually appealing
                  and highly functional interfaces that enhance user engagement
                  and satisfaction.
                </p>
              </div>
            </div>
          </div>
          <div className="teamCard">
            <img src={nsikak} alt="" />
            <div className="teamDetails">
              <div>
                <h4>Itama Nsikak</h4>
                <p>
                  <span>UI/UX Designer & Graphics Specialist</span>
                </p>
              </div>
              <div>
                <p>
                  Itama Nsikak is a talented UI/UX designer with a passion for
                  creating intuitive and visually compelling designs. His
                  expertise in graphics and user experience plays a crucial role
                  in shaping the look and feel of RareFit's platform. Itama's
                  creative approach and attention to detail ensure that every
                  user interaction is smooth, engaging, and visually striking,
                  making the digital experience both functional and
                  aesthetically pleasing.
                </p>
              </div>
            </div>
          </div>
          <div className="teamCard">
            <img src={oluchi} alt="" />
            <div className="teamDetails">
              <div>
                <h4>Oluchi Oluchi</h4>
                <p>
                  <span>Developer and UI UX Designer</span>
                </p>
              </div>
              <div>
                <p>
                  Oluchi Oluchi is a versatile developer and UI/UX designer who
                  brings a blend of technical skill and creative design to the
                  table. With a deep understanding of user-centered design
                  principles, she crafts interfaces that are not only visually
                  appealing but also highly functional. Oluchi's commitment to
                  excellence ensures that every project she touches enhances the
                  overall user experience, making digital interactions seamless
                  and enjoyable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        <Review/>
    </div>
  );
}

export default About;
