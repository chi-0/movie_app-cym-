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
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import { useScrollTop } from "../../lib/useScrollTop";

const SearchWrap = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const Form = styled.form`
  width: fit-content;
  position: relative;
`;

const Input = styled.input`
  all: unset;
  box-sizing: border-box;
  padding: 10px 0;
  padding-right: 40px;
  font-size: 32px;
  font-weight: 700;
  width: 70vw;
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);

  &:focus {
    border-bottom: 2px solid white;
  }

  @media screen and (max-width: 1050px) {
    padding: 5px 0;
    padding-right: 25px;
    font-size: 18px;
  }
  @media screen and (max-width: 799px) {
    padding: 5px 0;
    padding-right: 10px;
    font-size: 16px;
  }
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

  @media screen and (max-width: 1050px) {
    font-size: 20px;
  }
  @media screen and (max-width: 799px) {
    font-size: 16px;
  }
`;

export const Search = () => {
  const [text, SetText] = useState();
  const [valid, setValid] = useState(false);

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

  const { data: searchData, isLoading: searchIsLoading } = searchQuery[0];
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
    setValid(true);
  };

  useScrollTop();

  return (
    <Wrap>
      <PageTitle title={"검색"} />
      <SearchWrap>
        <Form onSubmit={handleSubmit(searchSubmit)}>
          <Input
            {...register("search", {
              required: "검색어를 입력해주세요",
            })}
            type="text"
            placeholder="찾고싶은 영화를 입력해 보세요."
            autoComplete="off"
          />
          <Button>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </Form>

        {!search && (
          <>
            {trendIsLoading ? (
              <Loading />
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
