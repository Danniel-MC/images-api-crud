import { Routes, Route } from "react-router-dom";
import { HomePage, NotFoundPage, PostForm } from "./pages";
import { PostProvider } from "./context/postContext";
import { Toaster } from "react-hot-toast";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center ">
      <div className="px-10 container m-auto py-4">
        <PostProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home/new" element={<PostForm />} />
            <Route path="/:id" element={<PostForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster />
        </PostProvider>
      </div>
    </div>
  );
}

export default App;
