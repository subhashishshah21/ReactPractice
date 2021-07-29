import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all',...new Set(items.map((item)=>item.category))
] 
function App() {
  const [menuItems,setmenuItems] = useState(items);
  const [categories,setcategories]= useState(allCategories);
  
  const filterItems = (category)=>{
    const newItems = items.filter((item)=>
      item.category === category
    )
    setmenuItems(newItems);
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menus</h2>  
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items = {menuItems} />
      </section>
    </main>
  );
}

export default App;
