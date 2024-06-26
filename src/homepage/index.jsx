import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import image from "../assets/2.jpg";
import femi from "../assets/OLUWAFEMI.pdf";
import SocialMedia from "./socialHandle";

const Homepage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView]);

  return (
    <div
      id="home"
      className="bg-black w-screen h-screen sm:h-screen pt-12 relative"
    >
      <div
        className={` h-fit flex-col scroll-mt-12 gap-4 rounded-md lg:mx-auto font-bold my-auto `}
      >
        <img
          src={image}
          className="absolute top-32 duration-200 sm:w-4/5 w-[90%] md:w-3/5 rounded mx-auto opacity-70 h-3/5 object-contai sm:left-[10%] md:left-[20%]"
          alt=""
        />
        <section className="flex  justify-center items-center">
          <article className="absolute top-[40%] sm:top-[35%] md:top-[35%] duration-200  opacity-100 z-20">
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial={"hidden"}
              animate={control}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-[18px] duration-200 sm:text-[20px] xl:text-[24px] tracking-wider text-text3 text-center"
            >
              Hi there! My name is <br />
              <span className=" text-text4"> Joseph Oluwafemi</span> and <br />{" "}
              <span>
                <span className="text-text4">I'm a Fullstack </span>
              </span>
              developer
            </motion.div>
            <div className=" flex justify-between pt-6 max-w-[200px] w-full mx-auto text-text4 text-xl cursor-pointer">
              {SocialMedia.map((sm, i) => {
                return (
                  <a
                    key={i}
                    target="blank"
                    href={sm.link}
                    className="hover:text-bg1"
                  >
                    {sm.icon}
                  </a>
                );
              })}
            </div>
            <motion.div
              ref={ref}
              variants={{
                hidden: { opacity: 0, x: 75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial={"hidden"}
              animate={control}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center"
            >
              <a
                href={femi}
                target="blank"
                className="px-2 py-1  mt-8 text-text3 bg-gradient-to-r from-bg1 to-text4 focus:text-white duration-300 border focus:border border-transparent text-[14px] sm:text-[16px] font-medium hover:border-white rounded-xl w-fit mx-auto"
              >
                Download CV
              </a>
            </motion.div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Homepage;
