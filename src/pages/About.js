import React from 'react';
import { Container, Row } from 'react-bootstrap';
import styles from '../styles/About.module.css';

function About() {
  return (
    <Container className={styles.Content}>
      <h2>
        <strong>Who We Are:</strong>
      </h2>
      <hr />
      <p>
      Home cooks are our heroes—it's as simple as that. Recipe Sharing Platform is a community built by and for kitchen experts:
      The cooks who will dedicate the weekend to a perfect beef bourguignon but love the simplicity of a slow-cooker rendition, too.
      The bakers who labor over a showstopping 9-layer cake but will just as happily doctor boxed brownies for a decadent weeknight dessert.
      The entertainers who just want a solid snack spread, without tons of dirty dishes at the end of the night.
      Most importantly, Recipe Sharing Platform connects home cooks with their greatest sources of inspiration — other home cooks.
      We're the world's leading digital food brand, and that inspires us to do everything possible to keep our community connected.
      Sixty-million home cooks deserve no less.
      </p>
      <p>
      Every day, cooks from around the world publish recipes and inspire one another through recipe photos, ratings, reviews, and videos.
      The combination of the Recipe Sharing Platform community with our team of kitchen professionals provides authority found nowhere else
      on the internet and has turned the brand into an indispensable resource for cooks of all skill levels.
      </p>
      <p>
      You can connect with us and our followers on social media, too. On TikTok, learn how you should store avocados or find out if air fryer
      coconut shrimp lives up to the hype. On Facebook, Pinterest, and Twitter, browse easy weeknight meals and scour reviews of the world's best
      air fryers. Find photo-worthy dinner inspiration on Instagram. And on YouTube, cook along with our chefs, who serve up creative, new recipes
      weekly — alongside a few good laughs thanks to their well-timed puns.
      </p>
      <br />
      <h2>
        <strong>Above all...we are:</strong>
      </h2>
      <p>
        <ul>
            <li><span>Friendly</span> We love trading ideas and hanging out with fellow home cooks.</li> 
            <li><span>Supportive</span> Struggling with dinner inspo? We're here to help!</li>
            <li><span>Creative</span> Cooking is an art. We like to experiment and express ourselves.</li>
            <li><span>Approachable</span> We don't judge—all cooking levels and recipes are welcome.</li> 
            <li><span>Down-to-Earth</span> We love good food, period. It doesn't need to be fussy to be great.</li>
            <li><span>Fun Like you</span> We enjoy friends, family, cooking, and having a good laugh.</li>
        </ul>
      </p>
      <br />
      <h2>
        <strong>Join Our Community:</strong>
      </h2>
      <p>
      The heart of Recipe Sharing Platform is our community of home cooks worldwide discovering recipes together,
      sharing their beloved family recipes, creating new recipes, and photographing, rating, and reviewing each other's
      recipes. Each week, more than 15 million registered members add more than 2,000 recipe ratings, 800 new recipe photos,
      and almost 200 new recipes to the site. And every minute of every day, 27 people are saving recipes they love or want to try later.
      </p>
      <p>
      We moderate every review and photograph added to a recipe. When leaving reviews, we ask that you remember that a fellow Recipe
      Sharing Platform community member has shared their recipe with you. Constructive feedback is always welcome, but rude, mean,
      disrespectful, or spammy comments are not welcome and will not be approved.
      </p>
      <br />
      <br />
      <h2>
        <strong>Tips for Submitting Your Recipe:</strong>
      </h2>
      <p>
      Take your go-to recipe from favorite to famous!
      Chances are you're reading this because you enjoy cooking and sharing food with others. Posting one of your own recipes on Recipe Sharing
      Platform is a great way to share your creations with a much larger crowd! Whether you improvise your way around the kitchen, tend to tweak
      ingredients to get the tastiest result, or follow steps methodically, a recipe is the common starting point. At Recipe Sharing Platform,
      we get thousands of recipe submissions every year. Here are some top tips to help your recipe stand out from the crowd and get published on
      the site for everyone to find, try, and review!
      </p>
      <p>
        <ul>
            <li><span>Title</span> Choose a clear title that tells the cook what to expect and includes search-friendly words. "Andouille and Chicken Creole Pasta" tells us more about the dish than "Mardi Gras Pasta." Since other cooks often search by ingredient, "Andouille and Chicken Creole Pasta" is more likely to pop up.</li> 
            <li><span>Description</span> Include a short but detailed sentence describing the dish that will get the cook excited and tell them what to expect.</li>
            <li><span>Ingredients</span> Include measurements, List ingredients in order, Include ingredient prep.</li>
            <li><span>Directions</span> Be descriptive, Include temperatures, Give pan size and type, Include doneness tips, </li> 
            <li><span>Photo</span> Snap a pic of your final dish to show everyone what it should look like and how appetizing it is!</li>
            <li><span>Fun Like you</span> We enjoy friends, family, cooking, and having a good laugh.</li>
        </ul>
      </p>
      <br />
      <h2>
        <strong>Share Your Recipe!</strong>
      </h2>
      <p>
        Now you're ready to share your recipe with the world! Log into your Recipe Sharing Platform account and visit the Add a Recipe page to get going!
      </p>
      <br />
      <h2>
        <strong>Find you next meal</strong>
      </h2>
      <p>
        Explore the community to discover your next favorite dish. Use the search suggestions or advanced filters to find exactly what you're
        craving most. Unsure of what you want to eat tonight? Plug in what's in your kitchen and let Recipe Sharing Platform do the rest!
      </p>
      <h2>
        <strong>Build your social cookbook by liking recipes on Recipe Sharing Platform!</strong>
      </h2>
      <br />
      <h2>
        <strong>Social Media:</strong>
      </h2>
      <hr />
      <Row className={styles.SocialIconsAlign}>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit our Facebook page (opens in a new tab)"
        >
          <i className="fa-brands fa-facebook-f" />
        </a>

        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit our Twitter page (opens in a new tab)"
        >
          <i className="fa-brands fa-twitter" />
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit our Instagram page (opens in a new tab)"
        >
          <i className="fa-brands fa-instagram" />
        </a>

        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit our YouTube page (opens in a new tab)"
        >
          <i className="fa-brands fa-youtube" />
        </a>

        <a
          href="https://pinterest.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit our Pinterest page (opens in a new tab)"
        >
          <i className="fa-brands fa-pinterest" />
        </a>

        <a
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit my Tiktok page (opens in a new tab)"
        >
          <i className="fa-brands fa-tiktok" />
        </a>
      </Row>
      <br />
      <p id={styles.Disclaimer}>
        <br />
        Project created for educational purposes only.
      </p>
    </Container>
  );
}

export default About;