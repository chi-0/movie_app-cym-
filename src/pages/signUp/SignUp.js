import styled from "styled-components";
import { Wrap } from "../../components/Wrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { PageTitle } from "../../components/PageTitle";

const SignUpWrap = styled.div`
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
    margin-bottom: 10px;
  }
  @media screen and (max-width: 799px) {
    font-size: 14px;
    width: 280px;
    margin-bottom: 5px;
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

const SignUpBtn = styled.button`
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
    margin-bottom: 5px;
  }
`;

const ErrorM = styled.p`
  font-size: 14px;
  color: salmon;
  position: absolute;
  bottom: -1px;
  left: 30px;

  @media screen and (max-width: 1050px) {
    font-size: 12px;
    bottom: -3px;
    left: 25px;
  }
  @media screen and (max-width: 799px) {
    font-size: 10px;
    bottom: -5px;
    left: 20px;
  }
`;

export const SignUp = () => {
  const [isPassword, setIsPassword] = useState();
  const loginNav = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();

  const signUpHandler = (data) => {
    const { user, password, checkPassword } = data;
    const userCheckSpace = user.match(/\s/g);
    const passwordCheckSpace = password.match(/\s/g);
    const userCheckKorean = user.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/);
    const passwordCheckKorean = password.match(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/);

    if (userCheckSpace || passwordCheckSpace) {
      return setIsPassword("공백은 사용 할 수 없습니다.");
    } else if (userCheckKorean || passwordCheckKorean) {
      return setIsPassword("한글은 사용 할 수 없습니다.");
    }

    if (password === checkPassword) {
      localStorage.setItem("id", user);
      localStorage.setItem("password", password);
      loginNav("/login");
    } else {
      setIsPassword("비밀번호가 다릅니다.");
    }
  };

  return (
    <Wrap>
      <PageTitle title={"회원가입"} />
      <SignUpWrap>
        <Title>회원가입</Title>
        <Form onSubmit={handleSubmit(signUpHandler)}>
          <Input
            {...register("user", {
              required: "아이디를 입력하세요.",
              minLength: {
                value: 4,
                message: "아이디는 4자 이상입니다.",
              },
            })}
            type="text"
            placeholder="아이디를 입력하세요 (4자리 이상)"
            autoComplete="off"
          />
          <Input
            {...register("password", {
              required: "비밀번호를 입력하세요",
              minLength: {
                value: 6,
                message: "비밀번호는 6자 이상입니다.",
              },
            })}
            type="password"
            placeholder="비밀번호를 입력하세요 (6자리 이상)"
          />
          <div>
            <Input
              {...register("checkPassword", {
                required: "비밀번호를 한번 더 입력하세요",
                minLength: {
                  value: 6,
                  message: "비밀번호는 6자 이상입니다.",
                },
              })}
              type="password"
              placeholder="비밀번호를 한번 더 입력하세요"
            />
            <ErrorM>{isPassword}</ErrorM>
          </div>
          <BtnWrap>
            <SignUpBtn $isValid={isValid}>회원가입</SignUpBtn>
            <Link to={"/login"}>취소</Link>
          </BtnWrap>
        </Form>
      </SignUpWrap>
    </Wrap>
  );
};
