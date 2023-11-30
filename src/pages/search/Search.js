import { Wrap } from "../../components/Wrap";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import { getSearch, getTrend } from "../../api/axios";
import { SearchTrend } from "./SearchTrend";
import { IMG_URL } from "../../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchWrap = styled.div``;

const Form = styled.form`
  width: 100%;
  margin-bottom: 50px;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  padding: 20px 0;
  padding-right: 10px;
  font-size: 32px;
  font-weight: 700;
  width: 80%;
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
`;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  font-size: 24px;
  cursor: pointer;
`;

const ImgWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const Img = styled.img``;

export const Search = () => {
  const [text, SetText] = useState();
  const [valid, SetValid] = useState(false);

  const searchQuery = useQueries({
    queries: [
      {
        queryKey: [text],
        queryFn: getSearch,
        enabled: valid,
      },
      {
        queryKey: ["trend"],
        queryFn: getTrend,
      },
    ],
  });

  const {
    data: searchData,
    isLoading: searchIsLoading,
    refetch,
  } = searchQuery[0];
  const { data: trendData, isLoading: trendIsLoading } = searchQuery[1];
  const search = searchData?.results;
  const trend = trendData?.results;

  const {
    register,
    handleSubmit,
    // formState: { errors, isValid },
  } = useForm();

  const searchSubmit = (data) => {
    const { search } = data;
    SetText(search);
    SetValid(true);
    refetch();
  };

  return (
    <Wrap>
      <SearchWrap>
        <Form onSubmit={handleSubmit(searchSubmit)}>
          <Input
            {...register("search", {
              required: "검색어를 입력해주세요",
            })}
            type="text"
            placeholder="찾고싶은 영화를 입력해 보세요."
          />
          <Button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </Form>

        {trendIsLoading ? (
          "loading"
        ) : (
          <>
            <SearchTrend data={trend} />
          </>
        )}
      </SearchWrap>

      {searchIsLoading ? (
        "loading"
      ) : (
        <>
          <ImgWrap>
            {search?.map((data) => (
              <Img key={data.id} src={IMG_URL + "/w500" + data.poster_path} />
            ))}
          </ImgWrap>
        </>
      )}
    </Wrap>
  );
};
