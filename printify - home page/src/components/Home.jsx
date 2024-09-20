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
      <section className="flex flex-col md:flex-row justify-between min-h-[85vh] p-20">
        <div className="w-6/12 mt-20">
          <h1 className="text-6xl font-semibold">Create and sell </h1>
          <h1 className="text-6xl font-semibold mt-3">custom products</h1>
          <div className="mt-3">
            <h4 className="mt-2 ml-3">
              <i className="fa-solid fa-check text-[#39b75d] pr-2 "></i>100%
              Free to use
            </h4>
            <h4 className="mt-2 ml-3">
              {" "}
              <i className="fa-solid fa-check text-[#39b75d] pr-2"></i>900+
              High-Quality Products
            </h4>
            <h4 className="mt-2 ml-3">
              {" "}
              <i className="fa-solid fa-check text-[#39b75d] pr-2"></i>
              Largest global print network
            </h4>
          </div>
          <div className="space-x-2 mt-10">
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
        <div>
          <img src="/simple.svg" alt="" />
        </div>
      </section>
      <section className="flex justify-between items-center gap-10 p-20">
        <div>
          <img src="/higher-profits.svg" alt="" width={140} />
          <h3 className="mt-5 text-2xl font-semibold">Higher Profits</h3>
          <p className="mt-5 font-medium">
            We offer some of the lowest prices in the industry because print
            providers continuously compete to win your business.
          </p>
        </div>
        <div>
          <img src="/robust-scaling.svg" alt="" width={140} />
          <h3 className="mt-5 text-2xl font-semibold">Robust Scaling</h3>
          <p className="mt-5 font-medium">
            Easily handle peak holiday seasons, with our wide network of
            partners and automatic routing functionality.
          </p>
        </div>
        <div>
          <img src="/best-selection.svg" alt="" width={140} />
          <h3 className="mt-5 text-2xl font-semibold">Best Selection</h3>
          <p className="mt-5 font-medium">
            With 900+ products and top quality brands, you can choose the best
            products for your business.
          </p>
        </div>
      </section>
      <section className="bg-[#bcbcbc4b]">
        <div className="flex justify-center px-40 pt-32">
          <div className="bg-[#39b75d] w-9/12 relative">
            <img src="clothes-C4MUJFTZ.png" alt="" className="" />
            <div className="bg-white h-52 w-40 absolute bottom-10 m-0 -right-10 rounded-2xl border"></div>
          </div>
          <div className="mt-24 bg-white flex flex-col">
            <h2 className="mt-24 ml-44 pr-24 font-bold text-2xl">
              Easily add your design to a wide range of products
            </h2>
            <p className="mt-10 ml-44 pr-24 text-sm">
              With our free design tools, you can easily add your custom designs
              to t-shirts, mugs, phone cases, and hundreds of other products.
            </p>
            <div className="mt-10 ml-44 pr-24">
              <button className="font-bold text-[#39b75d] mt-5">
                All products{" "}
                <i className="fa-solid fa-arrow-right text-[#39b75d]"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-20 px-52 pb-10 mt-2">
          <div>
            <img src="/custom-products.webp" alt="" width={140} />
            <h3 className="mt-7 text-2xl font-semibold text-[#39b75d]">
              Create
            </h3>
            <h3 className="mt- text-2xl font-semibold">custom products</h3>
            <p className="mt-5 font-medium text-sm text-[#485256]">
              Easily add your designs to a wide range of products using our free
              tools
            </p>
          </div>
          <div>
            <img src="/your-products.webp" alt="" width={140} />
            <h3 className="mt-7 text-2xl font-semibold text-[#39b75d]">Sell</h3>
            <h3 className="mt- text-2xl font-semibold">on your terms</h3>
            <p className="mt-5 font-medium text-sm text-[#485256]">
              You choose the products, sale price, and where to sell
            </p>
          </div>
          <div>
            <img src="/fullfillment.webp" alt="" width={150} />
            <h3 className="mt-7 text-2xl font-semibold text-[#39b75d]">
              We handle
            </h3>
            <h3 className="mt- text-2xl font-semibold">fulfillment</h3>
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
        <div className="flex justify-center items-center mt-10 ">
          <div className="bg-[#ebfff0] rounded-3xl w-8/12 p-10 relative overflow-hidden flex justify-around items-center">
            <p className="z-10">
              Are you a large business looking for custom solutions?
            </p>
            <button className="z-10 bg-white  px-3 py-1 font-medium">
              Talk To sales
            </button>
            <img
              src="talk-to-sales-N2GDBAGC.svg"
              alt=""
              className="absolute bottom-0 right-0"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#bcbcbc4b] px-20 py-28 mt-10">
        <div className="flex gap-10 w-8/12">
          <p className="text-3xl font-semibold text-[#484e50]">
            Trusted by over 8M sellers around the world
          </p>
          <p className=" text-[#485256] mt-5 text-sm">
            Whether you are just getting started or run an enterprise-level
            e-commerce business, we do everything we can to ensure a positive
            merchant experience.
          </p>
        </div>
        <div className="flex items-center gap-10 my-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white border p-5 rounded-2xl w-10/12"
            >
              <div className="flex gap-5">
                <img src={item.img1} alt="First Image" className="h-14" />
                <div>
                  {" "}
                  <h3 className="text-xl font-bold ">{item.title}</h3>
                  <h4 className="text-sm">{item.subtitle}</h4>
                  <i className="fa-solid fa-star text-[#ffba19]"></i>
                  <i className="fa-solid fa-star text-[#ffba19]"></i>
                  <i className="fa-solid fa-star text-[#ffba19]"></i>
                  <i className="fa-solid fa-star text-[#ffba19]"></i>
                  <i className="fa-solid fa-star text-[#ffba19]"></i>
                </div>
              </div>
              <p className="mt-5 text-sm text-[#485256] ">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
