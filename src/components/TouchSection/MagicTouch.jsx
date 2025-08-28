import './MagicTouch.css';

const MagicTouch = () => {
    return (
        <section className="magic-touch">
            <div className="magic-touch-number">
                <h1>02</h1>
            </div>

            <div className="magic-touch-middle">
            <div className="images-container">
                                <div className="magic-touch-image-left">
                    <img src="/magictouchleft.png" alt="" className='left-img' />
                </div>

                <div className="magic-touch-image-right">
                    <img src="/magictouchright.png" alt="" className='right-img' />
                </div>

            </div>
            </div>


            <div className="magic-touch-bottom">
                <h3>Add your Magic Touch ✨</h3>
                <p>Make it truly special, write your messages, add images, record <br />audios, or attach a favorite tune, colors and a lot more. Craft a <br />greeting that feels unique for them.</p>
            </div>
      </section>
    );
};

export default MagicTouch;