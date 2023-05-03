import { Link } from "react-router-dom";
// import Icons from './Icons';
import classes from './Header.module.css';
import logo from '../logom.png'


const Header = () => {
  return (
     <>
     <div className={classes.sticky}>
    <div className={classes.navbar}>
      <div className={classes.imageLogo}>
        <Link to=''><img src={logo} alt='Logo' height='100px' width='100px'style={{marginTop: '20px', marginLeft: '20px'}} /></Link>
      </div>
      <div className={classes.bar}>
        <div class="place">
          <p>Location</p>
          <input type="text" placeholder="Where are you going?" />
        </div>
        <div className={classes.checkin}>
              <p>Check in</p>
          <input type="text" placeholder="Add dates" />
        </div>
        <div className={classes.checkout}>
              <p>Check out</p>
          <input type="text" placeholder="Add dates" />
        </div>

      </div>

  </div><hr style={{marginTop: '25px'}}/>
  {/* <Icons /> */}

 </div>


    </>
  )





}
export default Header;
