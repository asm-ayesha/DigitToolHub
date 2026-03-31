import BannerImage from "../assets/banner.png";
import newImg from "../assets/new.png"
const Banner = () => {
    return (
        <div className="relative min-h-162.5 flex items-center overflow-hidden">
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-purple-500/10   text-purple-600 text-sm font-medium px-5 py-2 rounded-full">
                        <img className="animate-pulse" src={newImg} alt="" />
                        <p>New: AI-Powered Tools Available</p>
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter">
                        Supercharge Your
                        <br />
                        <span >
                            Digittal Workflow
                        </span>
                    </h1>

                    <p className="text-lg text-gray-500 max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="bg-linear-to-r from-blue-900 to-purple-600 border-2 border-transparent hover:border-purple-600 transition-all px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-purple-500/30 flex items-center gap-3 group text-white " >
                            Explore Products
                        </button>
                        <button className="border-2 border-purple-600 px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-purple-500/30 flex items-center gap-3 group text-purple-800">
                        <span className="text-purple-800"><i className="fa-brands fa-google-play"></i></span>
                            Watch Demo
                        </button>
                    </div>

                    
                </div>

                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        <img
                            className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl "
                            src={BannerImage}
                            alt="AI Models Banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;