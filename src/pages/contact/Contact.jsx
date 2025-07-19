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

      <Hero text={"Contact & Laylo"} />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nesciunt maiores nostrum. Aspernatur ipsa, quasi rem, dolorem error minima voluptate dolore velit porro voluptates rerum, tenetur voluptatem. Rem, excepturi quis?</p>
      {error && <p>something went wrong :(</p>}
      {loading ? <Skeleton /> : <Products data={data?.products} />}
    </div>
  );
};

export default Contact;
