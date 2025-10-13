import Banner from "../components/Banner";
import ServiceFilter from "../components/Service/ServiceFilter";
import ServicesList from "../components/Service/ServicesList";
import { providers } from "../data/providers";
import HandleCLinetService from "../components/Service/HandleCLinetService";
import Loader from "../components/Loader";

export const metadata = {
    title: "SPA - Services",
};
const Services = () => {
    return (
        <div className="">
        <Loader delay={2000} />
            <Banner
                mainDescription="Connect with skilled professionals and service providers. Browse our talented community of developers, designers, and tech experts ready to bring your projects to life."
                mainTitle="Service Providers"
            />
            <HandleCLinetService />
        </div>
    );
};

export default Services;
