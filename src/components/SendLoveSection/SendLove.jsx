import './SendLove.css';

const SendLove = () => {
    return (
        <section className="send-love">
            <div className="send-love-number">
                <h1>03</h1>
            </div>

            <div className="send-love-images">
                <div className="send-love-images-left">
                    <img src="/sendloveleft.png" alt="" className="img-left" />
                </div>
                <div className="send-love-images-middle">
                    <img src="/sendlovemiddle.png" alt="" className="img-middle" />
                </div>
                <div className="send-love-images-right">
                    <img src="/sendloveright.png" alt="" className="img-right" />
                </div>
            </div>

            <div className="send-love-bottom">
                <h3>Send it with Love 💌</h3>
                <p>Choosing instant delivery or schedule it for the perfect moment, <br />we will make sure it arraives with care. Whether it's now or later, <br />we will send your gifts and cards straight to their heart.</p>
            </div>
      </section>
    );
};

export default SendLove;