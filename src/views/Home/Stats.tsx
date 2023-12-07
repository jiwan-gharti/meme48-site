function Document() {
  return (
    <div className="  flex items-center ">
      <div
        className="relative flex sm:h-[307px] w-full  bg-[url('/assets/images/stats.jpg')]
        bg-cover  bg-center align-middle xl:px-5"
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              " linear-gradient(0deg, rgba(0, 0, 0, 0.76) 0%, rgba(0, 0, 0, 0.76) 100%)",
          }}
        />
        <div className="container h-full w-full py-14 z-10"></div>
      </div>
    </div>
  );
}

export default Document;
