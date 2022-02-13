import styles from '../styles/Hero.module.css';
// import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { TwoColumns } from '@/layouts/twoColumns';


export const Section = ({ LeftContent, RightContent, direction }) => {
  // const { scrollYProgress } = useViewportScroll();
  // const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <section className="hero relative">
      <p>Hello</p>
      <TwoColumns left={LeftContent} right={RightContent} />
      <div className={styles[direction]}></div>
    </section>
  );
};

Section.propTypes = {};
