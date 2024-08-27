import React from 'react'
import Image from 'next/image'

const HomeSection = () => {
  return (
    <section className="w-full flex flex-row justify-center items-center">
      <div>
        <Image
          className=""
          quality={100}
          layout="intrinsic"
          height={100}
          width={100}
          src={"/images/banana.jpg"}
          alt="banana image"
        ></Image>
      </div>
    </section>
  );
}

export default HomeSection