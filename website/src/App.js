import { Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Header from "./components/Header";
import Home from "./pages/Home";
import Post from "./pages/Post";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="category">
          <Route path=":title" element={<Category />} />
        </Route>
        <Route path={"/post"}>
          <Route path=":id" element={<Post />} />
        </Route>
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes> */}
    </>
  );
}
export default App;
