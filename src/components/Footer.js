import classes from './Footer.module.css'

const Footer = () => {
  return (
    <div style={{backgroundColor: '#F0F0F0', height: '60vh'}}><hr />
      <div className={classes.footer}>
        <div className="footer-links">
          <h6>Support</h6>
          <p>Help centre</p>
          <p>Supporting people with disabilities</p>
          <p>Cancellation options</p>
        </div>
        <div>
          <h6>Community</h6>
          <p>Combating discrimination</p>
        </div>
        <div>
          <h6>Hosting</h6>
          <p>Explore hosting resources</p>
          <p>Visit our community forum</p>
          <p>How to host responsibly</p>
        </div>

        <div>
          <h6>Airbnb clone</h6>
          <p>Newsroom</p>
          <p>Learn about new features</p>
          <p>Letter from our founders</p>
          <p>Investors</p>
          <p>Gift cards</p>
        </div>
      </div><hr style={{margin: '50px'}}/>
      <div className={classes.footerLast}>
        <div>© 2023 Airbnb clone, Inc.</div>
        <div>·Privacidad</div>
        <div>·Condiciones</div>
        <div>·Mapa del sitio</div>
        <div>·Datos de la empresa</div>
      </div>
    </div>
  )
}

export default Footer;
