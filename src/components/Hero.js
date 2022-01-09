import React from 'react';
import PropTypes from 'prop-types';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

export const Hero = (props) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  console.log('scale...', scale);
  return (
    <header className="relative">
      <div className="px-4 sm:px-6 md:px-8">
        <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 sm:max-w-2xl">
          <h1 className="text-gray-900 text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
            Welcome to AS Creative, a digital marketing and Design Agency based
            in Buckinghamshire, UK. We deliver personalised and tailored
            services to our clients because we know there is no
            ‘one-size-fits-all’ approach and you are unique.
          </h1>
        </div>
        <h1>My Motion div example</h1>
        <motion.div style={{ scale }}>
          <motion.div
            style={{
              scaleY: scrollYProgress,
            }}>
            <h1>My scale play</h1>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

Hero.propTypes = {};
