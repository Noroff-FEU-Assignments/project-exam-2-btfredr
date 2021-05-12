import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { enquirySchema } from "../utils/schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
// import CalculatePrice from "./CalculatePrice";

const BookingForm = ({ hotel }) => {
  const [submitting, setSubmitting] = useState(false);
  const [postError, setPostError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const enquiryPath = BASE_URL + "/enquiries";

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(enquirySchema),
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setPostError(null);
    console.log(data);
    try {
      const response = await axios.post(enquiryPath, data);
      console.log(response);
      setSuccess(true);
    } catch (error) {
      console.log("error", error);
      setPostError(error.toString());
    } finally {
      setSubmitting(false);
    }
  };

  let splitStartDate = startDate.split("-");
  let splitEndDate = endDate.split("-");

  let newStartDate = splitStartDate[0] + splitStartDate[1] + splitStartDate[2];

  let newEndDate = splitEndDate[0] + splitEndDate[1] + splitEndDate[2];

  let days = newEndDate - newStartDate;

  let total = days * hotel.price;
  return (
    <form className="bookingForm" onSubmit={handleSubmit(onSubmit)}>
      {postError && <p>{postError}</p>}
      <fieldset disabled={submitting}>
        <label>Name</label>
        <input
          type="string"
          name="name"
          ref={register}
          placeholder="Enter your full name..."
        />
        {errors.name && (
          <span className="form__error">{errors.name.message}</span>
        )}

        <label>Email</label>
        <input
          type="string"
          name="email"
          ref={register}
          placeholder="Enter your email..."
        />
        {errors.email && (
          <span className="form__error">{errors.email.message}</span>
        )}
        <div className="hotel__dates">
          <div className="hotel__dateContainer">
            <label>Check in</label>
            <input
              onChange={(e) => setStartDate(e.target.value)}
              type="date"
              name="startDate"
              ref={register}
            />
            {errors.startDate && (
              <span className="form__error">{errors.startDate.message}</span>
            )}
          </div>

          <div className="hotel__dateContainer">
            <label>Check out</label>
            <input
              onChange={(e) => setEndDate(e.target.value)}
              type="date"
              name="endDate"
              ref={register}
            />
            {errors.endDate && (
              <span className="form__error">{errors.endDate.message}</span>
            )}
          </div>
        </div>
        <label>Guests</label>
        <select name="capacity" ref={register}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
        {errors.capacity && (
          <span className="form__error">{errors.capacity.message}</span>
        )}
        {success ? (
          <p className="form__success">Your booking was confirmed!</p>
        ) : null}
        <button type="submit" className="form__btn">
          {submitting ? "Booking ..." : "Book"}
        </button>
        <label>Price</label>
        <p name="price">{hotel.price} NOK</p>
        <label>Total</label>
        {/* <CalculatePrice
          hotel={hotel}
          startDate={startDate}
          endDate={endDate}
          register={register}
        /> */}

        <input
          className="form__total"
          name="total"
          ref={register}
          value={total ? total : hotel.price}
        />
      </fieldset>
    </form>
  );
};

export default BookingForm;
