import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
  useParams,
} from "react-router-dom";

import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

// ProtectedRoute component to guard authenticated routes
const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// Layout component containing navigation links
const Layout = () => {
  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Outlet />
    </div>
  );
};

// Home component
const Home = () => <h2>Home Page</h2>;

// About component
const About = () => <h2>About Page</h2>;

// Login component with authentication handler
const Login = ({ onLogin }) => {
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={onLogin}>Log In</button>
    </div>
  );
};

// Post component using dynamic URL parameter
const Post = () => {
  const { postId } = useParams();
  return (
    <div>
      <h2>Post {postId}</h2>
      <p>Content for post {postId}</p>
    </div>
  );
};

// 404 Not Found component
const NotFound = () => <h2>404 Not Found</h2>;

// Main App component with router setup
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {/* Parent route */}
        <Route path="/profile/*" element={<Profile />} />

        {/* Other routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/login"
          element={<Login onLogin={() => setIsAuthenticated(true)} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
