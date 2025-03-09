import { Link, Outlet, useRoutes } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const ProfileRoutes = () => {
  const routes = useRoutes([
    { path: "details", element: <ProfileDetails /> },
    { path: "settings", element: <ProfileSettings /> },
    { path: "*", element: <ProfileDetails /> }, // Default route
  ]);

  return routes;
};

const Profile = () => {
  return (
    <div>
      <h2>Profile</h2>
      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* This will render the nested routes */}
      <Outlet />

      {/* Local route configuration */}
      <ProfileRoutes />
    </div>
  );
};

export default Profile;
