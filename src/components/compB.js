import PropTypes from "prop-types";
import {connect} from 'react-redux';

function CompB( {input} ) {
  return(
    <div>
      <h3>{input.str}</h3>
    </div>
  );
}

CompB.propTypes = {
  input: PropTypes.object.isRequired
}

const mapStateToProps= state => ({
  input: state.input
})

export default connect(mapStateToProps)(CompB);