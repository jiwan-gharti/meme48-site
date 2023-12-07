import StyledHeader from "@/components/StyledHeader";
import { Button } from "@/components/ui/button";

function Work() {
  return (
    <div className=" bg-cream py-36" id="work">
      <div className="container grid grid-cols-12 gap-14 sm:gap-10">
        <div className="col-span-12 sm:col-span-6 flex flex-col gap-10 sm:gap-24 w-[360px] sm:w-full">
          <div>
            <StyledHeader title="Recent Work" singleLine={true} />
            <h1 className="mb-6 text-3xl sm:text-6xl font-medium leading-10 text-head sm:w-[592px]">
              Some of our crafts made with love
            </h1>
          </div>

          <div className="flex flex-col gap-10">
            <img
              src="/assets/images/work/work.png"
              alt="Villa Furnishing"
              className=" w-full h-[444px] object-cover"
            />
            <h1 className="text-head text-2xl sm:text-4xl leading-[48px] font-normal">
              Villa Furnishing & Interior
            </h1>
            <p className="text-subHead text-base sm:text-lg font-light leading-8 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              fringilla dui amet faucibus nam. Erat id laoreet posuere etiam
              morbi.
            </p>
          </div>

          <Button
            size="default"
            variant="default"
            className="uppercase flex gap-2"
          >
            Contact us
            <img
              src="/assets/images/arrow.svg"
              alt="Arrow Icon"
              className="w-5 h-5"
            />
          </Button>
        </div>

        <div className="col-span-12 sm:col-span-6 sm:pl-14 sm:pr-2 flex flex-col gap-10 sm:gap-24 w-[360px] sm:w-full">
          <div className="flex flex-col gap-10">
            <img
              src="/assets/images/work/work2.png"
              alt="Villa Furnishing"
              className=" w-full h-[360px] object-cover"
            />
            <h1 className="text-head text-2xl sm:text-4xl leading-[48px] font-normal">
              Luxury Hotel Renovation
            </h1>
            <p className="text-subHead text-base sm:text-lg font-light leading-8 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              fringilla dui amet faucibus nam. Erat id laoreet posuere etiam
              morbi.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            <img
              src="/assets/images/work/work3.png"
              alt="Villa Furnishing"
              className=" w-full h-[360px] object-cover"
            />
            <h1 className="text-head text-2xl sm:text-4xl leading-[48px] font-normal">
              Residence Swimming Pool
            </h1>
            <p className="text-subHead text-base sm:text-lg font-light leading-8 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              fringilla dui amet faucibus nam. Erat id laoreet posuere etiam
              morbi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
