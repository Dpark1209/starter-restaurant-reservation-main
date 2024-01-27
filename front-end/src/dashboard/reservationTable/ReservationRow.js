import React from "react";

export default function ReservationRow({ reservation, cancelRes }) {
  function handleCancel() {
    return window.confirm(
      "Do you want to cancel this reservation? This cannot be undone."
    )
      ? cancelRes(reservation)
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
        {reservation.status === "booked" ? (
          <Link to={`/reservations/${reservation.reservation_id}/seat`}>
            <button>Seat</button>
          </Link>
        ) : null}
      </td>
      <td>
      <Link to={`/reservations/${reservation.reservation_id}/edit`}>
            <button>Edit</button>
          </Link>
      </td>
      <td data-reservation-id-cancel={reservation.reservation_id}>
        {reservation.status === "booked" ? 
          <button onClick={ ()=> handleCancel(reservation.reservation_id)}> Cancel</button>
          :
          <></>
        }
      </td>
    </tr>
  );
}