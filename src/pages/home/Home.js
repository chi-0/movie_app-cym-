import { Wrap } from "../../components/Wrap";
import { useEffect, useState } from "react";
import { comingData, nowData, popularData } from "../../api/api";
import { Main } from "./Main";
import { HomeCon } from "./HomeCon";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import { useScrollTop } from "../../lib/useScrollTop";
import "./Home.css";

export const Home = () => {
  const [now, setNow] = useState();
  const [popular, setPopular] = useState();
  const [coming, setComing] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results: nowResults } = await nowData();
        const { results: popResults } = await popularData();
        const { results: comingResults } = await comingData();
        setNow(nowResults);
        setPopular(popResults);
        setComing(comingResults);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useScrollTop();

  return (
    <Wrap>
      <PageTitle title={"홈"} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {now && (
            <>
              <Main data={now} />
              <HomeCon title="인기 영화" data={popular} margin={120} />
              <HomeCon title="개봉 예정 영화" data={coming} margin={0} />
            </>
          )}
        </>
      )}
    </Wrap>
  );
};
