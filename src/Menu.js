import React from 'react';

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.reverse().map((menuItem) => {
        const { id, title, category, img, tech, url } = menuItem;
        return (
          <article key={id} className="menu-item">
            <a href={url} target="_blank">
              <img src={img} alt={title} className="photo" />
            </a>
            <div className="item-info">
              <header>
                <h4>{title}</h4>
              </header>
              <p className="item-text">{category}</p>
              <h5 className="item-text">{tech}</h5>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;

{
  /* <section className="photos">
  <div className="photos-center">
    {img.map((image) => {
      // console.log(image);
      return <img key={image.id} {...image} />;
    })}
  </div>
  {loading && <h2 className="loading">Loading...</h2>}
</section>; */
}
