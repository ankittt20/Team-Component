import Image from "next/image";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import teamData from "@/assets/data/teamData";
import Head from "next/head";
import Background from "../assets/images/Background.jpg";
import { useState } from "react";

type Props = {};

const Team = (props: Props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  return (
    <>
      <Head>
        <title>Ojass | NIT Jamshedpur</title>
        <meta name="description" content="Technical fest of NIT Jamshedpur." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-10">
        <Image
          src={Background.src}
          height={1080}
          width={1920}
          alt="acv"
          className="-z-10 fixed top-0 left-0 h-full w-full object-cover"
        />
        <div id="team" className="h-full container text-center mt-10 mx-auto">
          <h1 className="text-4xl font-bold my-24 shadow-lg">
            Our <span className="text-[#ff3131]">Team</span>
          </h1>
          <div className="flex overflow-x-scroll space-x-8 md:space-x-16 lg:space-x-20 m-0 md:m-5 scrollbar scrollbar-thumb-gray-900 scrollbar-track-[#01457b]/40 scrollbar-thumb-rounded scrollbar-h-2">
            {teamData.map((item, index) => (
              <div key={index} className="flex flex-col items-center mb-5">
                <div className="rounded-full overflow-hidden w-24 h-24">
                  
                  <Image
                    width={500}
                    height={500}
                    src={item.image}
                    alt={item.name}
                    className="object-cover h-full w-full"
                    onLoad={handleImageLoad}
                  />
                </div>
                <div className="mt-4 flex flex-col items-center w-48">
                  <span className="text-lg font-bold">{item.name}</span>
                  <span className="text-base font-medium">{item.position}</span>
                  <div className="mt-2 flex space-x-2">
                    <a
                      href={item.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 transition-all duration-300"
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${item.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 transition-all duration-300"
                    >
                      <FaEnvelope className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Team;
