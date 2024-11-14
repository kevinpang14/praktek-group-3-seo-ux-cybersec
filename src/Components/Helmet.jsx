import React from "react";
import { Helmet } from "react-helmet";

const HelmetComponent = ({
  title,
  description,
  keywords,
  author,
  date,
  image,
}) => {
  const schemaData = {
    "@context": "https://schema.org",

    "@type": "Article",

    headline: title,

    author: {
      "@type": "Person",

      name: author,
      url: "http://localhost:5173/src/assets/img/Rectangle25-2.jpg",
    },

    datePublished: date,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      {/* Schema.org markup for Google+ */}
      <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
    </Helmet>
  );
};

export default HelmetComponent;
