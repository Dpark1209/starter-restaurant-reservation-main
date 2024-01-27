import React from "react";
import { useHistory, Link } from "react-router-dom";
import { cancelReservation } from "../../utils/api";

export default function ReservationRow({ reservation, cancelRes }) {
  const handleCancel() = (reservation_id) => {
    const controller = new AbortController();
    const result = window.confirm("Do you really want to change this?");
    if (result) {
      cancelReservation(reservation_id, controller.signal).then(() => history.push("/"));
    }
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
        <button
                      type="button"
                      className="btn btn-danger mx-2 text-white"
                      data-reservation-id-cancel={reservation.reservation_id}
                      value={reservation.reservation_id}
                      onClick={handleCancel}
                    >
                      Cancel
          </button>
        </td>
    </tr>
  );
}