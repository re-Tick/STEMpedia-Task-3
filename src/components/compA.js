import inputChange from '../actions/input';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';

function CompA({inputChange}) {
function trigger(e){
  e.preventDefault();
  //console.log(e.target.value);
  inputChange(e.target.value);
  //props.inputChange()
}
  return(
    <div>
      <input type="text" onChange={(e) => trigger(e)} />
    </div>
  );
}

CompA.propTypes = {
  inputChange: PropTypes.func.isRequired,
}

export default connect(null, {inputChange})(CompA);