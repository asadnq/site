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
          let clsNames = 'block border-b-2 border-tertiary';

          if (sections[activeTab].slug === section.slug) {
            // clsNames = clsNames.concat(' bg-cyan-500');
          }

          return (
            <li key={section.slug} className={clsNames}>
              <button onClick={() => setActiveTab(index)}>
                <h3>{slugToTitle(section.slug)}</h3>
              </button>
            </li>
          );
        })}
      </ul>
      {(() => {
        const activeSection = sections[activeTab];

        switch (activeSection.slug) {
          case 'posts':
            // return <Posts />;
            // return <slot name="posts" />;
            return props.posts;
          case 'book-reviews':
            // return <BookReviews />;
            // return <slot name="book-review" />;
            return props.bookReviews;
          default:
            // return <slot name="about-me" />;
            return props.aboutMe;
        }
      })()}
    </nav>
  );
};

export const Posts = () => {
  return <h1>Posts</h1>;
};

export const AboutMe = () => {
  return <h1>About me </h1>;
};

export const BookReviews = () => {
  return <h1>book reviews</h1>;
};

export default Tabs;
