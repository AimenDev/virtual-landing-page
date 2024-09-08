import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import VideoGallery from "./video-gallery";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20" id="hero">
      <h1 className="sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build
        <br />
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md hover:scale-105 hover:shadow-lg transition-transform transition-shadow duration-300"
        >
          Start for free
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md border hover:scale-105 hover:shadow-lg transition-transform transition-shadow duration-300"
        >
          Documentation
        </a>
      </div>
      <VideoGallery 
      video1={video1}
      video2={video2}
    />
    </div>
  );
};

export default HeroSection;
