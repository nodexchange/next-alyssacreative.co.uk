import Slider from 'react-slick';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import { Heading } from '@/components/Heading';

const NextArrow = ({ className, style, onClick }) => (
  <div className={className} style={{ ...style }} onClick={onClick}>
    <BsArrowRightCircle />
  </div>
);

const PrevArrow = ({ className, style, onClick }) => (
  <div className={className} style={{ ...style }} onClick={onClick}>
    <BsArrowLeftCircle />
  </div>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

export const Testemonies = () => {
  return (
    <section id="testimonies" className="w-full content-center text-center py-2 text-white">
      <Heading text="What our customers say about us?" />
      <div>
        <Slider {...settings}>
          <div>
            <h3>Keri</h3>
            <p>
              Share stories, questions, and find support with our social
              community
            </p>
          </div>
          <div>
            <h3>Feedback</h3>
            <p>
              “I have tried every lotion and this is the BEST lotion. It does
              not make your skin feel oily and it soaks right into your skin.
              <span className="text-[#1aa59d]">My skin is super soft!”</span>
            </p>
          </div>
          <div>
            <h3>Feedback</h3>
            <p>
              “I have tried every lotion and this is the BEST lotion. It does
              not make your skin feel oily and it soaks right into your skin.
              <span className="text-[#1aa59d]">My skin is super soft!”</span>
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
};
