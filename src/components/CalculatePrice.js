const CalculatePrice = ({ hotel, startDate, endDate }) => {
  let splitStartDate = startDate.split("-");
  let splitEndDate = endDate.split("-");

  let newStartDate = splitStartDate[0] + splitStartDate[1] + splitStartDate[2];

  let newEndDate = splitEndDate[0] + splitEndDate[1] + splitEndDate[2];

  let days = newEndDate - newStartDate;

  let total = days * hotel.price;

  return <p>{total ? total : hotel.price} NOK</p>;
};

export default CalculatePrice;
