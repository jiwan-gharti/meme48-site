import StyledHeader from "@/components/StyledHeader";

function About() {
  return (
    <div className="container py-36" id="about">
      <div className="grid grid-cols-12">
        <div className="col-span-12 xl:col-span-6 h-[560px] sm:w-[592px] flex gap-2">
          <div className="h-[480px] sm:w-[280px] pb-20">
            <img
              src="/assets/images/about/image1.png"
              className="w-full h-full object-cover"
              alt="image 1"
            />
          </div>
          <div className=" h-[480px] sm:w-[280px] pt-20">
            <img
              src="/assets/images/about/image2.png"
              className="w-full h-full object-cover"
              alt="image 1"
            />
          </div>
        </div>

        <div className="col-span-12 xl:col-span-6 flex items-center">
          <div className="flex flex-col gap-6">
            <StyledHeader title="About Us" singleLine={true} />
            <h1 className="mb-6 text-3xl sm:text-5xl md:text-6xl font-medium leading-10 text-head sm:w-[592px]">
              We help to bring your dream to reality
            </h1>
            <p className="text-subHead text-lg font-light leading-8 text-justify">
              MEEM 48 ENGINEERING CONSULTANCY , a team of architects and
              engineers dedicated to creating inspiring and sustainable spaces.
              Our mission is to turn your visions into reality. Together, let’s
              build a better world through thoughtful design and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
