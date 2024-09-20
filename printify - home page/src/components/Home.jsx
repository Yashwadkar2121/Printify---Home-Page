function Home() {
  return (
    <main className="p-10">
      <section className="flex justify-between min-h-[85vh]">
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
        <div></div>
      </section>
      <section className="flex justify-between items-center gap-10 p-12">
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
    </main>
  );
}

export default Home;
