import { AiOutlineHome } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { BsBuildingAdd } from "react-icons/bs";
import { BiBuildingHouse } from "react-icons/bi";
import { TbBuildingCircus } from "react-icons/tb";
import { TbBuildingCottage } from "react-icons/tb";
import { RiBuildingLine} from "react-icons/ri";
import { TbBuildingCastle } from "react-icons/tb";
import { BsBuilding } from "react-icons/bs";
import classes from './Icons.module.css'



const Icons = () => {
  return(
    <>
      <div className={classes.icons}>
       <div className={classes.icon}><AiOutlineHome /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div className={classes.icon}><BsBuildingAdd /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div className={classes.icon}><BsBuildingAdd /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div className={classes.icon}><GoHome /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div className={classes.icon}><BiBuildingHouse /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div className={classes.icon}><TbBuildingCircus /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div className={classes.icon}><TbBuildingCottage /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div className={classes.icon}><RiBuildingLine /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div className={classes.icon}><TbBuildingCastle /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div className={classes.icon}><BsBuilding /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div className={classes.icon}><TbBuildingCottage /><p style={{fontSize: '10px'}}>Home</p></div>
       <div className={classes.icon}><RiBuildingLine /><p style={{fontSize: '10px'}}>Home</p></div>
       <div className={classes.icon}><TbBuildingCastle /><p style={{fontSize: '10px'}}>Home</p></div>
       <div className={classes.icon}><BsBuilding /><p style={{fontSize: '10px'}}>Home</p></div>
      </div>


    </>
  )
}

export default Icons;
