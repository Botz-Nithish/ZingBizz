"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const GOOD_GREEN = "rgba(123, 178, 72, 1)";
const NOT_BLUE = "rgba(35, 84, 113, 1)";

type FitItem = { text: string };

const goodFit: FitItem[] = [
  { text: "You want a long-term partner, not a one-off vendor." },
  { text: "You care about design, performance, and measurable outcomes." },
  { text: "You’re open to collaboration and quick iterations." },
  { text: "You value clear communication and realistic timelines." },
];

const notAGoodFit: FitItem[] = [
  { text: "You’re looking for the cheapest option, regardless of quality." },
  { text: "You need “everything done yesterday” without trade-offs." },
  { text: "You prefer zero involvement or feedback during the process." },
  { text: "You want heavy templates with no strategy or customization." },
];

function ThumbIcon({
  color,
  direction,
}: {
  color: string;
  direction: "up" | "down";
}) {
  return (
    <svg
      width="48"
      height="46"
      viewBox="0 0 48 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={direction === "down" ? "rotate-180" : ""}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M11.25 15.2038H0V45.0753H11.25V15.2038Z" fill={color} />
      <path
        d="M46.9774 27.689C46.9774 26.6115 46.622 25.616 46.0231 24.8145C47.2195 23.9425 48 22.5268 48 20.9305C48 18.2871 45.8622 16.1366 43.2347 16.1366H32.4023L33.9098 10.898V8.388C33.9098 3.76289 30.1695 0 25.5721 0C24.4573 0 23.5505 0.912404 23.5505 2.03381V7.5984C22.7987 8.80884 18.6238 13.5218 14.0625 18.4595V43.2163L17.9548 44.6847C20.2683 45.5575 22.6942 46 25.165 46H40.1668C42.7943 46 44.932 43.8493 44.932 41.206C44.932 40.1289 44.5771 39.1336 43.9787 38.3323C45.1749 37.4604 45.9547 36.0437 45.9547 34.4474C45.9547 33.3699 45.5993 32.3744 45.0005 31.5729C46.1969 30.7012 46.9774 29.2855 46.9774 27.689Z"
        fill={color}
      />
    </svg>
  );
}

function FitCard({
  accentColor,
  title,
  items,
  thumbDirection,
  enterFrom,
  bulletIconSrc,
}: {
  accentColor: string;
  title: string;
  items: FitItem[];
  thumbDirection: "up" | "down";
  enterFrom: "left" | "right";
  bulletIconSrc: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, x: enterFrom === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      whileHover="hover"
      className="group rounded-3xl p-8 md:p-10"
    >
      <div className="flex items-start gap-4">
        <motion.div
          variants={{
            hover: { scale: 1.1, y: -2 },
          }}
          transition={{ type: "spring", stiffness: 420, damping: 18 }}
          className="shrink-0"
        >
          <ThumbIcon color={accentColor} direction={thumbDirection} />
        </motion.div>

        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-semibold leading-tight">
            <span >{title}</span>
          </h3>
          
        </div>
        
      </div>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="w-full h-[1px] mt-8 bg-white origin-left"
      />

      <motion.ul
        className="mt-8 space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-120px" }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.08, delayChildren: 0.12 },
          },
        }}
      >
        {items.map((item) => (
          <motion.li
            key={item.text}
            className="flex items-start gap-3"
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            <span className="mt-0.5 shrink-0">
              <Image src={bulletIconSrc} alt="" width={24} height={24} />
            </span>
            <span className="text-base md:text-lg leading-relaxed ]">
              {item.text}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.article>
  );
}

export default function AreWeGoodFit() {
  return (
    <section className="w-full py-24 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Are we a good fit?
          </h2>
          <p className="mt-3 text-base md:text-lg  max-w-3xl">
            This isn’t for everyone — and that’s a good thing. Here’s who to know.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FitCard
            title="Good Fit"
            accentColor={GOOD_GREEN}
            items={goodFit}
            thumbDirection="up"
            enterFrom="left"
            bulletIconSrc="/assets/correct.svg"
          />
          <FitCard
            title="Probably Not"
            accentColor={NOT_BLUE}
            items={notAGoodFit}
            thumbDirection="down"
            enterFrom="right"
            bulletIconSrc="/assets/wrong.svg"
          />
        </div>
      </div>
    </section>
  );
}


