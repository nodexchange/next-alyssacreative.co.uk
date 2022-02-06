import Image from 'next/image';
import Posts from '../components/Posts';
import styles from '../styles/Home.module.css';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { Contact } from '../components/Contact';
import { About } from '../components/About';
import TwoColumns from '@/layouts/twoColumns';
import FullWidth from '@/layouts/FullWidth';



function LeftContent() {
  return (
    <div className="w-2/3">
      <h1 className="text-left text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white">
        Raise your profile
      </h1>
      <p className="py-8 opacity-80">
        Welcome to AS Creative, a digital marketing and Design Agency based in
        Buckinghamshire, UK. We deliver personalised and tailored services to
        our clients because we know there is no ‘one-size-fits-all’ approach and
        you are unique.
      </p>
      <button className="bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-4">
        Contact US
      </button>
    </div>
  );
}

function RightContent() {
  return (
    <picture>
      <Image
        src="/header.jpg"
        alt=""
        className="flex-none max-w-none dark:hidden"
        width={1272}
        height={416}
      />
    </picture>
  );
}

// function MotionText({ scale }) {
//   return (
//     <motion.div style={{ scale }}>
//           <motion.div
//             style={{
//               scaleY: scrollYProgress,
//             }}>
//             <h1>My scale play</h1>
//           </motion.div>
//         </motion.div>
//   )
// }

function Cards() {
  const cards = [];
  for (let i = 0; i < 4; i++) {
    cards.push(<Card key={`card-${i}`} />);
  }
  return cards;
}

export default function Home() {
  return (
    <div>
      <div className="relative mx-auto pt-20 sm:pt-24 lg:pt-32">
        <Hero LeftContent={LeftContent()} RightContent={RightContent()} />
        <TwoColumns left={LeftContent()} right={RightContent()} />
        <FullWidth>
          {Cards()}
        </FullWidth>
        <About />
        <FullWidth>
          <Contact />
        </FullWidth>
      </div>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <h2 className="text-3xl font-bold underline">Hello world!</h2>
          <Posts />

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}>
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}>
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
