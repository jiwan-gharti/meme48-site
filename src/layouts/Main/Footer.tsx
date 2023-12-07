import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/social-button";

const Footer = () => {
  const data = [
    {
      title: "About",
      url: "#",
    },
    {
      title: "Services",
      url: "#",
    },
    {
      title: "Projects",
      url: "#",
    },
    {
      title: "Contact Us",
      url: "#",
    },
    {
      title: "Privacy Policy",
      url: "#",
    },
  ];
  return (
    <footer className="  bg-lightBlue pb-10 pt-12 pl-131  w-full">
      <div className="container mx-auto max-w-screen-xl ">
        <div className="flex flex-col items-start justify-center gap-8 md:flex-row sm:gap-14">
          <div className="mb-2 flex h-full flex-col items-start justify-between sm:mb-6 md:w-1/3 md:mb-0">
            <Link href="/">
              <Image
                src="/assets/logo/logoWhite.svg"
                className="mr-3"
                width={"100"}
                height={"100"}
                alt="FlowBite Logo"
              />
            </Link>
            {/* <p className="mt-7 text-lg md:text-sm text-grey text-justify">
              Fermentum odio eu feugiat pretiums nibh. Dolor sit consectetur
              adipiscini over the aenean bcom here.
            </p>
            <div className="flex gap-2 mt-7">
              <Button className="rounded-full px-4" size={"default"}>
                <Image
                  src="/assets/images/socials/fb.svg"
                  width={"9"}
                  height={"10"}
                  alt="Facebook Logo"
                />
              </Button>
              <Button className="rounded-full" size={"default"}>
                <Image
                  src="/assets/images/socials/twitter.svg"
                  width={"15"}
                  height={"10"}
                  alt="Twitter Logo"
                />
              </Button>
              <Button className="rounded-full" size={"default"}>
                <Image
                  src="/assets/images/socials/linkedin.svg"
                  width={"15"}
                  height={"10"}
                  alt="LinkedIn Logo"
                />
              </Button>
              <Button className="rounded-full" size={"default"}>
                <Image
                  src="/assets/images/socials/pinterest.svg"
                  width={"15"}
                  height={"10"}
                  alt="Pinterest Logo"
                />
              </Button>
              <Button className="rounded-full" size={"default"}>
                <Image
                  src="/assets/images/socials/youtube.svg"
                  width={"15"}
                  height={"10"}
                  alt="Youtube Logo"
                />
              </Button>
            </div> */}
          </div>

          <div className="flex w-full flex-1 flex-col  justify-center sm:w-auto sm:flex-row sm:justify-between ">
            <div className="w-80 md:w-50 lg:w-80 p-2.5 pb-3.5 pl-5 flex flex-col gap-7">
              <div className="bg-blue-500 bg-opacity-20 w-6 h-6 rounded-full absolute mr-2 " />
              <div className="ml-2">
                <h2 className="text-xl font-bold text-head ">Company</h2>
              </div>
              <ul className="pt-4 text-sm">
                {data.map((el, index) => (
                  <li
                    key={index}
                    className="mb-2 list-disc font-medium text-grey custom-bullet "
                  >
                    <a href={el?.url} className="hover:underline">
                      {el?.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-80 md:w-50 lg:w-80  pt-2.5 pb-3.5 flex flex-col gap-7">
              <div className="bg-blue-500 bg-opacity-20 w-6 h-6 rounded-full absolute mr-2 " />
              <div className="ml-2">
                <h2 className=" text-xl font-bold text-head ">Contact</h2>
              </div>
              <ul className="pt-4 text-sm">
                <li className="mb-2 font-medium text-primary ">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2 pt-2">
                      <Image
                        src="/assets/images/footer/map.svg"
                        width={"20"}
                        height={"20"}
                        alt="Phone Icon"
                      />
                    </div>
                    <div className="col-span-10">
                      <p className="text-lg text-onyx font-medium leading-7">
                        Office Location:
                      </p>
                      <p className="text-grey text-base font-normal leading-7 ">
                        AbuDhabi - UAE
                      </p>
                    </div>
                  </div>
                </li>
                {/* <li className="mb-2 font-medium text-primary ">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2 pt-2">
                      <Image
                        src="/assets/images/footer/phone.svg"
                        width={"24"}
                        height={"24"}
                        alt="Phone Icon"
                      />
                    </div>
                    <div className="col-span-10">
                      <p className="text-lg text-onyx font-medium leading-7">
                        Talk with Support:
                      </p>
                      <p className="text-grey text-base font-normal leading-7 ">
                        (OO) 123 456 789
                      </p>
                    </div>
                  </div>
                </li> */}
                <li className="mb-2 font-medium text-primary ">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2 pt-2">
                      <Image
                        src="/assets/images/footer/mail.svg"
                        width={"24"}
                        height={"24"}
                        alt="Phone Icon"
                      />
                    </div>
                    <div className="col-span-10">
                      <p className="text-lg text-onyx font-medium leading-7">
                        Email:
                      </p>
                      <p className="text-grey text-base font-normal leading-7 ">
                        info@meem48.com
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="justify-between px-2 sm:flex sm:items-center">
          <span className="mt-5 text-right  text-sm text-lightGrey sm:text-center">
            @ Copyright 2023{" "}
            <a href="#" className="hover:underline">
              meem48.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
