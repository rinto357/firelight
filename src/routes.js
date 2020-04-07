import Landing from "./pages/Landing";
import Player from "./components/Player";
import Err404 from "./pages/Err404";

export default [
  { path: "/", component: Landing },
  { path: "/play", component: Player },
  { path: "/home", alias: "/" },
  { path: "*", component: Err404 }
];
