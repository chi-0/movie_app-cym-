import { Wrap } from "../../components/Wrap";
import { useParams } from "react-router-dom";
import { useQueries } from "@tanstack/react-query";
import { detailData, getReview, getVideo } from "../../api/axios";
import { DetailCon } from "./DetailCon";
import { DetailForm } from "./DetailForm";
import { Loading } from "../../components/Loading";
import { DetailVideo } from "./DetailVideo";
import { PageTitle } from "../../components/PageTitle";
import { useScrollTop } from "../../lib/useScrollTop";
import { BackPage } from "../../components/BackPage";

export const Detail = () => {
  const { id } = useParams();

  const queries = useQueries({
    queries: [
      {
        queryKey: [id, "detail"],
        queryFn: detailData,
      },
      {
        queryKey: [id, "review"],
        queryFn: getReview,
      },
      {
        queryKey: [id, "video"],
        queryFn: getVideo,
      },
    ],
  });

  const { data: detail, isLoading: detailLoading } = queries[0];
  const { data: reviewData, isLoading: reviewLoading } = queries[1];
  const { data: videoData, isLoading: videoLoading } = queries[2];
  const review = reviewData?.results;
  const videoPlay = videoData?.results;

  useScrollTop();

  return (
    <Wrap>
      <PageTitle title={"상세페이지"} />
      <BackPage />
      {detailLoading || reviewLoading ? (
        <Loading />
      ) : (
        <>
          <DetailCon data={detail} />
          {videoLoading ? (
            "loading..."
          ) : (
            <>
              <DetailVideo data={videoPlay} />
            </>
          )}

          <DetailForm data={review} />
        </>
      )}
    </Wrap>
  );
};
