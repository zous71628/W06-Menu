import Menu_02 from './components/Menu_02';
import './App_02.css';
import items from './data.js';
import { useState } from 'react';
import Category_02 from './components/Category_02';

const allCategories = [`all`, ...new Set(items.map((item) => item.category))];
console.log('allCategory', allCategories);

function App_02() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems=(category)=>{
    if(category==='all'){
      setMenuItems(items)
    }else{
      const newItems = items.filter((item)=>item.category===category);
      setMenuItems(newItems)
    }
    
  }
  return (
    <div className="App">
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Category_02 categories={categories} filterItems={filterItems}/>
          <Menu_02 items={menuItems} />
        </section>
      </main>
    </div>
  );
}

export default App_02;
