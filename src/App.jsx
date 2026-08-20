import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./providers/AuthProvider";
import ProtectedRoute from "./ProtectedRoute";

function App() {

  return (
    <div>
      <Toaster
        toastOptions={{
          duration: 1000,
          style: {
            background: "#120015",
            border: "1px solid #efd9fc",
            borderRadius: "3px",
            color: "white",
          },
        }}
      />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
            <Route path="/" element={<Navigate to="/Login" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
export default App;
