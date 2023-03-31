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
      setMenuItems(items);
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
          <p className="py-10">
            Hello, I'm Boris Šikuljak, and these are courses projects from John
            Smilga's (React course), The Net Ninja (React and Firebase course) and Maximilian Schwarzmüller's (Remix.js
            course) which I've completed. <br />
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
