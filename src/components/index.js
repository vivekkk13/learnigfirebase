import { getFirestore, collection, addDoc } from "firebase/firestore";

import { useState } from "react";
import { app } from "../components/firebase";

const firestore = getFirestore(app);

const Index = () => {
  const [data, setData] = useState({
    title: null,
    author: null,
    price: null,
  });

  /*

  This function store the book details in firebase using adddoc funtion
  
  */

  const putData = async () => {
    const result = await addDoc(collection(firestore, "books"), {
      title: data.title,
      author: data.author,
      price: data.price,
    });
  };

  return (
    <>
      <div class="form-group">
        <h1 className="h1_">Add Book</h1>
        <div>
          <label for="input-field">Title:</label>
          <input
            type="text"
            id="input-field"
            name="title"
            value={data.title}
            onChange={(e) => {
              setData({
                ...data,
                title: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label for="input-field">Author:</label>
          <input
            type="text"
            id="input-field"
            name="author"
            value={data.author}
            onChange={(e) => {
              setData({
                ...data,
                author: e.target.value,
              });
            }}
          />
        </div>
        <div>
          <label for="input-field">Price:</label>
          <input
            type="text"
            id="input-field"
            name="price"
            value={data.price}
            onChange={(e) => {
              setData({
                ...data,
                price: e.target.value,
              });
            }}
          />
        </div>
        <button
          className="btn_"
          onClick={() => {
            putData();
            setData({
              title: "",
              author: "",
              price: "",
            });
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};
export default Index;
