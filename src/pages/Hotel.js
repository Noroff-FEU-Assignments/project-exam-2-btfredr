import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Hotel = () => {
  const [hotel, setHotel] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();

  const { slug } = useParams();

  if (!slug) {
    history.push("/");
  }

  const url = BASE_URL + '/hotels/' + slug;

  useEffect(
      function () {
          async function
      }
  )
  return <div></div>;
};

export default Hotel;
