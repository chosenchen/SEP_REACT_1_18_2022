import React from "react";

import MainSection from "../MainSection/MainSection";
import AboutSection from "../AboutSection/AboutSection";
import NavigationBar from "../Navigation/NavigationBar/NavigationBar";
import SummarySection from "../SummarySection/SummarySection";
import ContactSection from "../ContactSection/ContactSection";
import Footer from "../Footer/Footer";

const HomePageSection = () => {
    return (
        <div>
            <MainSection />
            <AboutSection />
            <SummarySection />
            <ContactSection />
        </div>
    );
}
export default HomePageSection;