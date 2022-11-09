import styles from "./WhatsNew.module.css";

function WhatsNew() {
  return (
    <div className={styles.whatsnew}>
      <h1>What's New</h1>
      <div className={styles.division}>
        <div className={styles.divone}>
            <div className={styles.imgbox1}>
                <img src="https://tpc.googlesyndication.com/simgad/5321417196171032542?" alt="img1" />
            </div>
            <div>
                <h2>Sunny days, flexible stays</h2>
                <p>You've waited a long time for this! Book your next trip now with free cancellation options.</p>
            </div>
        </div>
        <div className={styles.divtwo}>
            <div className={styles.imgbox2}>
                <img src="https://forever.travel-assets.com/flex/flexmanager/images/2022/03/31/ORB_LGBTQ_2MenRunning_img_300x300_20220222.jpg?impolicy=fcrop&w=300&h=300&q=mediumHigh" alt="img2" />
            </div>
            <div>
                <h2>Travel as You Are</h2>
                <p>Find LGBTQ-welcoming hotels, travel ideas, Pride events, and more.</p>
            </div>
        </div>
        <div className={styles.divthree}>
            <div className={styles.imgbox3}>
                <img src="https://forever.travel-assets.com/flex/flexmanager/images/2021/08/23/ORB_MQ-TS_HU_164x152.jpg?impolicy=fcrop&w=300&h=300&q=mediumHigh" alt="img3" />
            </div>
            <div>
                <h2>Hotels Under $99</h2>
                <p>Choose from our inventory of select hotels all priced for $99 or less per night!</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsNew;
