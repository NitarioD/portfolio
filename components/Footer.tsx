import { FaLocationArrow } from "react-icons/fa6";

import { email_addr, socialMedia } from "@/data/index";
import MagicButton from "./MagicButton";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const dt = new Date().getFullYear();
  return (
    <footer
      className="relative w-full pt-20 pb-10 bg-[url('/footer-grid.svg')] bg-cover bg-repeat bg-bottom"
      id="contact"
    >
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href={`mailto:${email_addr}`}>
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © {dt} Jola Adunola
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {info.url ? (
                <Link href={info.url} target="_blank" rel="noreferrer">
                  <Image src={info.img} alt="icons" width={20} height={20} />
                </Link>
              ) : (
                <Image src={info.img} alt="icons" width={20} height={20} />
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
