import Banner from "../banner/Banner";
import Brands from "../brands/Brands";
import Faq from "../faq/Faq";
import Features from "../features/Features";
import HowItWorks from "../how-it-works/HowItWorks";
import OurServices from "../our-services/OurServices";

export default function Home() {
    return (
        <>
            <title>Home - A parcel delivery application</title>
            <Banner />
            <HowItWorks />
            <OurServices />
            <Brands />
            <Features />
            <Faq />
        </>
    );
}
