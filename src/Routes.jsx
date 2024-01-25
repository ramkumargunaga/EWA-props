import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Villalahari = React.lazy(() => import("pages/Villalahari"));
const Hertageroom = React.lazy(() => import("pages/Hertageroom"));
const Luxurycottage = React.lazy(() => import("pages/Luxurycottage"));
const Bookingconfirmation = React.lazy(
  () => import("pages/Bookingconfirmation"),
);
const Payment = React.lazy(() => import("pages/Payment"));
const Register = React.lazy(() => import("pages/Register"));
const Checkavailability = React.lazy(() => import("pages/Checkavailability"));
const Roombooking = React.lazy(() => import("pages/Roombooking"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Location = React.lazy(() => import("pages/Location"));
const Contact = React.lazy(() => import("pages/Contact"));
const UpdatedHeader = React.lazy(() => import("pages/UpdatedHeader"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<UpdatedHeader />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/roombooking" element={<Roombooking />} />
          <Route path="/checkavailability" element={<Checkavailability />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
          <Route
            path="/bookingconfirmation"
            element={<Bookingconfirmation />}
          />
          <Route path="/luxurycottage" element={<Luxurycottage />} />
          <Route path="/hertageroom" element={<Hertageroom />} />
          <Route path="/villalahari" element={<Villalahari />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
