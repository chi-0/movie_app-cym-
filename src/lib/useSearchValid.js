import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useSearchValid = (data) => {
  const { pathname } = useLocation();

  useEffect(() => {}, [pathname]);

  return;
};
