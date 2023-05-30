import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/products" + id;
  const { data: products, loading, error } = useFetch(url);

  return (
    <>
      {" "}
      {error && <p>Deu erro</p>}
      {loading && <p>Loading...</p>}
      {products && (
        <div>
          {" "}
          <h1>{products.name}</h1>
          <h2>{products.price}</h2>
        </div>
      )}
      ID DO PRODUTO{id}
    </>
  );
};

export default Product;
