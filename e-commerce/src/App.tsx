import { Route, BrowserRouter as Router, Routes  } from "react-router-dom";
import Sidebar from "./assets/companents/Sidebar";
import MainContent from "./assets/companents/MainContent";
import ProductPage from "./assets/companents/ProductPage";
import TopSeller from "./assets/companents/TopSellers";
import PopularBlog from "./assets/companents/PopularBlog";

function App() {
  return (
    <Router>
      <div className="flex h-screen ">
        <Sidebar />

        <div className="rounded w-full flex justify-between flex-wrap">
          <Routes>
            <Route path="/" element={<MainContent/>}/>
            <Route path="/product/:id" element={<ProductPage/>}/>
          </Routes>
        </div>
        <div>
          <TopSeller/>
          <PopularBlog/>
        </div>
      </div>
    </Router>
  );
}

export default App;
