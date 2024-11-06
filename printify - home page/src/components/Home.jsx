function Home() {
  const data = [
    {
      img1: "/robert-voltaire-RIZV7QXV.webp",
      title: "Title for H3",
      subtitle: "Subtitle for H4",
      description:
        " Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! ",
    },
    {
      img1: "/robert-voltaire-RIZV7QXV.webp",
      title: "Title for H3",
      subtitle: "Subtitle for H4",
      description:
        " Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! ",
    },
    {
      img1: "/robert-voltaire-RIZV7QXV.webp",
      title: "Title for H3",
      subtitle: "Subtitle for H4",
      description:
        " Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify! ",
    },
  ];
  return (
    <main>
      <section className="flex flex-col md:flex-row justify-between items-center lg:gap-5 p-9 md:p-20">
        <div className="md:w-6/12 mt-10 md:mt-20 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl md:text-6xl font-semibold">
              Create and sell{" "}
            </h1>
            <h1 className="text-3xl md:text-6xl font-semibold mt-3">
              Custom products
            </h1>
            <div className="mt-3">
              <h4 className="mt-2 ml-3">
                <i className="fa-solid fa-check text-[#39b75d] pr-2 "></i>100%
                Free to use
              </h4>
              <h4 className="mt-2 ml-3">
                <i className="fa-solid fa-check text-[#39b75d] pr-2"></i>900+
                High-Quality Products
              </h4>
              <h4 className="mt-2 ml-3">
                <i className="fa-solid fa-check text-[#39b75d] pr-2"></i>Largest
                global print network
              </h4>
            </div>
            <div className="flex flex-col md:flex-row gap-1 md:gap-10 mt-10">
              <button className="text-sm lg:text-lg border bg-[#39b75d] text-[#fff] rounded-md px-4 py-1 lg:px-10 lg:py-4 font-semibold hover:bg-[#27793e] whitespace-nowrap">
                Start for free
              </button>
              <button className="text-sm lg:text-lg border border-[#c2c2c2] text-[#31353e] rounded-md px-4 py-1 lg:px-10 lg:py-4 font-semibold hover:text-[#39b75d] whitespace-nowrap">
                <i className="fa-regular fa-circle-play"></i> How it Works?
              </button>
            </div>
            <h3 className="text-[#39b75b] text-lg pl-3 mt-3 font-bold">
              Trusted by over 8M sellers around the world
            </h3>
          </div>
        </div>
        <div className="md:mt-20 md:flex md:items-center md:h-full">
          <img src="/simple.svg" alt="" className="h-full object-cover" />
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-10 p-9 md:p-20 lg:px-32">
        <div className="flex flex-col items-center text-center">
          <img src="/higher-profits.svg" alt="Higher Profits" width={140} />
          <h3 className="mt-5 text-2xl font-semibold">Higher Profits</h3>
          <p className="mt-5 font-medium">
            We offer some of the lowest prices in the industry because print
            providers continuously compete to win your business.
          </p>
        </div>
        <div className="flex flex-col items-center text-center ">
          <img src="/robust-scaling.svg" alt="Robust Scaling" width={140} />
          <h3 className="mt-5 text-2xl font-semibold">Robust Scaling</h3>
          <p className="mt-5 font-medium">
            Easily handle peak holiday seasons, with our wide network of
            partners and automatic routing functionality.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="/best-selection.svg" alt="Best Selection" width={140} />
          <h3 className="mt-5 text-2xl font-semibold">Best Selection</h3>
          <p className="mt-5 font-medium">
            With 900+ products and top quality brands, you can choose the best
            products for your business.
          </p>
        </div>
      </section>
      <section className="bg-[#bcbcbc4b] ">
        <div className="flex justify-center p-10  md:p-20 ">
          <div className="bg-[#39b75d] w-4/12 hidden lg:block">
            <img
              src="clothes-C4MUJFTZ.png"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className=" bg-white flex flex-col p-7 gap-10 justify-center items-center">
            <h2 className=" font-bold text-2xl md:text-3xl xl:text-5xl text-center lg:">
              Easily add your design to a wide range of products
            </h2>
            <p className=" text-sm md:text-base xl:text-xl text-center">
              With our free design tools, you can easily add your custom designs
              to t-shirts, mugs, phone cases, and hundreds of other products.
            </p>
            <div className="">
              <button className="font-bold text-xl xl:text-2xl text-[#39b75d] mt-5">
                All products{" "}
                <i className="fa-solid fa-arrow-right text-[#39b75d]"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10 md:px-20 lg:px-32">
          <div className="flex flex-col items-center text-center">
            <img
              src="/custom-products.webp"
              alt="Create Custom Products"
              width={140}
            />
            <h3 className="mt-7 text-2xl font-semibold text-[#39b75d]">
              Create
            </h3>
            <h3 className="text-2xl font-semibold">custom products</h3>
            <p className="mt-5 font-medium text-sm text-[#485256]">
              Easily add your designs to a wide range of products using our free
              tools
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/your-products.webp"
              alt="Sell on Your Terms"
              width={140}
            />
            <h3 className="mt-7 text-2xl font-semibold text-[#39b75d]">Sell</h3>
            <h3 className="text-2xl font-semibold">on your terms</h3>
            <p className="mt-5 font-medium text-sm text-[#485256]">
              You choose the products, sale price, and where to sell
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/fullfillment.webp"
              alt="We Handle Fulfillment"
              width={140}
            />
            <h3 className="mt-7 text-2xl font-semibold text-[#39b75d]">
              We handle
            </h3>
            <h3 className="text-2xl font-semibold">fulfillment</h3>
            <p className="mt-5 font-medium text-sm text-[#485256]">
              Once an order is placed, we automatically handle all the printing
              and delivery logistics
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-10">
          <h1 className="text-3xl font-semibold text-center">
            Connect your store
          </h1>
          <p className="text-center text-[#485256] mt-5 text-sm">
            Printify easily integrates with major e-commerce platforms and
            marketplaces
          </p>
        </div>
        <div className="flex  justify-center items-center p-10 ">
          <div className="bg-[#ebfff0] rounded-3xl md:w-8/12 p-10 relative overflow-hidden flex flex-col md:flex-row justify-around items-center text-lg gap-5 ">
            <p className="z-10">
              Are you a large business looking for custom solutions?
            </p>
            <button className="z-10 bg-white px-3 py-1 font-medium text-lg whitespace-nowrap shadow-md hover:shadow-lg rounded-md">
              Talk To Sales
            </button>

            <img
              src="talk-to-sales-N2GDBAGC.svg"
              alt=""
              className="absolute bottom-0 right-0"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#bcbcbc4b] px-10 py-28 mt-10 lg:px-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:w-8/12">
          <p className="text-3xl font-semibold text-[#484e50]">
            Trusted by over 8M sellers around the world
          </p>
          <p className="text-[#485256] mt-5 text-sm">
            Whether you are just getting started or run an enterprise-level
            e-commerce business, we do everything we can to ensure a positive
            merchant experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
          {data.map((item, index) => (
            <div key={index} className="bg-white border p-5 rounded-2xl w-full">
              <div className="flex gap-5">
                <img src={item.img1} alt="First Image" className="h-14" />
                <div>
                  <h3 className="text-xl font-bold ">{item.title}</h3>
                  <h4 className="text-sm">{item.subtitle}</h4>
                  <div>
                    <i className="fa-solid fa-star text-[#ffba19]"></i>
                    <i className="fa-solid fa-star text-[#ffba19]"></i>
                    <i className="fa-solid fa-star text-[#ffba19]"></i>
                    <i className="fa-solid fa-star text-[#ffba19]"></i>
                    <i className="fa-solid fa-star text-[#ffba19]"></i>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm text-[#485256]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
