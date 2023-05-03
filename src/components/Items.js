import classes from './Items.module.css'
import { Link } from "react-router-dom";
import Icons from './Icons'


const Items = (props) => {
  return (
      <div style={{marginBottom: '50px'}}>
        <div style={{position: 'sticky', top:'146.5px'}}><Icons /></div>
        {props.items.map(item => {
          return (
            <div className={classes.container} key = {item.id}>
              <Link to={`product/${item.id}`} style={{ textDecoration: 'none' }}>
              <div className={classes.item}>
                <img src={item.image[0]} alt="house " />
              </div>
              <div className={classes.info}>
                <h4>Location: {item.location}</h4>
                <h5>Price: {item.price} €/day</h5>
              </div></Link>

          </div>
          )
        })}

      </div>
  )
}

export default Items;
