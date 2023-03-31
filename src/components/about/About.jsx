import React from "react";
import AboutDonaciones from "./AboutDonaciones";
import AboutGatitos from "./AboutGatitos";
import AboutMe from "./AboutSobreNosotros";
import AboutTienda from "./AboutTienda";

function About() {
  return (
    <div>
    <AboutGatitos/>
    <AboutDonaciones/>
    <AboutTienda/>
    <AboutMe/>
    </div>
  );
}

export default About;

