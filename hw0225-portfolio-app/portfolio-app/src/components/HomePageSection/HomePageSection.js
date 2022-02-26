import React from "react";

import MainSection from "../MainSection/MainSection";
import AboutSection from "../AboutSection/AboutSection";
import SummarySection from "../SummarySection/SummarySection";
import ContactSection from "../ContactSection/ContactSection";

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