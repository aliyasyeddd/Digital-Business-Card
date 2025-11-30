import Profile from "../assets/Aliya.jpg";

const About = () => {
  return (
    <div>
      <img className="profile-pic" src={Profile} alt="Aliya Profile" />
      <h1 className="profile-name">Aliya Syed</h1>
      <p className="profile-role">Frontend Developer</p>
      <p className="profile-portfolio">aliyasyed.website</p>
      <div className="social-link-btns">
        <button className="email-btn">
          <i className="fa-solid fa-envelope"></i>
          Email
        </button>
        <button className="linkedin-btn">
          <i className="fa-brands fa-linkedin"></i>
          LinkedIn
        </button>
      </div>
    </div>
  );
};

export default About;
