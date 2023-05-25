import Navigation_Bar from "../Components/Navigation_Bar";
import React from "react";
import "../CSS files/HomePage.css";
import AnimatedPage from "../Animation";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <AnimatedPage>
      <div>
        <Navigation_Bar name="Profile" />
        <div className="grid-container">
          <div className="grid-left">
            <p>
              Find A <b>Job</b> That <b>Matches</b> Your Passion
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate("/Jobpage");
              }}
            >
              <input type="text" placeholder="Search for a job" />
              <button type="submit">Search</button>
            </form>
          </div>
          <div className="grid-right">
            <img
              src="\Images\Man working with laptop and sitting in chair.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </AnimatedPage>
  );
}
