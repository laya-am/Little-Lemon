import BookingForm from "./BookingForm";

function Reservations(){
    return(
        <div className="reservation-page">
        <div className="reserve-title">
        <h1>Book a Table</h1>
        </div>
            <BookingForm />
        </div>
    )
}

export default Reservations;