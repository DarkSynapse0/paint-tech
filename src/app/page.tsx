"use client";
import Carousel from "@/components/ui/Carousel";
import BlurText from "@/components/ui/BlurText";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Card from "@/components/ui/Card";

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
          <div className="bg-white lg:w-[50%] p-5 lg:p-10 gap-10 lg:flex flex-col items-center justify-center rounded-3xl shadow-xl">
            <div className=" w-full flex gap-5 flex-col items-center justify-center">
              <h1 className="lg:text-2xl  text-center">
                Welcome to <br />
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
            <Link
              href={"/about"}
              className=" mt-5 flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
            >
              About Us
            </Link>
          </div>
        </section>

        {/* Products */}
        <section className=" lg:px-10 px-5 py-20 w-full flex items-center justify-center bg-white">
          <div className="bg-white lg:w-[80%] p-5 lg:p-10 gap-10 lg:flex flex-col items-center justify-center rounded-3xl">
            <div className=" w-full flex gap-5 flex-col items-center justify-center">
              <h1 className="lg:text-2xl  text-center">
                <span>Our Products</span>
              </h1>
              <BlurText
                text={`"Wide Range Of Products And Colors`}
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="lg:text-2xl text-2xl  text-center mb-8 font-extrabold flex items-center justify-center text-gray-800"
              />
              <p>
                Color is a powerful tool that can truly transform a space and
                give it a unique feel. Whether you want to create a dramatic and
                classic atmosphere or something a little more soothing and
                elegant, our range of colors offers the ultimate choice to help
                you create your dream interior. Our neutral shades express
                comfort and sophistication, with a softness that is key in
                relaxing spaces such as living areas and bedrooms.
              </p>
            </div>
            <div className="relative gap-5 lg:gap-20 flex flex-wrap wrap-anywhere items-center justify-center">
              <Card
                name="Wodden Paints"
                imgUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthvnext.bing.com%2Fth%3Fid%3DOIP.7XUblYefKPB7LB7ntXqVHgHaL4%26cb%3Dthvnext%26pid%3DApi&f=1&ipt=55aa53fdefceac883584a7cd897450bc0ac3d3aea1a62dba40e0715cbd272b25&ipo=images"
              />
              <Card
                name="Interior Paints"
                imgUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.tuf1-KxEB9GAc2jHX52i6wHaHa%26r%3D0%26pid%3DApi&f=1&ipt=e86bd5cc30a1e3d047d37c283d241fd50bc13c84b0ac492ef6df43b6a9615e6f&ipo=images"
              />
              <Card
                name="Exterior Paints"
                imgUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.vgkcmDq_RBmyaUshVMbRugHaHa%26r%3D0%26pid%3DApi&f=1&ipt=b72f23edab8cfffc7731948909d79ae2cbf3ae9bc088c288f6f93022e08fdf15&ipo=images"
              />
              <Card
                name="Industrial Paints"
                imgUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2F7ec03297-7e71-4957-afc0-ac5d39ad6b91_1.dfcf58b5c47ca0e6fc7b275b6a12f424.jpeg%3FodnWidth%3D450%26odnHeight%3D450%26odnBg%3Dffffff&f=1&nofb=1&ipt=7d61bd44c0c2dc3d69bc3fb4e6f60027524f3b0e38b21cff472446c4f7e60d16"
              />
              <Card
                name="Thinner Paints"
                imgUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbing.com%2Fth%3Fid%3DOIP.JKfJcUQvxJLSFT3t6pO4qQHaHa%26r%3D0%26cb%3Dthvnextc2%26pid%3DApi&f=1&ipt=ac7c3c18d6b59527b6c1666e4e8a3241353b80d1dcb47e691addd04a74252030&ipo=images"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
