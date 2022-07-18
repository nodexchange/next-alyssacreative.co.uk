import Image from 'next/image';
import { Button } from '@/components/Button';

export const Expert = () => {
  return (
    <section className="expert-section bg-[#57327d] text-white">
      <div className="">
        <div className="flex flex-row items-stretch">
          <div className="text w-1/3">
            <h3>
              Let's <br /> Grow
            </h3>
            <Button text="Start now" />
          </div>
          <div className="image w-1/3">
            <Image
              src="/images/Digital-Marketing-Agency-Expert-Jan.png"
              alt="Digital Marketing Agency Expert"
              loading="lazy"
              width="283"
              height="344"
              style="max-width: 100%; height: auto;"
            />
          </div>
          <div className="text w-1/3">
            <h4>
              Call{' '}
              <span className="tel">
                <a href="tel:+1%20(646)%20571-2054">+1 (646) 571-2054</a>
              </span>
            </h4>

            <p>
              Mon-Fri: 6 am - 7 pm ET
              <br />
              Weekends: 9 am - 6 pm ET
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
