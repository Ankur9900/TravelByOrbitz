import styles from "./FeaturedOffers.module.css";

function FeaturedOffers() {
  return (
    <div className={styles.FeaturedOffers}>
      <div className={styles.featuredImgBox}>
        <img
          src="https://forever.travel-assets.com/flex/flexmanager/images/2020/09/28/desktop.jpg"
          alt="feature_img"
        />
        <img src="https://tpc.googlesyndication.com/simgad/2468637394072322380" alt="ads_img" />
      </div>
      <div>
        <h2>Explore local getaways</h2>
        <p>Get out and explore, and stay close to home with a road trip.</p>
      </div>
    </div>
  );
}

export default FeaturedOffers;
