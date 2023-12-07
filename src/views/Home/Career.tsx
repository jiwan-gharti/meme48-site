import React, { Fragment, useRef, useState } from "react";
import StyledHeader from "@/components/StyledHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Define a type for jobDetailsVisibility
type JobDetailsVisibility = {
  [key: number]: boolean;
};

function Career() {
  const career = [
    {
      id: 1,
      title: "Civil Engineering",
      type: "Work Remotely",
    },
    {
      id: 2,
      title: "Interior Designer",
      type: "Work Remotely",
    },
    {
      id: 3,
      title: "Draftmanship",
      type: "Work Remotely",
    },
    {
      id: 3,
      title: "IT Engineering",
      type: "Work Remotely",
    },
    {
      id: 4,
      title: "Electrical Engineering",
      type: "Work Remotely",
    },
    {
      id: 5,
      title: "Mechanical Engineering",
      type: "Work Remotely",
    },
  ];

  const requirement = [
    { title: "Bachelor’s degree in Civil Engineering or related field." },
    { title: "Professional Engineer (PE) license is preferred." },
    { title: "Excellent project management and organizational skills." },
    { title: "Effective communication skills, both written and verbal." },
    { title: "Ability to work collaboratively in a team environment." },
    { title: "Problem-solving mindset and attention to detail." },
  ];

  const [activeCareer, setActiveCareer] = useState<number | null>(null);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const [formVisible, setFormVisible] = useState(false);
  const [activeJobId, setActiveJobId] = useState<number | null>(null);

  function handleApplyNow(jobId: number) {
    setActiveJobId(jobId);
    setFormVisible(true);
  }

  function handleClose() {
    setActiveJobId(null);
    setFormVisible(false);
  }
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [jobDetailsVisibility, setJobDetailsVisibility] =
    useState<JobDetailsVisibility>({});

  function handleFileInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  }

  function handleChooseFileClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  function handleClearFile() {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleApplyNowClick(jobId: number) {
    setJobDetailsVisibility((prevState) => ({
      ...prevState,
      [jobId]: !prevState[jobId],
    }));
    setActiveCareer(jobId);
  }

  function handleCloseClick(jobId: number) {
    setJobDetailsVisibility((prevState) => ({
      ...prevState,
      [jobId]: false,
    }));
    setActiveCareer(null);
  }

  return (
    <div className="bg-cream py-36" id="work">
      <div className="container">
        <div>
          <StyledHeader title="Career" singleLine={true} />
          <h1 className="mb-6 text-3xl sm:text-5xl md:text-6xl font-medium leading-10 text-head sm:w-[592px]">
            Join Our Team on a Project-by-Project Basis!
          </h1>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-6">
              <p className="text-black text-lg font-light leading-8 text-justify">
                We are actively seeking talented professionals in the following
                fields:
                <div className="pt-3 pb-3">
                  {career?.map((item, index) => (
                    <div className="flex gap-3" key={index}>
                      <img src="/assets/images/arrowBullet.svg" alt="Bullet" />
                      <p className="text-black text-lg font-light leading-8 text-justify">
                        {item?.title}
                      </p>
                    </div>
                  ))}
                </div>
                Submit your CV and embark on exciting projects with us. We will
                reach out to you for collaboration on individual projects as
                opportunities aries.
              </p>
            </div>

            <div className="col-span-12 sm:col-span-6 flex items-end justify-end">
              {" "}
              <Button
                size="default"
                variant="default"
                className="uppercase flex gap-2"
                onClick={() => handleApplyNow(1)}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>

        {activeJobId !== null && (
          <div className="bg-white p-10 mt-10">
            <div className="flex justify-end items-center">
              <img
                src="/assets/images/close.svg"
                className="w-10 h-10 cursor-pointer"
                alt="Close Icon"
                onClick={handleClose}
              />
            </div>

            <div className="flex items-center justify-center ">
              <div className="w-11/12 flex flex-col gap-8 pt-10 items-center">
                <div className="flex flex-col gap-10 xl:gap-6 w-full">
                  <Input
                    id="myInput"
                    type="text"
                    placeholder="Full Name"
                    className="w-full h-14 border"
                  />

                  <Input
                    id="myInput"
                    type="text"
                    placeholder="Email"
                    className="w-full h-14 border"
                  />

                  <Input
                    id="myInput"
                    type="text"
                    placeholder="Phone"
                    className="w-full h-14 border"
                  />

                  <Input
                    id="myInput"
                    type="text"
                    placeholder="Cover Letter"
                    className="w-full border"
                    textarea={true}
                    rows={4}
                    multiline={true}
                  />

                  <div className="px-3.5 py-2.5 border flex gap-8 items-center">
                    <input
                      ref={fileInputRef}
                      type="file"
                      style={{ display: "none" }}
                      onChange={handleFileInputChange}
                    />
                    <div
                      className="bg-cream w-24 h-8 flex items-center justify-center text-sm cursor-pointer"
                      onClick={handleChooseFileClick}
                    >
                      Choose File
                    </div>
                    {selectedFile ? (
                      <div className="flex items-center">
                        <p className="text-sm">{selectedFile.name}</p>

                        <button
                          className="ml-2 text-red-500 cursor-pointer"
                          onClick={handleClearFile}
                        >
                          <img
                            src="/assets/images/close.svg"
                            className="w-4 h-4"
                            alt="Clear Icon"
                          />
                        </button>
                      </div>
                    ) : (
                      <p className="text-sm">No File Chosen</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-center sm:justify-start">
                  <Button
                    className="text-lg text-white font-bold uppercase px-11 py-5 w-52"
                    variant={"default"}
                    size={"default"}
                  >
                    Submit
                  </Button>
                </div>
              </div>

              {/* <div className="flex flex-col gap-8 pt-28">
          {career?.map((item) => (
            <Fragment key={item.id}>
              <div className="bg-white p-8 flex sm:justify-between items-center flex-col sm:flex-row gap-5 sm:gap-0">
                <p className="text-head text-xl tracking-wide sm:w-60">
                  {item?.title}
                </p>
                <div className="flex gap-3 items-center">
                  <img
                    src="/assets/images/location.svg"
                    className="w-5 h-5"
                    alt="Location"
                  />
                  <p className="text-head text-xl tracking-wide">
                    {item?.type}
                  </p>
                </div>
                <Button
                  size="default"
                  variant="default"
                  className="uppercase flex gap-2"
                  onClick={() => handleApplyNowClick(item.id)}
                >
                  Apply Now
                </Button>
              </div>

              {activeCareer === item?.id && (
                <div className="bg-white p-10">
                  <div className="flex justify-between items-center">
                    <p className="text-black text-lg font-semibold leading-6">
                      Civil Engineer
                    </p>
                    <img
                      src="/assets/images/close.svg"
                      className="w-10 h-10 cursor-pointer"
                      alt="Close Icon"
                      onClick={() => handleCloseClick(item.id)}
                    />
                  </div>

                  <div className="grid grid-cols-12 sm:gap-14 pt-9">
                    <div className="col-span-12 sm:col-span-6 flex flex-col gap-8">
                      <p className="text-black text-base font-semibold leading-6">
                        Job brief
                      </p>

                      <p className="text-wolfGrey text-sm text-justify font-light leading-6">
                        We are seeking a skilled and experienced Civil Engineer
                        to join our team. As a Civil Engineer, you will be
                        responsible for designing, planning, and overseeing
                        construction projects from conception to completion. You
                        will play a crucial role in ensuring that projects are
                        completed on time, within budget, and in compliance with
                        regulatory requirements.
                      </p>

                      <p className="text-black text-base font-semibold leading-6">
                        Requirements
                      </p>

                      <div className="flex flex-col gap-3">
                        {requirement?.map((item, index) => (
                          <div className="flex gap-3" key={index}>
                            <img
                              src="/assets/images/arrowBullet.svg"
                              alt="Bullet"
                            />
                            <p className="text-wolfGrey text-sm font-normal leading-6">
                              {item?.title}
                            </p>
                          </div>
                        ))}
                        <div className="flex gap-1">
                          <p className="text-wolfGrey text-sm font-semibold leading-6">
                            Job Type:
                          </p>
                          <p className="text-wolfGrey text-sm font-normal leading-6">
                            Remotely
                          </p>
                        </div>

                        <div className="flex gap-1">
                          <p className="text-wolfGrey text-sm font-semibold leading-6">
                            Job Location:
                          </p>
                          <p className="text-wolfGrey text-sm font-normal leading-6">
                            -
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-12 sm:col-span-6 flex flex-col gap-8 pt-10 sm:pt-0">
                      <div className="flex flex-col gap-10 xl:gap-6 w-full">
                        <Input
                          id="myInput"
                          type="text"
                          placeholder="Full Name"
                          className="w-full h-14 border"
                        />

                        <Input
                          id="myInput"
                          type="text"
                          placeholder="Email"
                          className="w-full h-14 border"
                        />

                        <Input
                          id="myInput"
                          type="text"
                          placeholder="Phone"
                          className="w-full h-14 border"
                        />

                        <Input
                          id="myInput"
                          type="text"
                          placeholder="Cover Letter"
                          className="w-full border"
                          textarea={true}
                          rows={4}
                          multiline={true}
                        />

                        <div className="px-3.5 py-2.5 border flex gap-8 items-center">
                          <input
                            ref={fileInputRef}
                            type="file"
                            style={{ display: "none" }}
                            onChange={handleFileInputChange}
                          />
                          <div
                            className="bg-cream w-24 h-8 flex items-center justify-center text-sm cursor-pointer"
                            onClick={handleChooseFileClick}
                          >
                            Choose File
                          </div>
                          {selectedFile ? (
                            <div className="flex items-center">
                              <p className="text-sm">{selectedFile.name}</p>

                              <button
                                className="ml-2 text-red-500 cursor-pointer"
                                onClick={handleClearFile}
                              >
                                <img
                                  src="/assets/images/close.svg"
                                  className="w-4 h-4"
                                  alt="Clear Icon"
                                />
                              </button>
                            </div>
                          ) : (
                            <p className="text-sm">No File Chosen</p>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-center sm:justify-start">
                        <Button
                          className="text-lg text-white font-bold uppercase px-11 py-5 w-52"
                          variant={"default"}
                          size={"default"}
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Fragment>
          ))}
        </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Career;
