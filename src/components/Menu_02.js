import React from 'react';

const Menu_02 = ({ items }) => {
    console.log(items)
 return(
    <div className="section-center">
      {items.map((items) => {
        const { id, title, img, price, desc } = items;
        return (
          <article key={id}className="menu-item">
            <img
              src={img}
              alt="buttermilk pancakes"
              className="photo"
            />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">
                  {desc}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  )
}
export default Menu_02;
