import React from "react";
import Layout from "./Components/Layout/Layout";
import Routes from "./Routes/Routes";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
// import { auth, createUserProfileDocument } from "./firebase/firebase-utils";
// import { onAuthStateChanged } from "firebase/auth";
// function onAuthStateChange(cb, action) {
//   onAuthStateChanged(auth, async (userAuth) => {
//     if (userAuth) {
//       const userRef = await createUserProfileDocument(userAuth);
//       onSnapshot(userRef, (snapShot) =>
//         cb(action({ id: snapShot.id, ...snapShot.data() }))
//       );
//     } else {
//       cb(action(null));
//     }
//   });
// }
function App() {
  return (
    <Layout>
      <Header />
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;
