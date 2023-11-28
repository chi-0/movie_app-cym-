import { Wrap } from "../../components/Wrap";
import { useEffect, useState } from "react";
import { nowData, popularData } from "../../api/api";
import { Main } from "./Main";
import { HomeCon } from "./HomeCon";

export const Home = () => {
  const [now, setNow] = useState();
  const [popular, setPopular] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowData();
        const { results: popResults } = await popularData();
        setNow(nowResults);
        setPopular(popResults);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <Wrap>
      {isLoading ? (
        "loading"
      ) : (
        <>
          {now && (
            <>
              <Main data={now} />
              <HomeCon title="인기 영화" data={popular} />
            </>
          )}
        </>
      )}
    </Wrap>
  );
};
