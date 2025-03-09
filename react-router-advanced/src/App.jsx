import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from "react-router-dom";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import BlogPost from "./components/BlogPost";

// Protected Route Component
const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Layout Component
const Layout = () => {
  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
        <Link to="/blog/1">Blog Post 1</Link>
        <Link to="/blog/2">Blog Post 2</Link>
      </nav>
      <Outlet />
    </div>
  );
};

// Basic Pages
const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const NotFound = () => <h2>404 Not Found</h2>;

// Login Component
const Login = ({ onLogin }) => {
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={onLogin}>Log In</button>
    </div>
  );
};

// Main App Component
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Index Route */}
          <Route index element={<Home />} />

          {/* Basic Routes */}
          <Route path="about" element={<About />} />
          <Route
            path="login"
            element={<Login onLogin={() => setIsAuthenticated(true)} />}
          />

          {/* Blog Post Dynamic Route */}
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Protected Profile Routes */}
          <Route
            path="profile"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }
          >
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>

          {/* Catch-all 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
