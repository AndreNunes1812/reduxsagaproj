const INITIAL_STATE = {
  data: [],
  isFetching: false,
  error: false
};

const ip = (state = INITIAL_STATE, action) => {
  console.log(" action.type:", action.type);
  if (action.type === "LOAD_DATA_REQUEST") {
    console.log("dentro:", action.type);
    return {
      isFetching: true,
      data: [],
      error: false
    };
  }
  if (action.type === "LOAD_DATA_SUCCESS") {
    return {
      isFetching: false,
      data: action.data,
      error: false
    };
  }
  if (action.type === "LOAD_DATA_FAILURE") {
    return {
      isFetching: false,
      data: [],
      error: true
    };
  }
  return state;
};

export default ip;
