import { Route, Routes } from "react-router-dom";
import "./App.css";
import { developerGuide } from "./content/developer";
import { recruiterGuide } from "./content/recruiter";
import { Layout } from "./components/Layout";
import { GuidePage } from "./pages/GuidePage";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="developer" element={<GuidePage guide={developerGuide} />} />
        <Route path="recruiter" element={<GuidePage guide={recruiterGuide} />} />
      </Route>
    </Routes>
  );
}
