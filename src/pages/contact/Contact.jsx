import React from "react";
import Hero from "../../components/hero/Hero";
import { useFetch } from "../../hooks/useFetch";
import Products from "../../components/products/Products";
import Skeleton from "../../components/products/Skeleton";

const Contact = () => {
  const { data, error, loading } = useFetch("/products", {
    limit: 10,
    skip: 5,
  });

  return (
    <div id="contact">
      <Hero text={"Contact"} />
      {error && <p>something went wrong :(</p>}
      {loading ? <Skeleton /> : <Products data={data?.products} />}
    </div>
  );
};

export default Contact;
