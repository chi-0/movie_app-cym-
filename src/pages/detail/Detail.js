import styled from "styled-components";
import { Wrap } from "../../components/Wrap";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { detailData } from "../../api/axios";
import { DetailCon } from "./DetailCon";
import { useForm } from "react-hook-form";

const FormWrap = styled.div``;
const Form = styled.form``;
const Input = styled.input``;
const ReviewWrap = styled.div``;
const Review = styled.p``;

export const Detail = () => {
  const { id } = useParams();

  const {
    data: detail,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [id],
    queryFn: detailData,
  });
  console.log(isError);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const ReviewSubmit = () => {};

  return (
    <Wrap>
      {isLoading ? (
        "loding"
      ) : (
        <>
          <DetailCon data={detail} />
          <FormWrap>
            <Form onSubmit={handleSubmit(ReviewSubmit)}>
              <Input type="text" placeholder="후기를 작성해 주세요"></Input>
            </Form>
            <ReviewWrap>
              <Review></Review>
            </ReviewWrap>
          </FormWrap>
        </>
      )}
    </Wrap>
  );
};
