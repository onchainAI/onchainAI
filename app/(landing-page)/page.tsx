import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import Sliders from "./_components/slider/sliders";
import Footer from "@/components/ui/footer";
import BottomSection from "@/components/ui/bottom-section";
import SecondSection from "./_components/second-section";
import ThirdSection from "./_components/third-section";

const LandingPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
                <FirstSection />
                <Sliders />
                <SecondSection />
                <ThirdSection />
            </main>
            <BottomSection />
            <Footer />
        </div>);
}

export default LandingPage;