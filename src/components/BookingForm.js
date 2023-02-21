import {
    FormControl,
    FormLabel,
    Select,
    Input,
    FormErrorMessage} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import YellowButton from "./YellowButton";

function BookingForm(){
    const formik = useFormik({
        initialValues: {
          name:"",
          date:"",
          time:"17:00",
          numberOfGuests:"",
          occasion:"",
        },
        onSubmit: (values) => {
            console.log(values)
        },
    
        validationSchema: Yup.object({
          name:Yup.string().matches(/^[a-zA-Z ]*$/, "Please enter a valid name").required("Required"),
          date:Yup.date().required("Required"),
          time:Yup.mixed().required("Required"),
          numberOfGuests:Yup.string().matches(/^[0-9]+$/, "Please add numbers only.").max(10,"For a total of more than 10 guests kindly please contact us via phone.").required("Required"),
        }),
      });

    return(
        <form className="form" onSubmit={formik.handleSubmit}>
            <FormControl  isRequired isInvalid={!!formik.errors.name && formik.touched.name}>
                <FormLabel htmlFor="name">Enter Your Name</FormLabel>
                <Input value={formik.values.name} name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
            </FormControl>
            <br />
            <FormControl  isRequired isInvalid={formik.errors.date && formik.touched.date}>
                <FormLabel htmlFor="date">Choose Date</FormLabel>
                <Input type="date" value={formik.values.date} name="date" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            </FormControl>
            <br />
            <FormControl  isRequired isInvalid={formik.errors.time && formik.touched.time}>
                <FormLabel htmlFor="time">Choose Time</FormLabel>
                <Select value={formik.values.time} name="time" onChange={formik.handleChange} onBlur={formik.handleBlur} >
                    <option value="17">17:00</option>
                    <option value="18">18:00</option>
                    <option value="19">19:00</option>
                    <option value="20">20:00</option>
                    <option value="21">21:00</option>
                    <option value="22">22:00</option>
                </Select>
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
            </FormControl>
            <br />
            <FormControl  isRequired isInvalid={formik.errors.numberOfGuests && formik.touched.numberOfGuests}>
                <FormLabel htmlFor="numberOfGuests">Number of Guests</FormLabel>
                <Input value={formik.values.numberOfGuests} onChange={formik.handleChange} name="numberOfGuests" onBlur={formik.handleBlur} max={10} min={2} />
                <FormErrorMessage>{formik.errors.numberOfGuests}</FormErrorMessage>
            </FormControl>
            <br />
            <FormControl  isRequired isInvalid={formik.errors.occasion && formik.touched.occasion}>
                <Select value={formik.values.occasion} name="occasion" onChange={formik.handleChange} placeholder="Occasion">
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
            </FormControl>
            <YellowButton type="submit" text="Book the table" />
        </form>
    )
}

export default BookingForm;