const initialState = {};

export default  (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE":{
      
      
      return {...state, str: action.payload};
    }
  
    default:
      return state;
  }
}