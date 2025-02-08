import { useState, useMemo,useRef } from "react";
import UseCallback02 from "./useCallback02";
/* useMemo:
- Tránh việc tính toán lại ko cần thiết , khi 
  state ko liên quan bị thauy đổi.
-  
*/
function UseMemo() {
  const [count, setCount] = useState(60);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);
  const nameRef = useRef();
  const handleSubmit = () => {
    setProducts([...products, { name: name, price: +price }]);
    setName("");
    setPrice("");
    nameRef.current.focus();

  };
  const total = useMemo(() => {
    console.log("render");
    const result = products.reduce((result, prod) => {
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);
  return (
    <div>
      <h1>{count}</h1>
      <input
        type="text"
        ref={nameRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <h1>Total: {total}</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UseMemo;
