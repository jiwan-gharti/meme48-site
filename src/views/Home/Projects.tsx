import StyledHeader from "@/components/StyledHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Award() {
  const all = [
    "/assets/images/projects/1.png",
    "/assets/images/projects/2.png",
    "/assets/images/projects/3.png",
    "/assets/images/projects/4.png",
    "/assets/images/projects/5.png",
    "/assets/images/projects/6.png",
    "/assets/images/projects/7.png",
    "/assets/images/projects/8.png",
  ];

  return (
    <div className="bg-cream py-36">
      <div className="container flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <StyledHeader title="OUR PROJECTS" singleLine={true} />
          <h1 className="mb-6 text-3xl sm:text-6xl font-medium leading-10 text-head sm:w-[592px]">
            Some of our crafts made with love
          </h1>
        </div>

        <Tabs defaultValue="tab1">
          <TabsList className="w-full flex gap-4 justify-start overflow-x-scroll overflow-y-hidden  sm:overflow-hidden max-w-screen-lg h-auto py-2 sm:py-0">
            <TabsTrigger
              value="tab1"
              className=" data-[state=active]:text-white text-subHead h-8 px-4"
            >
              Show All
            </TabsTrigger>
            <TabsTrigger
              value="tab2"
              className=" data-[state=active]:text-white text-subHead h-8 px-4"
            >
              Commercial
            </TabsTrigger>
            <TabsTrigger
              value="tab3"
              className=" data-[state=active]:text-white text-subHead h-8 px-4"
            >
              Exterior
            </TabsTrigger>
            <TabsTrigger
              value="tab4"
              className=" data-[state=active]:text-white text-subHead h-8 px-4"
            >
              Interior
            </TabsTrigger>
            <TabsTrigger
              value="tab5"
              className=" data-[state=active]:text-white text-subHead h-8 px-4"
            >
              Residental
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tab1" className="pt-14 ">
            <div className="grid grid-cols-12">
              {all.map((img, index) => (
                <div className="col-span-12 sm:col-span-3" key={index}>
                  <img
                    src={img}
                    alt="images"
                    className="w-full h-72 object-cover"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="tab2" className="py-14">
            222222
          </TabsContent>
          <TabsContent value="tab3" className="py-14">
            333333
          </TabsContent>
          <TabsContent value="tab4" className="py-14">
            444444
          </TabsContent>
          <TabsContent value="tab5" className="py-14">
            555555
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Award;
