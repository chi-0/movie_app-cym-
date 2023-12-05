import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const FormWrap = styled.div`
  max-width: 880px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 1050px) {
    max-width: 800px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  > label {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 1050px) {
    > label {
      font-size: 28px;
      margin-bottom: 20px;
    }
  }
  @media screen and (max-width: 799px) {
    > label {
      font-size: 24px;
      margin-bottom: 15px;
    }
  }
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  color: #0c002f;
  padding: 15px 30px;
  border-radius: 30px;
  font-size: 18px;
  margin-bottom: 40px;
  line-height: 25px;

  @media screen and (max-width: 1050px) {
    padding: 15px 20px;
    font-size: 16px;
    line-height: 23px;
  }
  @media screen and (max-width: 799px) {
    font-size: 14px;
    margin-bottom: 30px;
    line-height: 20px;
  }
`;

const Message = styled.p`
  color: salmon;
  font-size: 14px;
  position: absolute;
  bottom: 20px;
  left: 30px;

  @media screen and (max-width: 799px) {
    bottom: 12px;
    left: 22px;
    font-size: 12px;
  }
`;

const ReviewWrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  word-break: break-all;
`;

const Review = styled.p`
  width: 100%;
  padding: 15px 30px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 20px;

  @media screen and (max-width: 1050px) {
    padding: 15px 20px;
    font-size: 16px;
    line-height: 23px;
    margin-bottom: 15px;
  }
  @media screen and (max-width: 799px) {
    font-size: 14px;
    margin-bottom: 10px;
    line-height: 20px;
  }
`;

const ReviewBtn = styled.button`
  all: unset;
  font-size: 15px;
  opacity: 0.3;
  cursor: pointer;
  display: inline-block;

  @media screen and (max-width: 1050px) {
    font-size: 14px;
  }
  @media screen and (max-width: 799px) {
    font-size: 13px;
  }
`;

export const DetailForm = ({ data }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [textMore, setTextMore] = useState();
  const [counter, setCounter] = useState(0);

  const reviewRef = useRef(counter);
  const { current } = reviewRef;

  useEffect(() => {
    setTextMore(current);
  }, [current]);

  const {
    register,
    handleSubmit,
    // formState: { errors, isValid },
    reset,
  } = useForm();

  const ReviewSubmit = (d) => {
    const { coment } = d;
    const reviewBox = {
      id: Math.random(),
      content: coment,
    };
    const check = localStorage.getItem("login");

    check === null
      ? setErrorMessage("로그인 후 이용해 주세요")
      : data.push(reviewBox);

    reset({ coment: "" });
  };

  const clickHandler = (e) => {
    e.target.parentNode.classList.add("pick");
    setCounter((prev) => prev + 1);
  };

  return (
    <FormWrap>
      <Form onSubmit={handleSubmit(ReviewSubmit)}>
        <label htmlFor="review">관람평</label>
        <Input
          {...register("coment", {
            required: "글자를 입력해주세요.",
          })}
          type="text"
          placeholder="후기를 작성해 주세요"
          autoComplete="off"
        />
        <Message>{errorMessage}</Message>
      </Form>
      <ReviewWrap ref={reviewRef}>
        {data.map((data, index) => (
          <Review key={data.id}>
            {textMore && (
              <>
                {textMore.children[index]?.classList.contains("pick")
                  ? data.content
                  : data.content.length > 100
                  ? data.content.slice(0, 100) + "... "
                  : data.content}
                <ReviewBtn onClick={clickHandler}>
                  {data.content.length > 100
                    ? textMore.children[index]?.classList.contains("pick") ||
                      "더보기"
                    : ""}
                </ReviewBtn>
              </>
            )}
          </Review>
        ))}
      </ReviewWrap>
    </FormWrap>
  );
};
