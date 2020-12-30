import { fetch } from "./csrf.js";

const SET_ALL_BANDS = "bands/setBands";

// Action creator that produces object
const setBands = (bands) => {
    return {
        type: SET_ALL_BANDS,
        bands: bands,
    };
};
// Action creator that produces a function
// thunk action
export const fetchAllBands = () => {
    return async (dispatch) => {
        // You interact with your server.
        const response = await fetch("/api/bands");
        dispatch(
            setBands(response.data.bands)
        );
    };
};

const initialState = [];

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_ALL_BANDS:
      newState = action.bands;
      return newState;
    default:
      return state;
  }
}

export default reducer;
