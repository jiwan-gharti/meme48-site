import StyledHeader from "@/components/StyledHeader";

function Tailored() {
  return (
    <div className="container py-36">
      <div className="grid grid-cols-12 gap-8 sm:gap-10">
        <div className="col-span-12 sm:col-span-5 w-[360px] sm:w-full h-[500px] sm:h-[700px]">
          <img
            src="/assets/images/tailored.png"
            alt="tailored"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-12 sm:col-span-7 flex flex-col sm:justify-center gap-8">
          <div>
            <h1 className="mb-6 text-2xl  sm:text-4xl font-medium text-head">
              Tailored to you
            </h1>

            <p className="text-subHead text-lg font-light leading-8 text-justify w-[360px] sm:w-auto">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex justify-start">
              <div className="bg-cream px-8 py-10 w-[395px]">
                <div className="grid grid-cols-12">
                  <div className="col-span-2">
                    <img src="/assets/images/value.svg" alt="Value" />
                  </div>

                  <div className="col-span-10">
                    <h1 className="text-charcoal text-xl font-bold leading-8">
                      Our Value
                    </h1>
                    <p className="text-wolfGrey">
                      Enabling limitless design exploration, and leaving an
                      indelible mark on the architectural world.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex sm:justify-end">
              <div className="bg-cream px-8 py-10 w-[395px]">
                <div className="grid grid-cols-12">
                  <div className="col-span-2">
                    <img src="/assets/images/mission.svg" alt="Mission" />
                  </div>

                  <div className="col-span-10">
                    <h1 className="text-charcoal text-xl font-bold leading-8">
                      Our Mission
                    </h1>
                    <p className="text-wolfGrey">
                      Design and engineer functional, sustainable, and inspiring
                      spaces that improve lives and communities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tailored;
