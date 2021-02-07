import React from "react";
import { useSelector } from "react-redux";

const WaitingList = () => {
  const { list } = useSelector(state => ({ list: state.list }));

  return (
    <div>
      <h2> Waiting List </h2>
      <h5> App will automatically text patient within top 5 slots </h5>
      <table>
        <thead>
          <tr>
            <th> Confirmation Number </th>
            <th> Phone Number </th>
            <th> Delete </th>
            <th> Text Patient </th>
          </tr>
        </thead>
        <tbody>
          { list.map (patient => (
            <tr>
              <th> {patient.confirmationNumber} </th>
              <th> {patient.phoneNumber} </th>
              <th> <button> Delete </button> </th>
              <th> <button> Text Patient </button></th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WaitingList;

// Hide this behind admin login
