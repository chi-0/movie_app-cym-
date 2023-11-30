import { Wrap } from "../../components/Wrap";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import { getSearch, getTrend } from "../../api/axios";
import { SearchTrend } from "./SearchTrend";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchCon } from "./SearchCon";

const SearchWrap = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const Form = styled.form`
  width: fit-content;
  margin-bottom: 50px;
  position: relative;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  padding: 15px 0;
  padding-right: 10px;
  font-size: 32px;
  font-weight: 700;
  width: 70vw;
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
`;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

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
            autoComplete="none"
          />
          <Button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </Form>

        {!search && (
          <>
            {trendIsLoading ? (
              "loading"
            ) : (
              <>
                <SearchTrend data={trend} />
              </>
            )}
          </>
        )}
      </SearchWrap>

      {search && (
        <>
          {searchIsLoading ? (
            "loading"
          ) : (
            <>
              <SearchCon data={search} />
            </>
          )}
        </>
      )}
    </Wrap>
  );
};
