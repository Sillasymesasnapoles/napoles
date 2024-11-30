import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { company, about } = config;
  const { logo, name: companyName } = company;
  const { socialMedia, sections } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <img src={logo} alt={companyName} className="w-16 h-16" />
        </div>
        <span className={`text-base text-primary font-semibold tracking-wide uppercase`}>
          LLÁMANOS
        </span>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {sections.map((section, index) => (
            <a
              key={`${section.name}-${index}`}
              href={`tel:${section.href}`}
              className="hover:text-primary text-base cursor-pointer leading-4 text-gray-800 dark:text-gray-400 dark:hover:text-white font-semibold"
            >
              {section.name}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-x-8 mt-6 h-8">
          <a
            aria-label="facebook"
            href={socialMedia.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.847v-3.622h2.973V8.413c0-2.943 1.796-4.548 4.415-4.548 1.253 0 2.332.093 2.646.135v3.066h-1.816c-1.424 0-1.7.677-1.7 1.671v2.191h3.406l-.444 3.622h-2.962V24h5.803c.73 0 1.325-.593 1.325-1.324V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
          <a
            aria-label="Google Maps"
            href={socialMedia.maps}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className="fill-current text-gray-800 dark:text-white hover:text-primary"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
             
            >
              <path d="M12 2c-3.866 0-7 3.134-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.378 0-2.5-1.122-2.5-2.5S10.622 6.5 12 6.5 14.5 7.622 14.5 9 13.378 11.5 12 11.5z"/>
              <path d="M12 4.2c-2.645 0-4.8 2.155-4.8 4.8 0 1.79 1.475 4.167 4.8 7.685 3.325-3.518 4.8-5.895 4.8-7.685 0-2.645-2.155-4.8-4.8-4.8z"/>
              <circle cx="12" cy="9" r="1.5"/>
            </svg>
          </a>
        </div>
        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            &copy; {new Date().getFullYear()} designed by{' '}
            <a href="www.linkedin.com/in/carlos-mar29052021" rel="nofollow">
              Carlos Mar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
