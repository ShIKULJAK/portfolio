import React from 'react';

const Header = ({ id, title, category, img, tech, url }) => {
  return (
    <section>
      <img width="100" src="./images/profile.jpeg" alt={category} />
      <h4>boris šikuljak</h4>
    </section>
  );
};

export default Header;
