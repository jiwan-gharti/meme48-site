import { Link as ScrollLink } from "react-scroll";

function Award() {
  return (
    <div className="bg-head py-6 ">
      <div className="container flex flex-row items-center justify-between gap-5 sm:gap-[193px]">
        <div className="hidden sm:block">
          <ScrollLink
            to={"contact"}
            smooth={true}
            duration={0}
            key={"Contact"}
            className="cursor-pointer"
          >
            <div className=" animate-spin animation-delay-5s">
              <img src="/assets/images/ctaBtn.svg" alt="Rotating Image" />
            </div>
          </ScrollLink>
        </div>
        {/* <div className="flex justify-center items-center w-1/6">
          <h6 className="text-white text-base font-semibold leading-8 ">
            Upcoming initiatives 2023
          </h6>
        </div> */}
        <div className="flex justify-center items-center">
          <div className="h-px w-16 bg-white opacity-50" />
        </div>
        <div className="flex justify-center items-center gap-3">
          <img src="/assets/images/award1.svg" alt="award" />
          <p className="text-sm text-ashGrey font-normal leading-6 uppercase">
            AI Enhanced Chatbots in Facilities Management, A Mixed Methods
            Research.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Award;
