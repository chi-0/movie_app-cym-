import { Wrap } from "../../components/Wrap";
import { useParams } from "react-router-dom";
import { useQueries } from "@tanstack/react-query";
import { detailData, getReview } from "../../api/axios";
import { DetailCon } from "./DetailCon";
import { DetailForm } from "./DetailForm";
import { Loading } from "../../components/Loading";

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
    ],
  });

  const { data: detail, isLoading: detailLoading } = queries[0];

  const { data, isLoading: reviewLoading } = queries[1];
  const review = data?.results;

  return (
    <Wrap>
      {detailLoading || reviewLoading ? (
        <Loading />
      ) : (
        <>
          <DetailCon data={detail} />
          <DetailForm data={review} />
        </>
      )}
    </Wrap>
  );
};
