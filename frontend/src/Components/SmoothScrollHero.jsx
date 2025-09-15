import { ReactLenis } from "lenis/react"; // ✅ fixed import
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { useRef } from "react";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Hero />
        <Schedule />
      </ReactLenis>
    </div>
  );
};

const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200)", // 👨‍💻 Web dev team
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px] space-y-10">
      {/* Web Development */}
      <ParallaxImg
        src="https://dianapps.com/blog/wp-content/uploads/2024/06/Add-a-heading-39.png"
        alt="Web Development"
        start={-200}
        end={200}
        className="w-full sm:w-2/3 md:w-1/2"
      />
      {/* App Development */}
      <ParallaxImg
        src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg"
        alt="App Development"
        start={200}
        end={-250}
        className="mx-auto w-full sm:w-3/4 md:w-2/3"
      />
      {/* UI/UX Design */}
      <ParallaxImg
        src="https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200"
        alt="UI/UX Design"
        start={-200}
        end={200}
        className="ml-auto w-full sm:w-2/3 md:w-1/2"
      />
      {/* Coding Workspace */}
      <ParallaxImg
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200"
        alt="Coding Workspace"
        start={0}
        end={-500}
        className="mx-auto w-full sm:w-2/3 md:w-5/12"
      />
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);

  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={`${className} rounded-lg shadow-lg`}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};

const Schedule = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24 sm:py-32 text-white">
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-12 text-3xl sm:text-4xl font-black uppercase text-zinc-50"
      >
        We Developed
      </motion.h1>
      <ScheduleItem title="Website Dev"  location="Bhubaneswar" />
      <ScheduleItem title="Mobile App" location="Bhubaneswar" />
      <ScheduleItem title="UI/UX Design"  location="Bhubaneswar" />
      <ScheduleItem title="Graphics Design"  location="Bhubaneswar" />
    </section>
  );
};

const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-zinc-800 px-3 pb-6"
    >
      <div>
        <p className="mb-1 text-lg sm:text-xl text-zinc-50">{title}</p>
        <p className="text-xs sm:text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="mt-2 sm:mt-0 flex items-center gap-1.5 text-xs sm:text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};
