import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import About from "views/About.jsx";
import SketchOne from "views/SketchOne.jsx";
import SketchTwo from "views/SketchTwo.jsx";
const dashboardRoutes = [
  {
    path: "/sketches",
    name: "Sketchbook",
    icon: "pe-7s-notebook",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/about",
    name: "About",
    icon: "pe-7s-user",
    component: About,
    layout: "/admin"
  },
  {
    path: "/UserProfile",
    name: "Palette",
    icon: "pe-7s-paint-bucket",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/SketchOne",
    name: "Sketch One",
    icon: "pe-7s-note",
    component: SketchOne,
    layout: "/admin",
  },
  {
    path: "/SketchTwo",
    name: "Sketch Two",
    icon: "pe-7s-note",
    component: SketchTwo,
    layout: "/admin"
  },

];

export default dashboardRoutes;