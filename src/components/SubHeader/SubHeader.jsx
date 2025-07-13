import react, { useState } from "react";
import "./SubHeader.css";

const SubHeader = ({
  title,
  categories =[],
  onCategoryChange,
  showViewToggle = false,
  showSortMenu = false,
  onSortChange,
}) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    console.log("Seleccionaste la categoría:", selectedCategory);
    const [sortType, setSortType] = useState("");
    
  return (
    <div className="sub-header">
      <div className="gallery-header">
        <span className="genreTitle">{title}</span>
        <div className="subgenres">
          <div className="label">Géneros</div>
          <select id="category-select" value={selectedCategory} onChange={(e)=> setSelectedCategory(e.target.value)}></select>
          <option value="">Todos</option>
          {categories.map((cat)=>(
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
          <span className="arrow"></span>
        </div>
      </div>
      <div className="aro-toggle">
        <button className="toggle"></button>
        <button className="grid"></button>
      </div>
    </div>
  );
};

export default SubHeader;
