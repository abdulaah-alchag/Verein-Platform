import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainLayout } from "./Layouts/MainLayout.jsx";
import {
  Home,
  About,
  Projects,
  Events,
  Partners,
  News,
  Contact,
  Login,
} from "./pages/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="events" element={<Events />} />
          <Route path="partners" element={<Partners />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
