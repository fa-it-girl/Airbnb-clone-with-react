import { useParams } from "react-router-dom";
// import Calendar from "./Calendar";
import classes from './HomeDetails.module.css'
import ReservationForm from "./ReservationForm";

const HomeDetails = (props) => {

 const params = useParams();
 let item = props.items[params.id - 1]
          return <>
              <div>
                <div className={classes.detailsinfo}>
                  <h2>Location: {item.location}</h2>
                  <h4>Price: {item.price} € </h4>
                </div>
                <div className={classes.homeDetailImage}>
                  <img src={item.image[0]} alt="house " width="400" height="400" className={classes.imageDetail}/>
                  <img src={item.image[1]} alt="house " width="400" height="400" className={classes.imageDetail}/>
                 <img src={item.image[2]} alt="house " width="400" height="400" className={classes.imageDetail}/>

                </div>
              <div style={{display:'grid', gridTemplateColumns: '1fr 1fr'}}>
                 <div >
                  <div className={classes.description} style={{width: '400px', marginTop: '50px', marginLeft: '120px'}}>
                     <p>About: {item.description}</p>
                  </div>
                  <div style={{marginLeft: '120px', marginTop: '50px'}}>
                    <h3>What this place offer</h3>
                    <div className={classes.offers}>
                      <div style={{width: '200px'}}>
                        <p>Kitchen</p>
                        <p>Vineyard view</p>
                        <p>Vineyard view</p>
                        <p>Private pool </p>
                        <p>TV </p>
                      </div>
                      <div>
                        <p>Mountain view</p>
                        <p>Wifi</p>
                        <p>Free parking on premises</p>
                        <p>Pets allowed</p>

                      </div>
                  </div>

                </div>


                </div>
                <div style={{marginTop: '100px', marginLeft: '100px'}}>
                <ReservationForm />

               </div>
              </div>


              </div>


            </>
}
export default HomeDetails;
