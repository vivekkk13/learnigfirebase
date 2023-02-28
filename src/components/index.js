import { async } from "@firebase/util";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { app } from "../components/firebase";
import Navbars from "./Navbar";

const firestore = getFirestore(app);

const Index = () => {
  const { id } = useParams();
  const [editItem, setEditItem] = useState([]);
  const [data, setData] = useState({
    title: null,
    author: null,
    price: null,
  });
  const addId = localStorage.getItem("id");
  console.log("id is", addId);
  /*

  This function store the book details in firebase using adddoc funtion
  
  */
  const putData = async () => {
    const result = await addDoc(
      collection(firestore, "users", addId, "books"),
      {
        title: data.title,
        author: data.author,
        price: data.price,
      }
    );
  };

  /*

 Get data by id for edit

 */

  const getItem = async () => {
    const result = doc(firestore, "users", addId, "books", id);
    const getdata = await getDoc(result);
    setData(getdata.data());
  };

  /*
  set Data that is edited
  */

  const editableData = async () => {
    const result = await setDoc(doc(firestore, "users", addId, "books", id), {
      title: data.title,
      author: data.author,
      price: data.price,
    });
  };
  useEffect(() => {
    getItem();
  }, []);

  return (
    <>
      <Navbars />
      <div class="form-group">
        <h1 className="h1_">{id ? "Edit book" : "Add Book"}</h1>
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
            if (id) {
              editableData();
              setData({
                title: "",
                author: "",
                price: "",
              });
            } else {
              putData();
              setData({
                title: "",
                author: "",
                price: "",
              });
            }
          }}
        >
          {id ? "Edit" : "Submit"}
        </button>
      </div>
    </>
  );
};
export default Index;
