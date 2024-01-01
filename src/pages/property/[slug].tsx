import { useRouter } from "next/router";
import React from "react";

const PropertiesSlugPage = () => {
  const {
    query: { slug },
  } = useRouter();
  return <div>This is dynamic routes segment [{slug}]</div>;
};

export default PropertiesSlugPage;
