import { getFirestore, getDoc, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { app } from "./firebase";
const firestore = getFirestore(app);

const Information = () => {
  const { id } = useParams();
  const [bookbyId, setBookById] = useState([]);
  /*

  This function get single book details by id of its document from firebase

  */
  const getBookById = async () => {
    const ref = doc(firestore, "books", id);
    const book = await getDoc(ref);
    setBookById(book.data());
  };

  /*

  here i am calling useeffect to run my getBookById function on first render
  
  */
  useEffect(() => {
    getBookById();
  }, []);
  console.log(bookbyId);

  return (
    <>
      <div className="info_main">
        <h4>Book Details:</h4>
        <div className="books_details">
          <p className="info_p">
            Title:
            <span className="info_span">{bookbyId.title}</span>
          </p>
          <p className="info_p">
            Author:
            <span className="info_span">{bookbyId.author}</span>
          </p>
          <p className="info_p">
            Price:
            <span className="info_span">${bookbyId.price}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Information;