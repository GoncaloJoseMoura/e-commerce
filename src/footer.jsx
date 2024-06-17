import classes from './footer.module.css';
import Github from './assets/github-mark-white.png';

function Footer() {
  return (
    <footer>
      <div className={classes.footerInfo}>
        <div>
          <p>About Us</p>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Architecto quaerat placeat possimus incidunt? Modi quibusdam id quo accusantium magnam
          </span>
        </div>
        <div className={classes.fContact}>
          <p>Contacts</p>
          <div>
            <span>
              Call:
              <a href="tel">+351 999 999 999</a>
            </span>
            <span>Open: 10am-10pm</span>
            <span>Adress: Av. de la Bourdonnais, 75007 Paris, France</span>
            <span>FAQ</span>
          </div>
        </div>
        <div className={classes.fSocial}>
          <p>Social</p>
          <div>
            <span><a href="#">Instagram</a></span>
            <span><a href="#">Tik Tok</a></span>
            <span><a href="#">Facebook</a></span>
          </div>
        </div>
        <div className={classes.fForm}>
          <form action="">
            <label htmlFor="email">
              Receive Promotions
            </label>
            <input type="email" name="email" id="email" placeholder="Email" />
            <button type="button">Subscribe</button>
          </form>
        </div>

      </div>

      <div className={classes.github}>
        <p>Developed by GoncaloJoseMoura</p>
        <a href="https://github.com/GoncaloJoseMoura/Restaurant-Page" target="_blank" rel="noopener noreferrer"><img src={Github} alt="Github Logo" /></a>
      </div>

    </footer>
  );
}

export default Footer;
