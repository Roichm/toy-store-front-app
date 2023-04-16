import { useFormik } from "formik";
import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import Joi from "joi";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/auth.context";
import { Navigate, Link } from "react-router-dom";

const SignIn = () => {
  const [error, setError] = useState("");

  const { login: loginUser, user } = useAuth();
  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: formikValidateUsingJoi({
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(6).max(1024).required(),
    }),
    async onSubmit(values) {
      try {
        await loginUser(values);
        navigate("/my-orders");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  //   if (user) {
  //     return <Navigate to="/" />;
  //   }

  return (
    <>
      <div className="row justify-content-center ">
        <div className="col-6">
        <h4 className="my-5 text-center">התחבר</h4>
        <form onSubmit={form.handleSubmit} noValidate autoComplete="off">
        {error && <div className="alert alert-danger">{error}</div>}

        <Input
          type="email"
          name="email"
          label="כתובת אי מייל"
          required
          {...form.getFieldProps("email")}
          error={form.touched.email && form.errors.email}
        />

        <Input
          type="password"
          name="password"
          label="ססמא"
          required
          {...form.getFieldProps("password")}
          error={form.touched.password && form.errors.password}
        />

        <div className="d-grid mt-3">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary"
          >
            התחבר
          </button>
        </div>

        
        <div className="d-grid mt-3 justify-content-center">
          <Link
            className= "link" 
            to={`/signUp`}
          >
            צור חשבון חדש
          </Link>
        </div>
        
      </form>
          
        </div>
      </div>
      
    </>
  );
};

export default SignIn;
