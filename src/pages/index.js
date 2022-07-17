import Image from 'next/image';
// import Posts from '../components/Posts';
// import { Hero } from '@/sections/Hero';
import { HeroImage } from '@/sections/HeroImage';
import { Slider } from '@/components/Slider';
import { Section } from '@/components/Section';
import { Contact } from '@/sections/Contact';
import { About } from '@/sections/About';
import { TwoColumns } from '@/layouts/twoColumns';
import { FullWidth } from '@/layouts/FullWidth';
import { Page } from '@/layouts/Page';
import { Container } from '@/layouts/Container';
import { Clients } from '@/sections/Clients';
import { Services } from '@/sections/Services';
import { Instagram } from '@/sections/Instagram';
import { Testemonies } from '@/sections/Testemonies';
import { Button } from '@/components/Button';

function LeftContent() {
  return (
    <div className="w-full">
      <h1 className="text-left text-4xl sm:text-5xl lg:text-6xl tracking-tight dark:text-white">
        Grow Your Business With Us
      </h1>
      <p className="py-8 opacity-80">
        When it comes to marketing and design, we understand it can get
        confusing and frustrating. Our promise to clients is to communicate in a
        user-friendly way, creating clarity and transparency in our work,
        because sometimes we all need a little push in the right direction.
      </p>
      <Button text="Learn More" />
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

const images = [
  'https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60',
  'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60',
];


export default function Home() {
  return (
    <Page>
      <main>
        <HeroImage />
        <Container>
          <TwoColumns
            title={'Traditional & Digital Marketing'}
            left={LeftContent()}
            right={RightContent()}
            textClass="text-black"
          />
          <Container bg="bg-light-purple">
            <Testemonies />
          </Container>
        </Container>
        <Container bg="bg-light-purple">
          <Instagram />
        </Container>
        <Container>
          <About />
        </Container>
        <Container bg="bg-ascreative">
          <Clients />
        </Container>
        <Container bg="bg-light-purple">
          {/* <Hero LeftContent={LeftContent()} RightContent={RightContent()} /> */}
          <Services />
        </Container>
        <Container>
          <Section
            left={LeftContent()}
            right={RightContent()}
            direction="down"
          />
          <Slider slides={images} />
          <Section left={LeftContent()} right={RightContent()} direction="up" />
        </Container>
        <Container bg="bg-light-purple">
          <FullWidth>
            <Contact />
          </FullWidth>
        </Container>
      </main>
    </Page>
  );
}
