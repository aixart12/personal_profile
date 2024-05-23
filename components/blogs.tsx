"use client";
import { blogssData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Blog from "./blog";
import SectionHeading from "./section-heading";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import useCheckMobileScreen from "@/hooks/checkMobileScreen";

export const Blogs = () => {
  const { ref } = useSectionInView("Blogs", 0.5);

  const [isHovering, setIsHovering] = useState(true);

  const isMobile = useCheckMobileScreen;

  return (
    <section ref={ref} id="blogs" className="scroll-mt-28 mb-28">
      <SectionHeading>
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <h2 className="text-3xl font-medium capitalize ">My Blogs </h2>
          <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="https://dev.to/aixart"
            target="_blank"
          >
            More{" "}
            <BsBoxArrowUpRight className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        </motion.div>
      </SectionHeading>

      <div>
        {!!isMobile ? (
          <>
            {blogssData.map((project, index) => (
              <React.Fragment key={index}>
                <Blog {...project} setIsHovering={(e) => {}} />
              </React.Fragment>
            ))}
          </>
        ) : (
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isHovering ? 0 : -(blogssData.length * 100) }} // Stops moving when hovering
            transition={{
              repeat: Infinity,
              duration: blogssData.length * 10,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex gap-4"
          >
            {blogssData.map((blog, index) => (
              <Blog
                key={index}
                {...blog}
                setIsHovering={(e) => setIsHovering(e)}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};
