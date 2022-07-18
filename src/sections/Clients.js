import Image from 'next/image';
import Slider from 'react-slick';
import { Heading } from '@/components/Heading';

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500
};

const config = [
  {
    'name': 'BachataBox',
    'url': 'https://bachatabox.com',
    'img': '/images/logos/Bachata-box.jpeg'
  },
  {
    'name': 'Dryson Technologies',
    'url': 'https://bachatabox.com',
    'img': '/images/logos/draysontechnologies.png'
  },
  {
    'name': 'Smittn Knittn',
    'url': 'https://bachatabox.com',
    'img': '/images/logos/smittn.jpeg'
  },
  {
    'name': 'Pexava London',
    'url': 'https://bachatabox.com',
    'img': '/images/logos/pexavalogo-facebook.png'
  },
  {
    'name': 'Dance Spotlight',
    'url': 'https://bachatabox.com',
    'img': '/images/logos/dance-spotlight.png'
  },
  {
    'name': 'Santa Fe Basque Restaurant',
    'url': 'https://bachatabox.com',
    'img': '/images/logos/Santa-Fe-basque.png'
  },
  {
    'name': 'Shazazz Jewellery',
    'url': 'https://bachatabox.com',
    'img': '/images/logos/Shazazz-Jewellery.png'
  },
  {
    'name': 'Suchef',
    'url': 'https://bachatabox.com',
    'img': '/images/logos/Suchef.jpeg'
  }
]

export const Clients = () => {
  console.log(config);
  return (
    <section id="clients" className="p-5 h-[30vh] clients">
      <Heading text="Our Clients" />
      <Slider {...settings}>
        {config.map((client, i) => (
          <div key={`${client.name}-${i}`} className="px-5">
            <h3 className="text-center pb-2">{client.name}</h3>
            <Image
              width="300px"
              height="200px"
              src={client.img}
              // layout="fill"
              objectFit="contain"
              // priority={true}
              alt={client.name}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};
