import React from "react";
import { useHistory, Link } from "react-router-dom";
import { cancelReservation } from "../../utils/api";

export default function ReservationRow({ reservation, cancelRes }) {
  function handleCancel() {
    return window.confirm(
      "Do you want to cancel this reservation? This cannot be undone."
    )
      ? cancelReservation(reservation)
      : null;
  }

  return (
    <tr>
      <th scope="row">{reservation.reservation_id}</th>
      <td>{reservation.first_name}</td>
      <td>{reservation.last_name}</td>
      <td>{reservation.mobile_number}</td>
      <td>{reservation.people}</td>
      <td>{reservation.reservation_time}</td>
      <td data-reservation-id-status={reservation.reservation_id}>
        {reservation.status}
      </td>
      <td>
          {reservation.status === 'booked' ?
          <Link to={`/reservations/${reservation.reservation_id}/seat`}>
            <button className="btn btn-primary "> Seat </button>
          </Link>
          :
          <></>
          }
        </td>
        <td>
          {reservation.status === 'booked' ?
          <Link to={`/reservations/${reservation.reservation_id}/edit`}>
            <button className="btn btn-primary "> Edit </button>
          </Link>
          :
          <></>
          }
        </td>
        <td>
        <button type="button" onClick={() => history.goBack()}>Cancel</button>
        </td>
    </tr>
  );
}