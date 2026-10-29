function AboutUs({ onGetStarted }) {
  return (
    <div className="about-us-container">
      <section className="hero background-image">
        <div className="hero-content">
          <p className="eyebrow">BRING NATURE HOME</p>

          <h1>Find your little piece of green.</h1>

          <p>
            Welcome to Paradise Nursery, where we believe every
            home deserves the beauty and freshness of nature.
            We offer a variety of indoor plants for different
            spaces and lifestyles.
          </p>

          <p>
            Our mission is to help people create greener,
            healthier living spaces by providing beautiful
            plants and making plant shopping simple and enjoyable.
          </p>

          <button
            className="primary-button"
            onClick={onGetStarted}
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
