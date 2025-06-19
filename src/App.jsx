import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/ErrorPages/NotFound";
import About from "./pages/About/About";
import Acrepair from "./pages/Services/Acrepair";
import WashingMachineRepair from "./pages/Services/WashingMachineRepair";
import WaterPurifierRepair from "./pages/Services/WaterPurifierRepair";
import MicrowaveOvenRepair from "./pages/Services/MicrowaveOvenRepair";
import Whychooseus from "./pages/Why Choose Us/Whychooseus";
import ContactUs from "./pages/ContactUs/ContactUs";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/services/ac-repair" element={<Acrepair />} />
        <Route
          path="/services/washing-machine-repair"
          element={<WashingMachineRepair />}
        />
        <Route
          path="/services/water-purifier-repair"
          element={<WaterPurifierRepair />}
        />
        <Route
          path="/services/microwave-oven-repair"
          element={<MicrowaveOvenRepair />}
        />
        <Route path="whychooseus" element={<Whychooseus />} />
        <Route path="contactus" element={<ContactUs />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
