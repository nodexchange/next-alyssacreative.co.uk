import Image from 'next/image';

const heroImg = '/images/hero.jpg';

export const Hero = () => {
  return (
    <section className="hero">
      {/* <Image
        className="w-full h-[619px] object-cover object-bottom sm:object-center"
        src="/images/hero.jpg"
        layout="responsive"
        alt="Main Image of the website"
      /> */}
      <Image
  src={heroImg}
  layout="fill"
  objectFit="cover"
  alt="Hero Image"
  priority={true}
  placeholder="blur"
/>
      {/* <img
        src="/images/hero.jpg"
        alt="houses on the water"
        className="w-full"
      /> */}
      <div className="heading-container absolute flex justify-center items-center w-full">
        <h1 className="text-5xl text-white">Your dream vacation starts here</h1>
      </div>
    </section>
  );
};
