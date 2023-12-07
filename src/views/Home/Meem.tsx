import StyledHeader from "@/components/StyledHeader";

const services = [
  {
    icon: "/assets/images/meem/expert.svg",
    title: "Expertise That Delivers",
    slogan: "Designing Tomorow, Today.!",
    content:
      "We bring a wealth of experience and innovation to create cutting-edge solutions for your projects.",
  },
  {
    icon: "/assets/images/meem/sustain.svg",
    title: "Sustainablility at Heart",
    slogan: "Building a Greener Future!",
    content:
      "Our commitment to sustainable practices ensures a better environment for generations to come.",
  },
  {
    icon: "/assets/images/meem/client.svg",
    title: "Client-Centric Approach",
    slogan: "Your Vision, Our Priority!",
    content:
      "Your dreams are at the forefront of our design process, making your satisfaction our ultimate goal.",
  },
];

function Meem() {
  return (
    <div className="bg-cream py-28">
      <div className="container">
        <StyledHeader title="Why Meem?" singleLine={true} />
        <h1 className="mb-6 text-3xl sm:text-5xl md:text-6xl font-medium leading-10 text-head sm:w-[700px]">
          Unlock the Future of Architectural Creativity
        </h1>
        <div className="grid grid-cols-12 gap-8 sm:pt-10">
          {services.map((service, index) => (
            <div
              className="col-span-12 lg:col-span-4 bg-white p-10 flex flex-col gap-8"
              key={index}
            >
              <img src={service?.icon} className="w-16 h-16" alt="title" />

              <div>
                <h1 className="text-head text-4xl font-normal leading-[48px]">
                  {service?.title}
                </h1>
                <p className="text-subHead text-lg font-medium leading-8">
                  {service?.slogan}
                </p>
                <p className="text-subHead text-lg font-light leading-8">
                  {service?.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Meem;
