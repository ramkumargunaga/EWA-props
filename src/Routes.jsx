import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Villalahari = React.lazy(() => import("pages/Villalahari"));
const Hertageroom = React.lazy(() => import("pages/Hertageroom"));
const Luxurycottage = React.lazy(() => import("pages/Luxurycottage"));
<<<<<<< HEAD
const Bookingconfirmation = React.lazy(
  () => import("pages/Bookingconfirmation"),
=======
const Bookingconfirmation = React.lazy(() =>
  import("pages/Bookingconfirmation")
>>>>>>> a5849d9f722850f6e8df2558fc5acf9c62a97c16
);
const Payment = React.lazy(() => import("pages/Payment"));
const Register = React.lazy(() => import("pages/Register"));
const Checkavailability = React.lazy(() => import("pages/Checkavailability"));
const Roombooking = React.lazy(() => import("pages/Roombooking"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Location = React.lazy(() => import("pages/Location"));
const Contact = React.lazy(() => import("pages/Contact"));
<<<<<<< HEAD
const UpdatedHeader = React.lazy(() => import("pages/UpdatedHeader"));
=======
const Visitors = React.lazy(() => import("pages/VisitorStories"));
const UpdatedHeader = React.lazy(() => import("pages/UpdatedHeader"));

>>>>>>> a5849d9f722850f6e8df2558fc5acf9c62a97c16
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
<<<<<<< HEAD
          <Route path="/dhiwise-dashboard" element={<Home />} />
=======
          <Route path="/visitors" element={<Visitors />} />
>>>>>>> a5849d9f722850f6e8df2558fc5acf9c62a97c16
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
