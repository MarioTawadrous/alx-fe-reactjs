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
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="login"
            element={<Login onLogin={() => setIsAuthenticated(true)} />}
          />
          <Route path="posts/:postId" element={<Post />} />
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
