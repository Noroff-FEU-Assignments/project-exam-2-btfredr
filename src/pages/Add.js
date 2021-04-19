import { useParams, useHistory } from "react-router-dom";
import useAxios from "../utils/useAxios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "../utils/schemas";
import Heading from "../components/Heading";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Add = () => {
  const [hotel, setHotel] = useState(null);
  const { id } = useParams();
  const http = useAxios();
  const history = useHistory();

  const productPath = BASE_URL + "/hotels";

  const [submitting, setSubmitting] = useState(false);
  const [postError, setPostError] = useState(null);
  const [success, setSuccess] = useState(null);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(productSchema),
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setPostError(null);
    console.log(data);
    try {
      const response = await http.post(productPath, data);
      console.log(response);
      setHotel(response.data);
      setSuccess(true);
    } catch (error) {
      console.log("error", error);
      setPostError(error.toString());
    } finally {
      setSubmitting(false);
      history.push("/hotels");
    }
  };

  useEffect(() => {
    const getHotel = async () => {
      try {
        const response = await http.get(`${productPath}/${id}`);
        console.log(response);
        setHotel(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getHotel();
  }, [id]);

  return (
    <>
      <Navigation />
      <div className="container">
        <Heading title="Add new establishment" />
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {postError && <p>{postError}</p>}
          <fieldset disabled={submitting}>
            <div>
              <label>Name</label>
              <input name="name" placeholder="Name" ref={register} />
              {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div>
              <label>Price</label>
              <input
                name="price"
                placeholder="Price"
                ref={register}
                type="number"
              />
              {errors.price && <p>{errors.price.message}</p>}
            </div>
            <div>
              <label>Description</label>
              <textarea
                name="description"
                placeholder="Description"
                ref={register}
                type="text"
              />
              {errors.description && <p>{errors.description.message}</p>}
            </div>
            <div>
              <label>Image URL</label>
              <input
                name="image_url"
                placeholder="Image URL"
                ref={register}
                type="text"
              />
              {errors.image_url && <p>{errors.image_url.message}</p>}
            </div>

            <div>
              <label>Slug</label>
              <input
                name="slug"
                placeholder="Slug"
                ref={register}
                type="text"
              />
              {errors.slug && <p>{errors.slug.message}</p>}
            </div>

            <div>
              <label>Capacity</label>
              <input
                name="capacity"
                placeholder="Capacity"
                ref={register}
                type="number"
              />
              {errors.capacity && <p>{errors.capacity.message}</p>}
            </div>

            <div>
              <label>Featured</label>
              <input
                className="form__checkbox"
                name="featured"
                ref={register}
                type="checkbox"
              />
              {errors.featured && <p>{errors.featured.message}</p>}
            </div>

            <button type="submit" className="form__btn">
              {submitting ? "Adding ..." : "Add"}
            </button>
          </fieldset>
        </form>
        {success ? <p>Listing of {hotel.name} was added</p> : null}
      </div>

      <Footer />
    </>
  );
};

export default Add;