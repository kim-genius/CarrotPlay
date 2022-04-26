import { signInWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import SignIn from "../../components/templates/SignIn";
import { auth } from "../../firebase";
import { regEmail } from "../../utils/dataUtils";

interface Values {
  email: string;
  password: string;
}

const SignInScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const signInUser = (data: Values, setErrors: any) => {
    const { email, password } = data;
    console.log(data);

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
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log("Success", res);
        })
        .catch((err) => {
          setErrors({
            errorMsg: "이메일과 비밀번호를 확인해주세요.",
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return <SignIn isLoading={isLoading} signInUser={signInUser} />;
};

export default SignInScreen;
