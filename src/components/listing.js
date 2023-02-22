import {
  getFirestore,
  collection,
  doc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { app } from "./firebase";

const firestore = getFirestore(app);

const Listing = () => {
  const navigate = useNavigate();
  const [listing, setListing] = useState([]);

  /*
  This function get all books that is in our collection using adddocs funtion
  */

  const getBooks = async () => {
    const list = await getDocs(collection(firestore, "books"));
    setListing(list.docs);
  };

  /*
This function delete the particular book that is refering to the given id using deleteDoc function of frebase. 
*/
  const deleteById = async (id) => {
    const ref = doc(firestore, "books", id);
    const deletedbook = await deleteDoc(ref);
  };

  /*

  here i am calling useeffect to run my getbooks function on first render
  
  */

  useEffect(() => {
    getBooks();
  }, [deleteById]);
  if (listing?.length == 0)
    return (
      <>
        <h5 className="no_books">
          No Books Right Now Please Add One....{" "}
          <button className="btn_list" onClick={() => navigate("/addbook")}>
            Add Book
          </button>
        </h5>
      </>
    );
  else {
    return (
      <>
        <div className="listing">
          <h3>Books Listing:</h3>
          <Table bordered>
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {listing.map((item, index) => (
                <>
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.data().title}</td>

                    <td>{item.data().author}</td>

                    <td>{item.data().price}</td>
                    <td style={{ cursor: "pointer", width: "1px" }}>
                      <span
                        onClick={(e) => navigate(`/books/view/${item.id}`)}
                        className="span_"
                      >
                        View
                      </span>
                      <span
                        className="span_"
                        onClick={() => deleteById(item.id)}
                      >
                        Delete
                      </span>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    );
  }
};
export default Listing;
