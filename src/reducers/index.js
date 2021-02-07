const initialState = {
  list: [],
};

export default function rootReducer(state = initialState, action) {
  if (action.type === "ADD_PATIENT") {
    return {
      ...state,
      list: [
        ...state.list,
        action.patient
      ]
    }
  }
  return state;
}
