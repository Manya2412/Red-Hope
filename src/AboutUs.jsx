import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <span className="about-subtitle">About Red Hope</span>

          <h1>Connecting Donors With Those in Need</h1>

          <p>
            At Red Hope, we are dedicated to making blood donation and blood
            discovery simpler, faster, and more accessible.
          </p>

          <p>
            Our platform helps donors maintain their donation information while
            helping recipients find hospitals and blood availability based on
            their requirements.
          </p>

          <p>
            By bringing donors, recipients, and hospitals together through
            technology, Red Hope aims to make the process more organized and
            transparent.
          </p>

          <div className="about-highlights">
            <div>
              <i className="fas fa-heart"></i>
              <h3>Every Drop Counts</h3>
              <p>Every donation can help someone in need.</p>
            </div>

            <div>
              <i className="fas fa-users"></i>
              <h3>Connected Community</h3>
              <p>Connecting donors and recipients through technology.</p>
            </div>

            <div>
              <i className="fas fa-hospital"></i>
              <h3>Hospital Access</h3>
              <p>Helping users locate relevant blood availability information.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;