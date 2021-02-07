const ADD_PATIENT = "ADD_PATIENT";

export function addPatient(patient) {
  //send to backend to add to DB & text user
  console.log("action", patient);
  return function(dispatch) {
    dispatch({ type: ADD_PATIENT, patient });
  }
}
