"use client";
import Carousel from "@/components/ui/Carousel";
import BlurText from "@/components/ui/BlurText";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const HomePage = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <>
      <div className=" relative overflow-hidden flex flex-col items-center justify-center ">
        <div>
          <Carousel />
        </div>
        <section
          className=" lg:px-10 px-5 py-20 w-full flex items-center justify-center"
          style={{
            background: `url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8&auto=format&fit=crop&w=1170&q=80")`,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <div className="bg-white lg:w-[80%] p-5 lg:p-10 gap-10 lg:flex flex-col items-center justify-center rounded-3xl shadow-xl">
            <div className=" w-full flex gap-5 flex-col items-center justify-center">
              <h1 className="lg:text-2xl  text-center">
                Welcome to{" "} <br />
                <span className="font-bold">Paint Tech Contracting WLL</span>
              </h1>
              <BlurText
                text={`"Excellence in Every Stroke"`}
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="lg:text-7xl text-4xl  text-center mb-8 font-extrabold flex items-center justify-center text-gray-800"
              />
            </div>
            <div className="w-full flex items-center justify-center">
              <motion.iframe
                ref={ref}
                initial={{ opacity: 0, y: 30 }}
                animate={controls}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                src="https://www.youtube.com/embed/MN831pVBjEE?si=4nfokr8Rp0doGN0v"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className=" lg:w-[800px] lg:h-[400px] rounded-3xl shadow-xl"
              />
            </div>
            <Link href={"/about"} className=" mt-5 flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              About Us
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
