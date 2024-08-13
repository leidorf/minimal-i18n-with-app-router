'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import {
  HexagonDottedBackground,
  PhoneHeader,
} from '@/public/images/publications/index';
import ExportedImage from 'next-image-export-optimizer';
import { useRouter } from 'next/navigation';
import { getDictionary } from '../../dictionaries';
import PublicationCard from './PublicationCard';

const PublicationsPage = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const router = useRouter();
  const {
    publications: {
      publicationsSection,
      publicationsCards,
      collaborateSection,
    },
  } = getDictionary(lang);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section>
        {/* Hero Container */}
        <div className="relative bg-gradient-to-b from-black to-[#162b4c]">
          <ExportedImage
            src={PhoneHeader}
            className="absolute h-full w-full object-cover opacity-40"
            alt=""
            priority
            basePath={basePath}
          />

          {/* Text Container */}
          <div className="mx-auto flex max-w-xl flex-col items-center justify-center space-y-8 px-10 pb-40 pt-64 text-center font-medium opacity-95">
            <h1 className="text-4xl text-green-500 sm:text-5xl">
              {publicationsSection.title}
            </h1>
            {publicationsSection.texts.map((text, i) => (
              <p key={i} className="text-white">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Overlay Container */}
      <div className="relative -mb-24 bg-gradient-to-b from-[#162b4c] to-[#3468b2]">
        <ExportedImage
          src={HexagonDottedBackground}
          className="absolute h-full w-full object-cover opacity-30"
          alt=""
          priority
          basePath={basePath}
        />

        {/* Publications Section */}
        <section>
          {/* Cards Container */}
          <div className="relative flex flex-col items-center justify-center space-y-8 px-10 pt-28">
            {publicationsCards.map((publication, i) => (
              <div
                key={i}
                className="space-y-4 rounded-xl bg-[#00000060] px-10 py-8 text-left text-white sm:px-16 md:w-[700px] md:space-y-5"
              >
                <PublicationCard {...publication} />
              </div>
            ))}
          </div>
        </section>

        {/* Join Our Team Section */}
        <section>
          <div className="relative mx-auto max-w-4xl space-y-24 px-8 py-40 text-center font-medium text-white md:space-y-14">
            <h2 className="text-4xl leading-normal md:leading-relaxed">
              {collaborateSection.title}
            </h2>
            <button
              className="rounded-full bg-gradient-to-b from-[#38b76b] to-[#3578de] p-6 text-xl font-medium sm:px-8 sm:text-2xl md:px-8 md:py-4 md:text-lg"
              onClick={() => router.push(`/${lang}/job-listing`)}
            >
              {collaborateSection.linkText}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PublicationsPage;
