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

const ReviewWrap = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
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

export const DetailForm = ({ data }) => {
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

    data.push(reviewBox);

    reset({ coment: "" });
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
          autoComplete="none"
        />
      </Form>
      <ReviewWrap>
        {data.map((data) => (
          <Review key={data.id}>{data.content}</Review>
        ))}
      </ReviewWrap>
    </FormWrap>
  );
};
