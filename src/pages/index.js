import Image from 'next/image';
// import Posts from '../components/Posts';
import { Hero } from '../components/Hero';
import { Slider } from '../components/Slider';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Contact } from '../components/Contact';
import { About } from '../components/About';
import { TwoColumns } from '@/layouts/twoColumns';
import { FullWidth } from '@/layouts/FullWidth';


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

const services = [
  {title: 'Digital Marketing', description: 'Blogging, E-newsletters, Social Media Management, Brand Management, Audience Growth, Copywriting, Marketing Strategy'},
  {title: 'Website Management', description: 'Search Engine Optimisation (SEO), fresh content and support your website’s promotion through digital marketing'},
  {title: 'Graphic Design', description: 'Logo Design, Branding, Web Design, Photography, Brochure, Flyers, and Guide Design'},
  {title: 'Brand Development', description: 'Blogging, E-newsletters, Social Media Management, Brand Management, Audience Growth, Copywriting, Marketing Strategy'},
]

const servicesTitle = 'SERVICES FOR YOU';

const images = [
  "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
  "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
];

function Cards() {
  const cards = [];
  for (let i = 0; i < 4; i++) {
    cards.push(<Card key={`card-${i}`} title={services[i].title} description={services[i].description} />);
  }
  return cards;
}

export default function Home() {

  return (
    <div>
      <div className="relative mx-auto pt-20 sm:pt-24 lg:pt-32">
        <main>
          <Hero LeftContent={LeftContent()} RightContent={RightContent()} />
          <TwoColumns title={'Traditional & Digital Marketing'} left={LeftContent()} right={LeftContent()} textClass="text-black" />
          <FullWidth>
            <h2 className="text-xl">{servicesTitle}</h2>
          </FullWidth>
          <FullWidth>
            {Cards()}
          </FullWidth>
          <Section left={LeftContent()} right={RightContent()} direction="down" />
          <About />
          <Slider
            slides={images}
          />
          <FullWidth>
            <Contact />
          </FullWidth>
          <Section left={LeftContent()} right={RightContent()} direction="up" />
        </main>
      </div>
    </div>
  );
}
