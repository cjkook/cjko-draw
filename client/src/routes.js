import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";

const dashboardRoutes = [
  {
    path: "/sketch",
    name: "Sketch",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/UserProfile",
    name: "User",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },

];

export default dashboardRoutes;
