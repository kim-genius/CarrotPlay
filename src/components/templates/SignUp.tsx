import { Field, Form, Formik } from "formik";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

interface Values {
  email: string;
  password: string;
  errorMsg: string;
}

type SignInProps = {
  isLoading: boolean;
  createUser: (data: Values, setErrors: any) => void;
};
const SignUp = ({ isLoading, createUser }: SignInProps) => {
  const { colors } = useContext(ThemeContext);
  return (
    <div className="login__body">
      <Formik
        initialValues={{
          email: "",
          password: "",
          errorMsg: "",
        }}
        onSubmit={(data: Values, { setErrors }) => {
          createUser(data, setErrors);
        }}
      >
        {({ errors }) => (
          <Form
            className="login__form"
            style={{
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Field id="email" name="email" placeholder="아이디 (이메일)" />
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호"
            />
            {errors.errorMsg && (
              <p style={{ color: colors.notification }}>{errors.errorMsg}</p>
            )}
            <button type="submit" disabled={isLoading}>
              회원가입
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
