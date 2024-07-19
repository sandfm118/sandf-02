import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Empty from "./components/Empty";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Bg from "./components/Bg";
import Loader from "./components/Loader";
import ScreenSizeMessage from "./components/ScreenSizeMessage";
import LocomotiveScroll from "locomotive-scroll";
import "../node_modules/locomotive-scroll/dist/locomotive-scroll.css"; // Import styles

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const scrollRef = useRef(null);
  const locoScrollRef = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    if (!isLoading && scrollRef.current) {
      locoScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        if (locoScrollRef.current) locoScrollRef.current.destroy();
      };
    }

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [isLoading]);

  const handleScrollTo = (target) => {
    if (locoScrollRef.current) {
      locoScrollRef.current.scrollTo(target, {
        offset: 0,
        duration: 5, // Adjust duration for smoothness
      });
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : isSmallScreen ? (
        <ScreenSizeMessage />
      ) : (
        <div
          className="w-full min-h-screen overflow-hidden text-[#fff] bg-black"
          data-scroll-container
          ref={scrollRef}
        >
          <Navbar handleScrollTo={handleScrollTo} />
         
          <div id="Home" data-scroll-section>
          <Bg />
          </div>
          <div id="about-us" data-scroll-section>
            <About />
          </div>
          <div id="skills" data-scroll-section>
            <Empty />
          </div>
          <div id="projects" data-scroll-section>
            <Projects />
          </div>
          <div id="connect" data-scroll-section>
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
