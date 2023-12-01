import styled from "styled-components";
import { Wrap } from "../../components/Wrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 60px;

  @media screen and (max-width: 1050px) {
    font-size: 36px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 799px) {
    font-size: 32px;
    margin-bottom: 30px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  > div {
    position: relative;
  }
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  font-size: 18px;
  padding: 15px 30px;
  width: 480px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.3);
  margin-bottom: 15px;

  &::placeholder {
    color: #ababab;
  }
  &:focus {
    box-shadow: 0 0 0 1px white;
  }

  @media screen and (max-width: 1050px) {
    font-size: 16px;
    padding: 10px 25px;
    width: 360px;
    margin-bottom: 13px;
  }
  @media screen and (max-width: 799px) {
    font-size: 14px;
    width: 280px;
    margin-bottom: 10px;
  }
`;

const BtnWrap = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;

  > a {
    display: flex;
    justify-content: center;
    color: #0c002f;
    padding: 15px 0;
    width: 230px;
    background-color: white;
    border-radius: 30px;
  }

  @media screen and (max-width: 1050px) {
    margin-top: 10px;
    font-size: 16px;

    > a {
      padding: 10px 0;
      width: 175px;
    }
  }
  @media screen and (max-width: 799px) {
    font-size: 14px;
    flex-direction: column;

    > a {
      padding: 10px 0;
      width: 280px;
    }
  }
`;

const LoginBtn = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  color: #0c002f;
  padding: 15px 0;
  width: 230px;
  background-color: ${(props) =>
    props.$isValid ? "white" : "rgba(255, 255, 255, 0.3)"};
  border-radius: 30px;
  cursor: ${(props) => (props.$isValid ? "pointer" : "not-allowed")};

  @media screen and (max-width: 1050px) {
    padding: 10px 0;
    width: 175px;
  }
  @media screen and (max-width: 799px) {
    padding: 10px 0;
    width: 280px;
    margin-bottom: 10px;
  }
`;

const ErrorM = styled.p`
  font-size: 14px;
  color: salmon;
  position: absolute;
  bottom: 0;
  left: 30px;

  @media screen and (max-width: 1050px) {
    font-size: 12px;
    bottom: 0px;
  }
  @media screen and (max-width: 799px) {
    font-size: 10px;
    bottom: 0px;
    left: 25px;
  }
`;

export const Login = () => {
  const [errorText, setErrorText] = useState();

  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
  } = useForm();

  const loginHandler = (data) => {
    const { user, password } = data;
    const userId = localStorage.getItem("id");
    const userPassword = localStorage.getItem("password");
    reset({ user: "", password: "" });
    if (userId === user && userPassword === password) {
      localStorage.setItem("login", true);
      window.location.replace("/");
    } else {
      setErrorText("아이디 또는 비밀번호가 틀렸습니다.");
    }
  };

  const idError = errors?.user?.message;
  const passwordError = errors?.password?.message;

  return (
    <Wrap>
      <LoginWrap>
        <Title>로그인</Title>
        <Form onSubmit={handleSubmit(loginHandler)}>
          <div>
            <Input
              {...register("user", {
                required: "아이디를 입력하세요",
                minLength: {
                  value: 4,
                },
              })}
              type="text"
              placeholder="아이디를 입력하세요"
              autoComplete="off"
            />
            <ErrorM $top={55} $left={30}>
              {idError}
            </ErrorM>
          </div>
          <div>
            <Input
              {...register("password", {
                required: "비밀번호를 입력하세요",
                minLength: {
                  value: 6,
                },
              })}
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
            {passwordError ? (
              <>
                <ErrorM>{passwordError}</ErrorM>
              </>
            ) : (
              <>
                <ErrorM>{errorText}</ErrorM>
              </>
            )}
          </div>
          <BtnWrap>
            <LoginBtn $isValid={isValid}>로그인</LoginBtn>
            <Link to={"/signUp"}>회원가입</Link>
          </BtnWrap>
        </Form>
      </LoginWrap>
    </Wrap>
  );
};
