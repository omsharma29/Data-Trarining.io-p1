import TrustedBy from "../Pagecomponents/TrustedBy";
import CallToAction from "../Pagecomponents/CallToAction";
import Footer from "../Pagecomponents/Footer";

const TrustedCallFooterLayout = () => {
    return (
        <div>
            <div className=" h-screen">
                <div className="max-w-6xl mx-auto">
                    <TrustedBy />
                </div>
                <div className=" bg-gradient-to-r from-[#47D7AC] to-[#00a49b]">
                    <div className="max-w-6xl mx-auto">
                    <CallToAction />
                    </div>
                </div>
                <div className="bg-[#1E1E1E]">
                <div className="max-w-6xl mx-auto">
                    <Footer />
                </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedCallFooterLayout;
