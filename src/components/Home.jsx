import Section from "./Section";

export default function Home() {
  return (
    <>
      <Section>
        <div className="mt-10 2xl:mt-[150px] flex flex-col sm:flex-row items-center 2xl:justify-around justify-between">
          <div className="py-4 border-1 border-red-700">
            <h1 className="mb-2">Hello, I am</h1>
            <h1 className="text-7xl mb-2 text-primary">Biraj Shrestha</h1>
            <h1 className="mb-2">Fullstack Developer</h1>
            <p className="text-justify lg:w-[450px] ">
              Worked with different nationalities and I believe in team work.
              Have learnt to cope with pressure situations. Can handle any kind
              of situation under pressure. Good communication skills, quick
              learner and hardworking. Have also learned that "team work makes
              the dream work" which is the key to success
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="https://www.birajshrestha.com.np/uploads/files/1708487051.png"
              alt="Biraj Shrestha"
              className="2xl:h-[700px] object-cover"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
