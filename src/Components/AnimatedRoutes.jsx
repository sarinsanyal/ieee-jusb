import { Route, Routes, useLocation } from "react-router-dom";
import Team from "./Team";
import Events from "./Events";
import Home from "./Home";
import { AnimatePresence } from "framer-motion";
import Tech from "./recruitment/Tech";
import Design from "./recruitment/Design";
import Pr from "./recruitment/Pr";
import Content from "./recruitment/Content";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events/" element={<Events />} />
        <Route path="/tech-recruit" element={<Tech />} />
        <Route path="/design-recruit" element={<Design />} />
        <Route path="/pr-recruit" element={<Pr />} />
        <Route path="/content-recruit" element={<Content />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
