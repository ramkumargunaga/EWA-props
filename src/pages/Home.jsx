import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="ewa-navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/">UpdatedHeader</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/location">Location</Link>
        </li>
        <li>
          <Link to="/aboutus">Aboutus</Link>
        </li>
        <li>
          <Link to="/roombooking">Roombooking</Link>
        </li>
        <li>
          <Link to="/checkavailability">Checkavailability</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/payment">Payment</Link>
        </li>
        <li>
          <Link to="/bookingconfirmation">Bookingconfirmation</Link>
        </li>
        <li>
          <Link to="/luxurycottage">Luxurycottage</Link>
        </li>
        <li>
          <Link to="/hertageroom">Hertageroom</Link>
        </li>
        <li>
          <Link to="/villalahari">Villalahari</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
