import { Helmet, HelmetProvider } from "react-helmet-async";

export const PageTitle = ({ title }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{"CYM | " + title}</title>
      </Helmet>
    </HelmetProvider>
  );
};
