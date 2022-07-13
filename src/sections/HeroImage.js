import Image from 'next/image';
import styles from '../styles/Hero.module.css';
// import { motion, useTransform, useViewportScroll } from 'framer-motion';

export const HeroImage = () => {
  return (
    <section className="hero relative w-full h-[400px]">
      <Image
        className="w-full object-cover object-bottom sm:object-center"
        src="/images/hero.jpg"
        width="1776"
        height="805"
        layout="responsive"
        // objectFit="contain"
        alt="Main Image of the website"
      />
      <div className="heading-container absolute flex justify-center items-center w-full">
        <h1 className="text-5xl text-white">Your dream vacation starts here</h1>
      </div>
    </section>
  );
};

HeroImage.propTypes = {};
