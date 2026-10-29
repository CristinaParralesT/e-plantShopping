
function AboutUs({ onGetStarted }) {
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="eyebrow">BRING NATURE HOME</p>
        <h1>Find your little piece of green.</h1>
        <p>
          At Paradise Nursery, we believe every home deserves a little
          nature. Discover beautiful indoor plants for every space and
          lifestyle.
        </p>
        <button className="primary-button" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </main>
  );
}

export default AboutUs;
