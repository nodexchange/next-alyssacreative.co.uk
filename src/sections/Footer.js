import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import clsx from 'clsx';
import { Container } from "@/layouts/Container";

export const Footer = ({ children, previous, next }) => {
  return (
    <footer
      className={clsx(
        'bg-ascreative text-sm leading-6',
        previous || next ? 'mt-12' : 'mt-16'
      )}>
      <Container>
        <div className="pt-10 pb-28 border-t border-gray-200 sm:flex justify-between text-white dark:border-gray-600">
          <div className="mb-6 sm:mb-0 sm:flex">
            <p>COPYRIGHT © 2022 AS CREATIVE</p>
            <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 dark:sm:border-gray-200/5">
              <Link href="/brand">
                <a className="hover:text-gray-900 dark:hover:text-gray-400">
                  Trademark Policy
                </a>
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

Footer.propTypes = {};
