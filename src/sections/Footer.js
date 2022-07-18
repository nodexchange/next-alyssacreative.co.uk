import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import clsx from 'clsx';
import { Container } from '@/layouts/Container';

import { BsFacebook, BsTwitter, BsMap } from 'react-icons/bs';


export const Footer = ({ children, previous, next }) => {
  return (
    <footer id="footer">
      <div className="wrapper">
        <div className="footer-area">
          <div className="footer-menu-wrap">
            <div
              id="hs_menu_wrapper_Footer_"
              className="hs-menu-wrapper active-branch no-flyouts hs-menu-flow-horizontal"
              role="navigation"
              data-sitemap-name="default"
              data-menu-id="10139722848"
              aria-label="Navigation Menu">
              <ul role="menu" className="active-branch">
                <li
                  className="hs-menu-item hs-menu-depth-1 hs-item-has-children"
                  role="none">
                  <a
                    href="javascript:;"
                    aria-haspopup="true"
                    aria-expanded="false"
                    role="menuitem">
                    Marketing
                  </a>
                  <ul
                    role="menu"
                    className="hs-menu-children-wrapper js-acc-hidden">
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/social-media-marketing"
                        role="menuitem">
                        Social Media Marketing
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/ecommerce-marketing"
                        role="menuitem">
                        eCommerce Marketing
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/marketing-strategy"
                        role="menuitem">
                        Marketing Strategy
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/branding-design"
                        role="menuitem">
                        Branding &amp; Design
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/web-development"
                        role="menuitem">
                        Web Development
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/email-marketing"
                        role="menuitem">
                        Email Marketing
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="hs-menu-item hs-menu-depth-1 hs-item-has-children"
                  role="none">
                  <a
                    href="javascript:;"
                    aria-haspopup="true"
                    aria-expanded="false"
                    role="menuitem">
                    Promotion
                  </a>
                  <ul
                    role="menu"
                    className="hs-menu-children-wrapper js-acc-hidden">
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/influencer-marketing"
                        role="menuitem">
                        Influencer Marketing
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/search-marketing"
                        role="menuitem">
                        Search, SEO &amp; PPC
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/360brandfuel"
                        role="menuitem">
                        Growth Marketing
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/ecommerce-seo"
                        role="menuitem">
                        eCommerce SEO
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/event-marketing"
                        role="menuitem">
                        Event Marketing
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/media-buying"
                        role="menuitem">
                        Media Buying
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="hs-menu-item hs-menu-depth-1 hs-item-has-children"
                  role="none">
                  <a
                    href="javascript:;"
                    aria-haspopup="true"
                    aria-expanded="false"
                    role="menuitem">
                    Platforms
                  </a>
                  <ul
                    role="menu"
                    className="hs-menu-children-wrapper js-acc-hidden">
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/shopify-design-development"
                        role="menuitem">
                        Shopify Experts
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/klaviyo-expert"
                        role="menuitem">
                        Klaviyo Experts
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/hubspot-experts"
                        role="menuitem">
                        HubSpot CRM
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/bigcommerce-design-development"
                        role="menuitem">
                        BigCommerce
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/wordpress-ecommerce-development"
                        role="menuitem">
                        WordPress
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/ecommerce-migrations"
                        role="menuitem">
                        Migrations
                      </a>
                    </li>
                  </ul>
                </li>
                <li
                  className="hs-menu-item hs-menu-depth-1 hs-item-has-children active-branch"
                  role="none">
                  <a
                    href="javascript:;"
                    aria-haspopup="true"
                    aria-expanded="false"
                    role="menuitem">
                    Resources
                  </a>
                  <ul
                    role="menu"
                    className="hs-menu-children-wrapper active-branch js-acc-hidden">
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/careers"
                        role="menuitem">
                        Careers &amp; Jobs
                      </a>
                    </li>
                    <li
                      className="hs-menu-item hs-menu-depth-2 active active-branch"
                      role="none">
                      <a href="https://www.eventige.com/work" role="menuitem">
                        Agency Work
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/what-really-matters"
                        role="menuitem">
                        What Matters
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a href="https://www.eventige.com/blog" role="menuitem">
                        Agency Blog
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/partners"
                        role="menuitem">
                        Partnerships
                      </a>
                    </li>
                    <li className="hs-menu-item hs-menu-depth-2" role="none">
                      <a
                        href="https://www.eventige.com/contact"
                        role="menuitem">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-contact">
            <div className="footer-contact-item">
              <h3>Stay Connected</h3>
              <ul className="footer-contact-list">
                <li>
                  <a href="tel:+16465712054">+1 (646) 571-2054</a>
                </li>
                <li>
                  <a href="mailto:hello@eventige.com">hello@eventige.com</a>
                </li>
                <li>
                <p>COPYRIGHT © 2022</p>
                </li>
                <li>
                <p>AS CREATIVE</p>
                </li>
              </ul>
            </div>
            <div className="footer-contact-item">
              <section className="social flex">
                <a
                  href="https://twitter.com/eventige"
                  target="_blank"
                  rel="noreferrer">
                  <BsTwitter />
                </a>
                <a
                  href="https://facebook.com/Eventige"
                  target="_blank"
                  rel="noreferrer">
                  <BsFacebook />
                </a>
                <a
                  href="https://www.google.com/maps/place/Eventige+Media+Group/@40.757068,-73.9886347,17z/data=!3m1!5s0x89c259aca9a7d249:0x7f79ca3aa5b0265a!4m5!3m4!1s0x89c25854e6aa136f:0x20cf9222f820b1e6!8m2!3d40.757068!4d-73.986446"
                  target="_blank"
                  rel="noreferrer">
                  <BsMap />
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
      
    </footer>
    // <footer
    //   className='bg-ascreative text-sm leading-6'>
    //   <Container>
    //     <div className="pt-10 pb-28 border-t border-gray-200 sm:flex justify-between text-white dark:border-gray-600">
    //       <div className="mb-6 sm:mb-0 sm:flex">
    //         <p>COPYRIGHT © 2022 AS CREATIVE</p>
    //         <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 dark:sm:border-gray-200/5">
    //           <Link href="/brand">
    //             <a className="hover:text-gray-900 dark:hover:text-gray-400">
    //               Trademark Policy
    //             </a>
    //           </Link>
    //         </p>
    //       </div>
    //     </div>
    //   </Container>
    // </footer>
  );
};

Footer.propTypes = {};
