import { Link } from "react-router-dom";
import { Wrap } from "../../components/Wrap";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import { getSearch } from "../../api/axios";

const Form = styled.form``;

const Input = styled.input``;

const Button = styled.button``;

const SearchWrap = styled.div``;

const Title = styled.div``;

const PopSearchWrap = styled.div``;

export const Search = () => {
  const [text, SetText] = useState();

  const searchQuery = useQueries({
    queries: [
      {
        queryKey: [text, "search"],
        queryFn: getSearch,
      },
    ],
  });
  console.log(searchQuery);

  const {
    register,
    handleSubmit,
    // formState: { errors, isValid },
  } = useForm();

  const searchSubmit = (data) => {
    const { search } = data;
    SetText(search);
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit(searchSubmit)}>
        <Input
          {...register("search", {
            required: "검색어를 입력해주세요",
          })}
          type="text"
          placeholder="검색어입력"
        />
        <Button></Button>
      </Form>
      <SearchWrap>
        <Title>오늘의 인기 검색어</Title>
        <PopSearchWrap>
          <Link to={""}></Link>
        </PopSearchWrap>
      </SearchWrap>
    </Wrap>
  );
};
