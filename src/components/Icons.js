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
       <div style={{marginRight: '50px'}}><AiOutlineHome /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div style={{marginRight: '50px'}}><BsBuildingAdd /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div style={{marginRight: '50px'}}><BsBuildingAdd /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div style={{marginRight: '50px'}}><GoHome /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div style={{marginRight: '50px'}}><BiBuildingHouse /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div style={{marginRight: '50px'}}><TbBuildingCircus /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div style={{marginRight: '50px'}}><TbBuildingCottage /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div style={{marginRight: '50px'}}><RiBuildingLine /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div style={{marginRight: '50px'}}><TbBuildingCastle /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div style={{marginRight: '50px'}}><BsBuilding /><p style={{fontSize: '10px', marginLeft: '10px'}}>Home</p></div>
       <div style={{marginRight: '50px'}}><TbBuildingCottage /><p style={{fontSize: '10px'}}>Home</p></div>
       <div style={{marginRight: '50px'}}><RiBuildingLine /><p style={{fontSize: '10px'}}>Home</p></div>
       <div style={{marginRight: '50px'}}><TbBuildingCastle /><p style={{fontSize: '10px'}}>Home</p></div>
       <div style={{marginRight: '50px'}}><BsBuilding /><p style={{fontSize: '10px'}}>Home</p></div>
      </div>
    </>
  )
}

export default Icons;
