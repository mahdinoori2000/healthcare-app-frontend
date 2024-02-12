import React from 'react';
import './delete.css';

function Delete() {
  return (
    <table className="delete-table">
      <tr className="table-head">
        <th>Doctor</th>
        <th>Name</th>
        <th>Action</th>
      </tr>
      <tr>
        <td>Doctor Image1</td>
        <td>Mayito Ismail</td>
        <td>
          <button type="button">Delete</button>
        </td>
      </tr>
      <tr>
        <td>Doctor Image2</td>
        <td>Lwanga Ismail</td>
        <td>
          <button type="button">Delete</button>
        </td>
      </tr>
    </table>
  );
}

export default Delete;
