import { Field, Form, Formik, FormikHelpers } from "formik";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

interface Values {
  email: string;
  password: string;
  errorMsg: string;
}

type SignInProps = {
  isLoading: boolean;
  signInUser: (data: Values, setErrors: any) => void;
};
const SignIn = ({ isLoading, signInUser }: SignInProps) => {
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
          signInUser(data, setErrors);
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
              로그인
            </button>
            <a href="/sign-up">아직 회원이 아니신가요? 지금 가입하세요!</a>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignIn;
