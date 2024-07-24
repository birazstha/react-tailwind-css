import Section from "./Section";
import { useState } from "react";
import Button from "./UI/Button";
import { motion } from "framer-motion";

export default function PracticeZone() {
  const [counter, setCounter] = useState(1);
  const [btnStatus, setBtnStatus] = useState("");

  function test(sign) {
    if (counter === 1) {
      setBtnStatus(1);
    } else {
      setBtnStatus("");
    }

    setCounter((oldValue) => (sign === "add" ? oldValue + 1 : oldValue - 1));
  }

  return (
    <Section>
      {/* <h1>Practice Here</h1>
      <hr />
       <h1 className="text-primary text-3xl">{counter}</h1>
      <Button fnc={() => test("add")}>Add</Button>
      <Button fnc={() => test("sub")} isDisabled={btnStatus}>
        Subtract
      </Button> */}

      <div className="mt-20 flex justify-center items-center">
        <motion.div
          initial={{
            rotate: "0deg",
            scale: 0,
          }}
          animate={{
            rotate: "180deg",
            scale: 1,
          }}
          transition={{
            duration: "1",
            type: "spring",
            ease: "easeIn",
          }}
          className="bg-primary h-80 w-80"
        ></motion.div>
      </div>
    </Section>
  );
}
