import "./about.css";
import hiit from "../../images/hiit.jpeg";
import profile from "../../images/shop-banner.png";

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
          <img src={hiit} alt="image hiit" />
        </div>
      </section>

      <section className="our_team">
        <h2>Team Bio</h2>

        <div className="teamDiv">
          <div className="teamCard">
            <img src={profile} alt="" />
            <div className="teamDetails">
              <div>
                <h4>Angwe Destiny</h4>
                <p>
                  <span>Software Developer and Backend</span>
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  distinctio error itaque similique quos tenetur facilis
                  voluptate iure quam corrupti temporibus eius inventore in
                  molestias, labore necessitatibus impedit. Quas, non!
                </p>
              </div>
            </div>
          </div>
          <div className="teamCard">
            <img src={profile} alt="" />
            <div className="teamDetails">
              <div>
                <h4>Abubakar Abbas</h4>
                <p>
                  <span> Software Developer and Frontend </span>
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  distinctio error itaque similique quos tenetur facilis
                  voluptate iure quam corrupti temporibus eius inventore in
                  molestias, labore necessitatibus impedit. Quas, non!
                </p>
              </div>
            </div>
          </div>
          <div className="teamCard">
            <img src={profile} alt="" />
            <div className="teamDetails">
              <div>
                <h4>Itama Nsikak</h4>
                <p>
                  <span>UI UX Designer and Graphics</span>
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  distinctio error itaque similique quos tenetur facilis
                  voluptate iure quam corrupti temporibus eius inventore in
                  molestias, labore necessitatibus impedit. Quas, non!
                </p>
              </div>
            </div>
          </div>
          <div className="teamCard">
            <img src={profile} alt="" />
            <div className="teamDetails">
              <div>
                <h4>Oluchi Oluchi</h4>
                <p>
                  <span>Developer and UI UX Designer</span>
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                  distinctio error itaque similique quos tenetur facilis
                  voluptate iure quam corrupti temporibus eius inventore in
                  molestias, labore necessitatibus impedit. Quas, non!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
