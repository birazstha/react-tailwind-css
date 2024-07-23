import Section from "./Section";

export default function Home() {
  return (
    <>
      <Section>
        <div className="mt-10 2xl:mt-[150px] flex flex-col sm:flex-row items-center 2xl:justify-around justify-between">
          <div>
            <h1 className="mb-2">Hello, I am</h1>
            <h1 className="text-7xl mb-2 text-primary">Biraj Shrestha</h1>
            <h1 className="mb-2">Fullstack Developer</h1>
            <p className="text-justify w-[450px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              repellat totam adipisci, aliquam, sint perspiciatis obcaecati
              repellendus voluptatem velit dolore possimus eligendi atque itaque
              reiciendis consectetur? Id sed asperiores maiores nostrum delectus
              totam incidunt placeat, maxime tempora quae vero obcaecati quas!
              Adipisci perspiciatis alias nesciunt fugiat molestias placeat
              optio rem!
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
