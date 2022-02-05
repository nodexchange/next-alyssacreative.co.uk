import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from '../styles/Hero.module.css';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

export const Hero = (props) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  console.log('scale...', scale);
  return (
    <section className="hero relative">
      <div className="pb-10 px-4 sm:px-6 md:px-8">
        <div className="px-2">
          <div className="flex -mx-2">
            <div className="w-1/2 px-2 text-white">
              <div className="h-12">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
                  Raise your profile
                </h1>
              </div>
              <div className="w-64">
                <p>
                  Welcome to AS Creative, a digital marketing and Design Agency
                  based in Buckinghamshire, UK. We deliver personalised and
                  tailored services to our clients because we know there is no
                  ‘one-size-fits-all’ approach and you are unique.
                </p>
              </div>
            </div>
            <div className="w-1/2 px-2">
              <div className="bg-gray-500 h-12"></div>
            </div>
          </div>
        </div>
        <div className="text-white relative mx-auto sm:pt-2 lg:pt-2 sm:max-w-8xl"></div>
        {/* <picture>
            <source srcSet={require('@/img/beams/docs@30.avif').default} type="image/avif" />
            <Image
              src="/header.jpg"
              alt=""
              className="flex-none max-w-none dark:hidden"
              width={1272} height={416}
            />
          </picture> */}
        <h1>My Motion div example</h1>
        <div className={styles.decor}></div>
        <motion.div style={{ scale }}>
          <motion.div
            style={{
              scaleY: scrollYProgress,
            }}>
            <h1>My scale play</h1>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

Hero.propTypes = {};
