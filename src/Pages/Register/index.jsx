import { Field, Form, Formik, ErrorMessage } from "formik";
import Button from "../../Components/Button";
import { registerValidation } from "./validation";
export default function index() {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="flex flex-col items-center gap-2 justify-center h-80">
      <h1 className="text-4xl font-bold mb-7  text-rose-800">Welcome</h1>
      <Formik
        initialValues={{  username: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={registerValidation}
      >
        <Form className="flex flex-col gap-4 md:w-96">
          <Field
            className="outline-0 border focus:border-2 border-gray-300 focus:border-rose-500 rounded-lg py-1 px-2 "
            name="username"
            type="text"
            placeholder="Username"
          />
           <ErrorMessage
            name="username"
            component={"p"}
            className="text-red-700 font-bold"
          />
          <Field
            className="outline-0 border focus:border-2 border-gray-300 focus:border-rose-500 rounded-lg py-1 px-2 "
            name="email"
            type="email"
            placeholder="Email"   
          />
          <ErrorMessage
            className="text-red-700 font-bold"
            name="email"
            component={"p"}
          />
          <Field
            className="outline-0 border focus:border-2 border-gray-300 focus:border-rose-500 rounded-lg py-1 px-2"
            name="password"
            type="password"
            placeholder="Password"
          />
          <ErrorMessage
            className="text-red-700 font-bold"
            name="password"
            component={"p"}
          />
          <Button style="w-full" type="submit">
            Register
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
