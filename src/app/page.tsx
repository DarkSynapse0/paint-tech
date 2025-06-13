"use client";
// import { useTranslation } from "react-i18next";
import Carousel from "@/components/ui/Carousel";

const HomePage = () => {
  // const { t } = useTranslation();

  return (
    <>
      <div className=" relative flex flex-col items-center justify-center ">
        <div>
          <Carousel />
        </div>
      </div>
    </>
  );
};

export default HomePage;
