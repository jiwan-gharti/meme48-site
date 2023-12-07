import StyledHeader from "@/components/StyledHeader";
import Slider from "react-slick";

function Testimonials() {
  const settings = {
    dots: true,
    customPaging: (i: any) => (
      <div className="custom-dot" /> // Add a custom-dot class for styling
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="container py-36">
      <div className="grid grid-cols-12 gap-5 sm:gap-10 w-full">
        <div className="col-span-12 lg:col-span-6 w-full flex flex-col pt-10 gap-10">
          <div className="flex flex-col gap-3">
            <StyledHeader title="TESTIMONIALS" singleLine={true} />
            <h1 className="mb-6 text-3xl sm:text-6xl font-medium leading-10 text-head sm:w-[592px]">
              Our client reviews
            </h1>
          </div>

          <Slider {...settings}>
            <div>
              <img
                src="/assets/images/quote.svg"
                alt="Quote"
                className="w-14 h-14"
              />
              <p className=" text-base font-medium leading-8 text-woldGrey text-justify w-11/12 lg:w-80 xl:w-[461px] py-5">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia.
              </p>

              <div className="flex gap-7 pt-5">
                <img
                  src="/assets/images/testimonials/client1.png"
                  alt="Client"
                  className="w-60 h-60"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-wolfGrey font-bold text-xl leading-8">
                    Jane Doe
                  </p>
                  <p>Founder, X Company</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/assets/images/quote.svg"
                alt="Quote"
                className="w-14 h-14"
              />
              <p className=" text-base font-medium leading-8 text-woldGrey text-justify w-11/12 lg:w-80 xl:w-[461px] py-5">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia.
              </p>

              <div className="flex gap-7 pt-5">
                <img
                  src="/assets/images/testimonials/client1.png"
                  alt="Client"
                  className="w-60 h-60"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-wolfGrey font-bold text-xl leading-8">
                    Jane Doe
                  </p>
                  <p>Founder, X Company</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="col-span-12 lg:col-span-6  sm:w-full h-[500px] sm:h-[767px] sm:pr-14 pt-14 sm:pt-0">
          <img
            src="/assets/images/testimonial.png"
            className="w-full h-full object-cover"
            alt="Testimonial"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
