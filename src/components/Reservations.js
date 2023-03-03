import BookingForm from "./BookingForm";

function Reservations(){
    return(
        <div className="reservation-page">
            <h1> Reservation a Table</h1>
            <BookingForm />
        </div>
    )
}

export default Reservations;