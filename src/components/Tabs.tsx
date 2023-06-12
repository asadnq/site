import { useState } from 'react';

const slugToTitle = (str: string) =>
  str.replaceAll(/-/g, ' ').replace(/\w{1}/, str[0].toUpperCase());

const sections: { slug: string; description: string }[] = [
  {
    slug: 'posts',
    description: 'Posts',
  },
  {
    slug: 'book-reviews',
    description: 'Book reviews',
  },
  {
    slug: 'about-me',
    description: 'About me',
  },
];

export const Tabs: React.FC<{
  posts: React.ReactNode;
  aboutMe: React.ReactNode;
  bookReviews: React.ReactNode;
}> = (props) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
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
                  className={` ${isActive ? 'brightness-100' : 'brightness-75'}`}>
                  {slugToTitle(section.slug)}
                </h3>
              </button>
            </li>
          );
        })}
      </ul>
      {(() => {
        const activeSection = sections[activeTab];

        switch (activeSection.slug) {
          case 'posts':
            return props.posts;
          case 'book-reviews':
            return props.bookReviews;
          default:
            return props.aboutMe;
        }
      })()}
    </nav>
  );
};

export default Tabs;
