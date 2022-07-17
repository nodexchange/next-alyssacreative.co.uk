import { Card } from '@/components/Card';
import { FullWidth } from '@/layouts/FullWidth';

const servicesTitle = 'SERVICES FOR YOU';

const services = [
  {
    title: 'Digital Marketing',
    description:
      'Blogging, E-newsletters, Social Media Management, Brand Management, Audience Growth, Copywriting, Marketing Strategy',
  },
  {
    title: 'Website Management',
    description:
      'Search Engine Optimisation (SEO), fresh content and support your website’s promotion through digital marketing',
  },
  {
    title: 'Graphic Design',
    description:
      'Logo Design, Branding, Web Design, Photography, Brochure, Flyers, and Guide Design',
  },
  {
    title: 'Brand Development',
    description:
      'Blogging, E-newsletters, Social Media Management, Brand Management, Audience Growth, Copywriting, Marketing Strategy',
  },
];

function Cards() {
  const cards = [];
  for (let i = 0; i < 4; i++) {
    cards.push(
      <Card
        key={`card-${i}`}
        title={services[i].title}
        description={services[i].description}
      />
    );
  }
  return cards;
}

export const Services = () => {
  return (
    <div id="services" className=''>
      <FullWidth>
        <h2 className="text-xl">{servicesTitle}</h2>
      </FullWidth>
      <FullWidth>
        <div className="flex gap-x-3">{Cards()}</div>
      </FullWidth>
    </div>
  );
};
