import { useFormik } from "formik";
import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import Joi from "joi";
import formikValidateUsingJoi from "../utils/formikValidateUsingJoi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/auth.context";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");

  const { createUser, user } = useAuth();
  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validate: formikValidateUsingJoi({
      firstName: Joi.string().min(2).max(255).required(),
      lastName: Joi.string().min(2).max(255).required(),
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(6).max(1024).required(),
      name: Joi.string().min(2).max(255).required(),
    }),
    async onSubmit(values) {
      try {
        await createUser({ ...values, admin: false });
        toast("Your account is ready! 🤘🏾");

        navigate("/sign-in");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="row justify-content-center ">
        <div className="col-6">
          <h4 className="my-5 text-center">פתח חשבון</h4>

          <form onSubmit={form.handleSubmit} noValidate autoComplete="off">
            {error && <div className="alert alert-danger">{error}</div>}

            <Input
              type="text"
              label="שם פרטי"
              required
              {...form.getFieldProps("firstName")}
              error={form.touched.firstName && form.errors.firstName}
            />

            <Input
              type="text"
              label="שם משפחה"
              required
              {...form.getFieldProps("lastName")}
              error={form.touched.lastName && form.errors.lastName}
            />

            <Input
              type="email"
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
                צור חשבון
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
