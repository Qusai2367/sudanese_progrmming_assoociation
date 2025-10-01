import MainHero from "./components/Home/MainHero";
import NavBar from "./components/Navbar";
import Services from "./components/Service/Services";
import Experience from "./components/Home/Experience/Experience";
import Portfolio from "./components/Home/Portfolio/Portfolio";
import Testimonials from "./components/Home/Testimonials/Testimonials";
import CTA from "./components/Home/CTA";
import Blog from "./components/Home/Blog";
import Loader from "./components/Loader";

export default function Home() {
    return (
        <>
            <Loader delay={2000} />
            <NavBar />
            <main>
                <MainHero />
                <Services />
                <Experience />
                <Portfolio />
                <Testimonials />
                <CTA />
                <Blog />
            </main>
        </>
    );
}
