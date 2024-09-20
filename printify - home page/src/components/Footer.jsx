import logo from "../assets/logo-old-B5JY5YNQ.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="md:flex md:justify-between md:items-center lg:p-20 p-9">
        <img src={logo} alt="logo" className="h-9" />
        <div className="text-3xl text-[#39b75d] flex justify-between lg:gap-5 gap-2 mt-4 lg:mt-0">
          {" "}
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-x-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-tiktok"></i>
          <i className="fa-brands fa-reddit"></i>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 p-9 lg:py-10 lg:px-20 mb-10">
        <div>
          <h2 className="font-semibold">Integrations</h2>
          <ul className="flex flex-col gap-4 text-sm mt-5">
            <Link to="/">
              <li className="hover:text-[#39b75d]">Shopify</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Etsy</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">eBay</li>
            </Link>
            <li className="hover:text-[#39b75d]">
              <Link to="/"> Amazon </Link>
            </li>
            <Link to="/">
              <li className="hover:text-[#39b75d]">TikTok Shop</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">PrestaShop</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">BigCommerce</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Wix</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">WooCommerce</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Squarespace</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Printify API</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Printify Pop-Up Store</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Shutterstock</li>
            </Link>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Discover</h2>
          <ul className="flex flex-col gap-4 text-sm mt-5">
            <Link to="/">
              <li className="hover:text-[#39b75d]">Blog</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Guides</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Products</li>
            </Link>
            <li className="hover:text-[#39b75d]">
              <Link to="/"> Amazon </Link>
            </li>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Etsy print-on-demand</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Shopify print-on-demand</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">
                Woocommerce print-on-demand
              </li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">
                Squarespace print-on-demand
              </li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Make Your Own Shirt</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Brands</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Pricing</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Shipping Rates</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Mockup Generator</li>
            </Link>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Start selling</h2>
          <ul className="flex flex-col gap-4 text-sm mt-5">
            <Link to="/">
              <li className="hover:text-[#39b75d]">Custom T-shirts</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Custom Hoodies</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Custom Mugs</li>
            </Link>
            <li className="hover:text-[#39b75d]">
              <Link to="/"> Amazon </Link>
            </li>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Custom Socks</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Custom Backpacks</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Custom Branding</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Sell on Etsy</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Sell on Social Media</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Free T-shirt Designs</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Custom Products</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">
                Custom All-Over-Print Hoodies
              </li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Start a Clothing Line</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Start POD Business</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Bulk Orders</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Transfering To Printify</li>
            </Link>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold">Printify</h2>
          <ul className="flex flex-col gap-4 text-sm mt-5">
            <Link to="/">
              <li className="hover:text-[#39b75d]">Print on Demand</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Print Providers</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Experts Program</li>
            </Link>
            <li className="hover:text-[#39b75d]">
              <Link to="/"> Amazon </Link>
            </li>
            <Link to="/">
              <li className="hover:text-[#39b75d]">
                Printify Express Delivery
              </li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Become a Partner</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">About</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Printify Quality Promise</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Jobs</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Webinars</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Printing Profits Podcast</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Contact Us</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Affiliate</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">Contact Sales</li>
            </Link>
            <Link to="/">
              <li className="hover:text-[#39b75d]">POD Glossary</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="bg-[#f7f7f7] text-xs lg:text-sm p-10 ">
        <div className="flex flex-wrap justify-center items-center gap-5 text-[#949494]">
          <h3>Intellectual Property Policy</h3>
          <h3>Terms of Service</h3>
          <h3>Privacy Policy</h3>
          <h3>Security</h3>
        </div>
        <p className="text-center mt-3 ">
          &copy; 2024 Printify, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
