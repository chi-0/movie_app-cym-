import styled from "styled-components";
import { Wrap } from "../../components/Wrap";
import { Link, useResolvedPath } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 60px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
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
`;

const LoginBtn = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  color: #0c002f;
  padding: 15px 0;
  width: 230px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  cursor: not-allowed;
`;

export const Login = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors, isValid },
    reset,
  } = useForm();

  const loginHandler = (data) => {
    const { user, password } = data;
    localStorage.setItem("login", true);
    reset({ user: "", password: "" });
    window.location.replace("/");
  };

  return (
    <Wrap>
      <LoginWrap>
        <Title>로그인</Title>
        <Form onSubmit={handleSubmit(loginHandler)}>
          <Input
            {...register("user", { required: "아이디를 입력하세요" })}
            type="text"
            placeholder="아이디를 입력하세요"
            autoComplete="none"
          />
          <Input
            {...register("password", { required: "비밀번호를 입력하세요" })}
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
          <BtnWrap>
            <LoginBtn>로그인</LoginBtn>
            <Link to={"/sighUp"}>회원가입</Link>
          </BtnWrap>
        </Form>
      </LoginWrap>
    </Wrap>
  );
};
