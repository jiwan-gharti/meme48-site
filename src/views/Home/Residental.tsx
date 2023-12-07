import Slider from "react-slick";

function Residental() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/1.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase ">
                  Residential Project
                </p>
              </div>
              <div className="pb-28 pr-96">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/2.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase  ">
                  Medical Project
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/3.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase">
                  Retail Shops
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/4.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase">
                  Interior Fit-Out
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/5.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase ">
                  Residential Project
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/6.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase  ">
                  Medical Project
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/7.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase  ">
                  Retail Shops
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/8.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase  ">
                  Interior Fit-Out
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/9.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase ">
                  Residential Project
                </p>
              </div>
              <div className="pb-28 pr-96">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/10.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase  ">
                  Medical Project
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/11.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase  ">
                  Retail Shops
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/12.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase  ">
                  Interior Fit-Out
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/13.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase  ">
                  Residential Project
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/14.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase  ">
                  Medical Project
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/15.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase  ">
                  Retail Shops
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/16.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase  ">
                  Interior Fit-Out
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/17.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase ">
                  Residential Project
                </p>
              </div>
              <div className="pb-28 pr-96">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/18.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase  ">
                  Medical Project
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[660px] w-[360px]">
          <div className="bg-[url('/assets/images/residental/19.jpeg')]  flex justify-center h-full w-full bg-cover px-14 py-8">
            <div className="flex flex-col justify-between">
              <div className="flex justify-center">
                <p className="text-white text-xl font-normal leading-8 tracking-wider uppercase  ">
                  Retail Shops
                </p>
              </div>
              <div className="flex pb-28 pr-80 sm:pr-60 2xl:pr-96 items-end w-full h-full">
                <p className="text-white text-xl font-normal leading-8 tracking-[12.8px] w-full -rotate-90">
                  Architecture
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Residental;
