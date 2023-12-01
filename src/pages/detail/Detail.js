import { Wrap } from "../../components/Wrap";
import { useParams } from "react-router-dom";
import { useQueries } from "@tanstack/react-query";
import { detailData, getReview, getVideo } from "../../api/axios";
import { DetailCon } from "./DetailCon";
import { DetailForm } from "./DetailForm";
import { Loading } from "../../components/Loading";
import { DetailVideo } from "./DetailVideo";

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

  return (
    <Wrap>
      {detailLoading || reviewLoading ? (
        <Loading />
      ) : (
        <>
          <DetailCon data={detail} />
          {!videoLoading && (
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
