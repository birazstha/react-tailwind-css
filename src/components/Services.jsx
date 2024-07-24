import { motion } from "framer-motion";

export default function Services({ services }) {
  return (
    <>
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.2,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.6 },
          ease: "easeInOut",
        }}
        className="text-primary text-3xl text-center mb-4"
      >
        My Services
      </motion.h1>

      <div className="grid md:grid-cols-3 gap-4 2xl:grid-cols-5 p-4">
        {services.map((service) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.2,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.6 },
              ease: "easeInOut",
            }}
            className="bg-primary p-5 min-h-[300px] max-h-[300px] w-80 text-white flex flex-col items-center justify-center text-center leading-loose rounded-xl"
          >
            <i className={`${service.icon} text-5xl mb-5`}></i>
            <h1>{service.title}</h1>
            <span className="overflow-hidden p-2">{service.description}</span>
          </motion.div>
        ))}
      </div>
    </>
  );
}
