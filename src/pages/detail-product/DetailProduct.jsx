import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const DetailProduct = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`/products/${id}`);
  const [imageIndex, setImageIndex] = useState(0)

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    return <p>nimadur xato</p>;
  }

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <div>
        <img src={data?.images[imageIndex]} width={500} alt="" />
        <div>
          {
            data?.images?.map((item, inx) => (
              <img onClick={()=> setImageIndex(inx)} width={80} src={item} key={inx} alt="" />
            ))
          }
        </div>
      </div>
      <h2>{data?.title}</h2>
    </div>
  );
};

export default DetailProduct;
