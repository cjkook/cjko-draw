import Dashboard from "views/Dashboard.jsx";
import UserPalette from "views/UserPalette.jsx";
import About from "views/About.jsx";
import SketchOne from "views/SketchOne.jsx";
import SketchTwo from "views/SketchTwo.jsx";
import SketchThree from "views/SketchThree.jsx";
const routes = [
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
    path: "/UserPalette",
    name: "Palette",
    icon: "pe-7s-paint-bucket",
    component: UserPalette,
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
  {
    path: "/SketchThree",
    name: "Sketch Three",
    icon: "pe-7s-note",
    component: SketchThree,
    layout: "/admin"
  },

];

export default routes;
