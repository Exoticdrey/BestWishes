import './Works.css';

const Works = () => {
    return (
        <section className="how-it-works">
            <div className="works-head">
                <div className="works-title">
                    <p>How it <u>Works</u></p>
                    <p className="works-title-subtext">
                        The simple <span className="blue-highlight">Steps</span> to turn your <br />thoughts into a <span className="blue-highlight">Memorable gifts</span><br />and heartfelt Card.
                    </p>
                </div>
                <div className="works-number">
                    <h1>01</h1>
                </div>
            </div>

            <div className="works-middle">
                <img src="/worksmiddle.png" alt="" />
            </div>

            <div className="works-bottom">
                <h2>Pick the Perfect Surprise</h2>
                <p>Explore a variety of cards and gifts, there is something for every <br />occasion and every loved one. Start by selecting a card or gift <br />that matches the person and the moment.</p>
            </div>
      </section>
    );
};

export default Works;