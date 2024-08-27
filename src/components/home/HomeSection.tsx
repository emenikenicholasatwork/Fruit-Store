import React from 'react'
import Image from 'next/image'

const HomeSection = () => {
  return (
    <section className="w-full h-screen flex flex-row justify-center items-center mt-32">
      <div></div>
      <div className="flex flex-row items-center h-screen justify-center">
        <Image
          className="flex basis-full"
          src={"/images/pawpaw.jpg"}
          height={100}
          width={100}
          alt="paw-paw image"
        />
        <div>
          <Image
            className="flex basis-[60%]"
            height={100}
            width={400}
            src={"/images/banana.jpg"}
            alt="banana image"
          ></Image>
          <Image
            className="flex basis-[40%]"
            src={"/images/pear.jpg"}
            width={400}
            height={500}
            alt="pear image"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeSection