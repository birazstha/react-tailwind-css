import Section from "./Section";
import { motion } from "framer-motion";
import Services from "./Services";
import { services } from "../services";

export default function Home() {
  return (
    <>
      <Section>
        <div className="mt-10 2xl:mt-[150px] flex flex-col md:flex-row items-center 2xl:justify-around justify-between">
          <div className="py-4 border-1 border-red-700">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeInOut",
              }}
              className="mb-2 leading-9"
            >
              Hello, I am
              <br />
              <span className="text-7xl mb-2 text-primary">Biraj Shrestha</span>
              <br />
              <span>Software Developer</span>
            </motion.h1>

            <motion.p
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeInOut",
              }}
              className="text-justify lg:w-[450px]"
            >
              Worked with different nationalities and I believe in teamwork.
              Have learnt to cope with pressure situations. Can handle any kind
              of situation under pressure. Good communication skills, quick
              learner, and hardworking. Have also learned that "teamwork makes
              the dream work" which is the key to success.
            </motion.p>

            <div className="text-center md:text-start">
              <motion.button
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.2,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 0.2 },
                  ease: "easeInOut",
                }}
                className="bg-primary text-white mt-2 p-1 rounded-full mr-1 w-[200px] h-[45px]"
              >
                DOWNLOAD C.V
              </motion.button>
            </div>
          </div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="flex items-center justify-center"
          >
            <img
              src="https://www.birajshrestha.com.np/uploads/files/1708487051.png"
              alt="Biraj Shrestha"
              className="2xl:h-[700px] object-cover"
            />
          </motion.div>
        </div>

        <Services services={services} />
      </Section>
    </>
  );
}
