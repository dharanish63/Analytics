import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Layouts/Home";
import Settings from "./Layouts/Settings";
import Views from "./Layouts/Views";
import Pages from "./Layouts/pages";
import Referrer from "./Layouts/Referrer";
import Durations from "./Layouts/Durations";
import Systems from "./Layouts/Systems";
import Devices from "./Layouts/Devices";
import Languages from "./Layouts/Languages";
import Sizes from "./Layouts/Sizes";
import Event from "./Layouts/Event";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/settings" element={<Settings />} />
      <Route path="/insights/views" element={<Views />} />
      <Route path="/insights/pages" element={<Pages />} />
      <Route path="/insights/referrers" element={<Referrer />} />
      <Route path="/insights/durations" element={<Durations />} />
      <Route path="/insights/systems" element={<Systems />} />
      <Route path="/insights/devices" element={<Devices />} />
      <Route path="/insights/languages" element={<Languages />} />
      <Route path="/insights/sizes" element={<Sizes />} />
      <Route path="/insights/events" element={<Event />} />
    </Routes>
  );
}

export default App;
