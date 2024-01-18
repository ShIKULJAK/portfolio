import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import Header from './Header';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items.reverse());
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      {/* <Header items={menuItems} /> */}
      <section className="menu section">
        <div className="title">
          <img
            className="profile-img"
            width="200"
            src="./images/profile.jpeg"
          />
          {/* <h4 className="py-10">boris šikuljak</h4> */}
          <p className="py-10 text-dark">
         Hello, I'm Boris Šikuljak, and I'm a junior frontend developer. Down below are the React projects from variety courses for frontend development and one (fullstack) Remix.js project which I've completed.
There is one project (Frontened mentor - Invoice app) which I have made from scratch. All the other projects as I mentioned are from Udemy's courses, which I've carefully went through it.
<br/>

At the end of october 2023, I've started to learn Strapi (Headless CMS) for backend.

  <br/>
  
My stack:
<b>HTML/CSS, SCSS, Bootstrap, Tailwind, Javascript, TypeScript, React, Redux, Redux Toolkit, Next.js, Remix.js, Strapi (Headless CMS)</b>
<br/>
I'm planning to start learning Node.js. 
<br />
            My github profile:
            <a href="https://github.com/ShIKULJAK" target="_blank">
              github.com/ShIKULJAK
            </a>
            .
          </p>
          {/* <h2>portfolio</h2> */}
          <h2>projects</h2>
          {/* <h3>boris šikuljak</h3> */}
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
