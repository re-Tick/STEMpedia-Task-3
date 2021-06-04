
const inputChange = (data) => dispatch => {
  //console.log(data);
  dispatch({
    type: "CHANGE",
    payload: data
  });
};

export default inputChange