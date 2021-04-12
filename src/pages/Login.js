import Navigation from "../components/Navigation";
import { loginSchema } from "../utils/schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BASE_URL, AUTH_PATH } from "../utils/constants";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navigation />
      Login
    </div>
  );
};

export default Login;
