import { Routes, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import DashBoard from "./views/DashBoard";
import LoginPage from "./views/LoginPage";
import PostView from "./views/PostView";
import NotFound from "./views/NotFound";
import { ProtectedRoute } from "./components/PrivateRoute";

import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <div className="gridcontainer">
        <nav>
          <NavBar />
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/posts" element={<DashBoard />} />
            <Route
              path="posts/:postId"
              element={
                <ProtectedRoute>
                  <PostView />
                </ProtectedRoute>
              }
            />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer>
          <p>© ITK 2021 All Rights Reserved</p>
          <a href="https://storyset.com/web" style={{ fontSize: "medium" }}>
            Web illustrations by Storyset
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
