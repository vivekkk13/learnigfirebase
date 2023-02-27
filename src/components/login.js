import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { app } from "./firebase";
import Navbars from "./Navbar";
const auth = getAuth();
const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: null,
    email: null,
    password: null,
  });

  const login = localStorage.getItem("login");
  /*
Function for creaing user credentials
*/

  const signIn = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((val) => {
        localStorage.setItem("auth", "login hu bhai yaar");
        addUsername();
        navigate("/listing");
      })
      .catch((val) => {
        toast("Email already in Use");
      });
  };

  /*
 function for user to login with existing credentials 
*/

  const LogIn = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((val) => {
        localStorage.setItem("auth", "login hu bhai yaar");
        navigate("/listing");
        toast("login Success");
      })
      .catch(() => {
        toast("Invalid Email or Password");
      });
  };

  /*
  Function for signup with Google
   */

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((val) => {
      localStorage.setItem("auth", "login hu bhai yaar");
      navigate("/listing");
      toast("login Success");
    });
  };

  /*
  Function for adding username to the th ecollection
  */
  const addUsername = async () => {
    const result = await addDoc(collection(firestore, "users"), {
      name: data.name,
      email: data.email,
    });
  };
  return (
    <>
      <Navbars />
      <div>
        <h4> {login === "bhai login hu" ? <>Login</> : <>Sign Up</>} </h4>
        <div className="login_form">
          <form>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example1">
                UserName
              </label>
              <input
                type="email"
                class="form-control"
                onChange={(e) => {
                  setData({
                    ...data,
                    name: e.target.value,
                  });
                }}
              />
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example1">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                onChange={(e) => {
                  setData({
                    ...data,
                    email: e.target.value,
                  });
                }}
              />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example2">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                onChange={(e) => {
                  setData({
                    ...data,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              {login === "bhai login hu" ? (
                <>
                  {" "}
                  <button
                    type="button"
                    class="btn btn-primary btn-block mb-4"
                    onClick={LogIn}
                  >
                    Log In
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <button
                    type="button"
                    class="btn btn-primary btn-block mb-4"
                    onClick={signIn}
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>

            <div class="text-center">
              <p>or sign up with:</p>
              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fa fa-facebook"></i>
              </button>

              <button
                type="button"
                class="btn btn-link btn-floating mx-1"
                onClick={signInWithGoogle}
              >
                <i class="fa fa-google"></i>
              </button>

              <button type="button" class="btn btn-link btn-floating mx-1">
                <i class="fa fa-twitter"></i>
              </button>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
