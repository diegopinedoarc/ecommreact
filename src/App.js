import React from "react";
import Layout from "./Components/Layout/Layout";
import Routes from "./Routes/Routes";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

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
