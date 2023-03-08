import {
    FormControl,
    FormLabel,
    Select,
    Input,
    FormErrorMessage} from "@chakra-ui/react";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import YellowButton from "./YellowButton";
import {fetchAPI, submitAPI} from "./Data";
import {useNavigate} from "react-router-dom";
// import AvailableTimes from "./AvailableTimes";

function BookingForm(){
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
          name:"",
          date:"",
          time:[],
          numberOfGuests:"",
          occasion:"",
        },
        onSubmit: (values) => {
            const result= submitAPI(values);
            if(result){
                (()=>{navigate("/confirmedBooking")})();
            }
        },
    
        validationSchema: Yup.object({
          name:Yup.string().matches(/^[a-zA-Z ]*$/, "Please enter a valid name").required("Required"),
          date:Yup.date().required("Required"),
          time:Yup.mixed().required("Required"),
          numberOfGuests:Yup.number().min(1,"Please enter a valid number.").max(10,"For a total of more than 10 guests kindly please contact us via phone.").required("Required"),
        }),
    });


    const selectedDate= formik.values.date;

      useEffect(() => {
        const formattedDate = new Date(selectedDate);
        formik.setFieldValue('time', fetchAPI(formattedDate));
      }, [selectedDate]);


    return(

        <form className="form" onSubmit={formik.handleSubmit}>
            <FormControl  isRequired isInvalid={!!formik.errors.name && formik.touched.name}>
                <FormLabel htmlFor="name">Enter Your Name</FormLabel>
                <Input value={formik.values.name} name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>
            <br />
            <FormControl isRequired isInvalid={formik.errors.date && formik.touched.date}>
                <FormLabel htmlFor="date">Choose Date</FormLabel>
                <Input type="date" value={formik.values.date} name="date" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>
            <br />
            <FormControl isRequired isInvalid={formik.errors.time && formik.touched.time}>
                <FormLabel htmlFor="time">Choose Time</FormLabel>
                <Select name="time" value={formik.values.time?.[0]} onChange={formik.handleChange} >
                {(formik.values.time).map(time=>(
                <option key={time} value={time}>{time}</option>
                ))}
                </Select>
            </FormControl>
            <br />
            <FormControl  isRequired isInvalid={formik.errors.numberOfGuests && formik.touched.numberOfGuests}>
                <FormLabel htmlFor="numberOfGuests">Number of Guests</FormLabel>
                <Input value={formik.values.numberOfGuests} onChange={formik.handleChange} name="numberOfGuests" onBlur={formik.handleBlur} max={10} min={2} />
                <FormErrorMessage>{formik.errors.numberOfGuests}</FormErrorMessage>
            </FormControl>
            <br />
            <FormControl isInvalid={formik.errors.occasion && formik.touched.occasion}>
            <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select value={formik.values.occasion} name="occasion" onChange={formik.handleChange} placeholder="Occasion">
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
            </FormControl>
            <YellowButton text="Book the table" />
        </form>
        // </Formik>
    )
}

export default BookingForm;