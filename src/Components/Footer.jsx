import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
function Footer() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <>
      <Footer className="relative left-0 bottom-0 h-[10vh] py-5 flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20">
        <section className="text-lg">
          Copyright {year} | All rights reserved
        </section>
      </Footer>
    </>
  );
}
export default Footer;
