import React from "react";
import AboutDonaciones from "./AboutDonaciones";
import AboutGatitos from "./AboutGatitos";
import AboutMe from "./AboutSobreNosotros";
import AboutTienda from "./AboutTienda";

function About() {
  return (
    <div>
    <AboutGatitos/>
    <AboutMe/>
    <AboutTienda/>
    <AboutDonaciones/>
    </div>
  );
}

export default About;

