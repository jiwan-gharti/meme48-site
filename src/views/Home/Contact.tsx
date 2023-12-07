import StyledHeader from "@/components/StyledHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Contact() {
  return (
    <div className="bg-cream py-36" id="contact">
      <div className="container flex justify-center">
        {/* <div className="hidden sm:block col-span-12 md:col-span-7 flex items-center">
          <img
            src="/assets/images/contact/contact.png"
            alt="Interior Model"
            className="w-full h-[300px] sm:h-[592px]"
          />
        </div> */}

        {/* Enquiry Form */}
        <div className=" w-full sm:w-1/2">
          <div className="  flex flex-col gap-10 justify-center">
            <div className="flex flex-col gap-5">
              <StyledHeader title="Contact Us" singleLine={true} />
              <h1 className="mb-6 text-3xl sm:text-5xl md:text-6xl font-medium leading-10 text-head sm:w-[592px]">
                Get a quote
              </h1>
              <p className="text-grey">
                Feel free to get a quotation. Just fill this form and send it to
                us. We will contact you as early as possible.
              </p>
            </div>
            <div className="flex flex-col gap-10 xl:gap-6 w-full">
              <Input
                id="myInput"
                type="text"
                placeholder="Name"
                className="w-full h-14 border pl-10 pr-12 pl placeholder:text-head placeholder:font-semibold"
                style={{
                  backgroundImage:
                    "url(/assets/images/contact/icons/avatar.svg)", // Set the background image
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left 10px center",
                  backgroundSize: "20px 20px", // Adjust the size of the icon
                }}
              />

              <Input
                id="myInput"
                type="text"
                placeholder="Email"
                className="w-full h-14 border pl-10 pr-12 placeholder:text-head placeholder:font-semibold"
                style={{
                  backgroundImage: "url(/assets/images/contact/icons/mail.svg)", // Set the background image
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left 10px center",
                  backgroundSize: "20px 20px", // Adjust the size of the icon
                }}
              />

              <Input
                id="myInput"
                type="text"
                placeholder="Phone"
                className="w-full h-14 border pl-10 pr-12 placeholder:text-head placeholder:font-semibold"
                style={{
                  backgroundImage:
                    "url(/assets/images/contact/icons/phone.svg)", // Set the background image
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left 10px center",
                  backgroundSize: "20px 20px", // Adjust the size of the icon
                }}
              />

              <Input
                id="myInput"
                type="text"
                placeholder="Write your message here"
                className="w-full border pl-10 pr-12 placeholder:text-head placeholder:font-semibold"
                textarea={true} // Specify textarea prop as true
                rows={4}
                multiline={true}
                style={{
                  backgroundImage:
                    "url(/assets/images/contact/icons/message.svg)", // Set the background image
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "10px 10px", // Set the background position to left 10px and top 10px
                  backgroundSize: "20px 20px", // Adjust the size of the icon
                }}
              />
            </div>
            <div>
              <Button
                className="text-lg text-white font-bold uppercase px-11 py-5 w-52"
                variant={"default"}
                size={"default"}
              >
                Get a quote
              </Button>
            </div>
          </div>
        </div>

        {/* <div className="block sm:hidden col-span-12 md:col-span-7 flex items-center pt-14 ">
          <img
            src="/assets/images/contact/contact.png"
            alt="Interior Model"
            className="w-full h-[300px] sm:h-[592px]"
          />
        </div> */}
      </div>
    </div>
  );
}

export default Contact;
