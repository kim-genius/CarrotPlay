import { useRef, useState } from "react";
import SignUp from "../../components/templates/SignUp";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { FormikHelpers } from "formik";
import { regEmail } from "../../utils/dataUtils";

interface Values {
  email: string;
  password: string;
}

const SignUpScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const createUser = (data: Values, setErrors: any) => {
    const { email, password } = data;

    setIsLoading(true);

    if (email === "" || password === "") {
      setErrors({
        errorMsg: "이메일과 비밀번호를 모두 입력해주세요.",
      });
      setIsLoading(false);
      return;
    }
    if (!regEmail(email)) {
      setErrors({
        errorMsg: "이메일이 유효하지 않습니다.",
      });
      setIsLoading(false);
      return;
    }

    if (!isLoading) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log("Success", res);
        })
        .catch((err) => {
          setErrors({
            errorMsg: "계정 생성을 실패했습니다.",
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return <SignUp isLoading={isLoading} createUser={createUser} />;
};

export default SignUpScreen;
