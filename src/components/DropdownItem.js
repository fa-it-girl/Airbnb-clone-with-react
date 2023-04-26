import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


const DropdownItem = () => {
  const options = [
  '1 guest', '2 guests', '3 guests', '4 guests'
];
const defaultOption = options[0]
 return(<Dropdown
  options={options}
  value={defaultOption}
  />
)
}

export default DropdownItem;
