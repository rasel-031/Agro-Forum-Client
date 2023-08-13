import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/Home/Home";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Notifications from "./components/Notifications/Notifications";
import Write from "./components/Write/Write";
import Stories from "./components/Stories/Stories";
import IndividualStory from "./components/Stories/IndividualStory";

const App = () => {
  return (
    <>
      <ToastContainer position="top-center" limit={1} />
      <Router>
        <Routes>
          {/* Unprotected route with landing page */}
          <Route path="/" element={<NavigationBar />} />

          {/* Protected route */}
          <Route path="/me" element={<ProtectedRoute />}>
            <Route index element={<Home />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="stories" element={<Stories />}>
              <Route path=":id" element={<IndividualStory/>} />
            </Route>
            <Route path="new-post" element={<Write />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
          {/* Page not found page */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
