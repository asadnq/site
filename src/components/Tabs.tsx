import { useState } from 'react';

const slugToTitle = (str: string) =>
  str.replaceAll(/-/g, ' ').replace(/\w{1}/, str[0].toUpperCase());

const sections: { slug: string; description: string }[] = [
  {
    slug: 'posts',
    description:
      'My humble attempt to record the journey of meandering through my mental maze; one musing at a time.',
  },
  {
    slug: 'book-reviews',
    description: 'Book reviews',
  },
  {
    slug: 'about',
    description: '',
  },
];

export const Tabs: React.FC<{
  posts: React.ReactNode;
  about: React.ReactNode;
  bookReviews: React.ReactNode;
}> = (props) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeSection = sections[activeTab];

  return (
    <>
      <nav className="flex flex-col">
        <ul className="flex justify-between">
          {sections.map((section, index) => {
            const isActive = sections[activeTab].slug === section.slug;

            const tabStyle = `animated-underline ${
              isActive ? 'after:scale-x-75' : 'after:scale-x-0'
            }`;

            return (
              <li key={section.slug} className={tabStyle}>
                <button onClick={() => setActiveTab(index)}>
                  <h3
                    className={`${
                      isActive ? 'brightness-100' : 'brightness-75'
                    }`}>
                    {slugToTitle(section.slug)}
                  </h3>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <section className="px-2 pt-6">
        <hgroup>
          <h2 className="text-secondary">{slugToTitle(activeSection.slug)}</h2>
          {activeSection.description.length > 0 && activeSection.description}
        </hgroup>
        <div className="h-2" />
        {(() => {
          switch (activeSection.slug) {
            case 'posts':
              return props.posts;
            case 'book-reviews':
              return props.bookReviews;
            default:
              return props.about;
          }
        })()}
      </section>
    </>
  );
};

export default Tabs;
