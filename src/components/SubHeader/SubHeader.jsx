import React, { useState } from "react";
import "./SubHeader.css";

const SubHeader = ({
  title,
  onCategoryChange,
  showViewToggle = false,
  showSortMenu = false,
  onSortChange,
  onViewChange
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSort, setActiveSort] = useState("sugerencias");
    const [activeFilter, setActiveFilter] = useState("Sugerencias para ti");
  const filters = ["Sugerencias para ti", "Año de lanzamiento", "A-Z", "Z-A"];


  const handleGridClick = () => {
    if (onViewChange) onViewChange(false);
    setShowSuggestions(!showSuggestions);
  };

  const handleRowClick = () => {
    if (onViewChange) onViewChange(true);
    setShowSuggestions(false);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleCategorySelect = (id) => {
    setSelectedCategory(id);
    if (onCategoryChange) onCategoryChange(id);
    setMenuOpen(false);
  };

  const handleSortSelect = (sortId) => {
    setActiveSort(sortId);
    if (onSortChange) onSortChange(sortId);
    setShowSuggestions(false);
  };

  const handleFilterSelect = (filter) => {
    setActiveFilter(filter);
    if(onSortChange) onSortChange(filter);
    setShowSuggestions(false);
  };


  const categories = [
    { id: "", name: "Todos" },
    { id: "10673", name: "Acción" },
    { id: "6721", name: "Animes" },
    { id: "52117", name: "Británicos" },
    { id: "52780", name: "Ciencia y naturaleza" },
    { id: "10375", name: "Comedias" },
    { id: "27346", name: "Contenido infantil" },
    { id: "60951", name: "De adolescentes" },
    { id: "72404", name: "De EE. UU." },
    { id: "67644", name: "De México" },
    { id: "25788", name: "Deportes" },
    { id: "11714", name: "Dramas" },
    { id: "81614964", name: "Emmy® 2025 de Netflix" },
    { id: "11559", name: "Especiales de stand up" },
    { id: "67708", name: "Latinoamericanos" },
    { id: "2070390", name: "Reality shows y entrevistas" },
    { id: "26156", name: "Romances" },
    { id: "1372", name: "Sci-fi y fantasía" },
    { id: "10105", name: "Series documentales" },
    { id: "2638104", name: "Series dramáticas coreanas" },
    { id: "75392", name: "Series policiales" },
    { id: "10634", name: "Telenovelas" },
    { id: "83059", name: "Terror" },
    { id: "89811", name: "Thrillers" },
  ];

  const sortOptions = [
    { id: "sugerencias", name: "Sugerencias para ti" },
    { id: "anio", name: "Año de lanzamiento" },
    { id: "az", name: "A-Z" },
    { id: "za", name: "Z-A" }
  ];

  return (
    <div>
      <div className="sub-header">
        <div className="gallery-header">
          <div className="genre-details">
            <span className="genreTitle">{title}</span>
            <div className="subgenres">
              <div className="ptrack-container">
                <div className="ptrack-content">
                  <div
                    label="Géneros"
                    cols="3"
                    className={`nfDropDown ${menuOpen ? "open" : ""} theme-lakira`}
                  >
                    <div
                      className="label"
                      role="button"
                      aria-haspopup="true"
                      tabIndex="0"
                      aria-expanded={menuOpen}
                      aria-labelledby="profileLanguageDropDown-header"
                      onClick={toggleMenu}
                    >
                      Géneros<span className="arrow"></span>
                    </div>

                    {menuOpen && (
                      <div
                        role="menu"
                        className="sub-menu theme-lakira"
                        style={{ opacity: 1, transitionDuration: 150 }}
                      >
                        <ul className="sub-menu-list multi-column">
                          {categories.map((cat) => (
                            <li className="sub-menu-item" key={cat.id} role="none">
                              <span
                                className="sub-menu-link"
                                onClick={() => handleCategorySelect(cat.id)}
                              >
                                {cat.name}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="aro-toggle">
          <button
            className="aro-row-toggle"
            aria-label="Vista de lista"
            tabIndex="0"
            onClick={handleRowClick}
          >
            {/* Ícono lista */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ListStandard" aria-hidden="true" className="svg-icon svg-icon-rows">
              <path fillRule="evenodd" clipRule="evenodd" d="M24 6H0V4H24V6ZM24 18V20H0V18H24ZM0 13H12V11H0V13Z" fill="currentColor"></path>
            </svg>
          </button>

          <div className="aro-grid">
            {!showSuggestions && (
            <button
              onClick={handleGridClick}
              aria-label="Vista de cuadrícula"
              className="aro-grid-toggle"
              tabIndex="0"
            >
              {/* Ícono grid */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="GridFillStandard" aria-hidden="true" className="svg-icon svg-icon-grid">
                <path fillRule="evenodd" clipRule="evenodd" d="M1 3C0.447715 3 0 3.44772 0 4V10C0 10.5523 0.447715 11 1 11H10C10.5523 11 11 10.5523 11 10V4C11 3.44772 10.5523 3 10 3H1ZM1 13C0.447715 13 0 13.4477 0 14V20C0 20.5523 0.447715 21 1 21H10C10.5523 21 11 20.5523 11 20V14C11 13.4477 10.5523 13 10 13H1ZM13 4C13 3.44772 13.4477 3 14 3H23C23.5523 3 24 3.44772 24 4V10C24 10.5523 23.5523 11 23 11H14C13.4477 11 13 10.5523 13 10V4ZM14 13C13.4477 13 13 13.4477 13 14V20C13 20.5523 13.4477 21 14 21H23C23.5523 21 24 20.5523 24 20V14C24 13.4477 23.5523 13 23 13H14Z" fill="currentColor"></path>
              </svg>
            </button>
            )}
            {showSuggestions && (
              <div className={`nfDropDown theme-aro ${showSuggestions ? "open" : ""}`}>
            <div className="label" onClick={() => setShowSuggestions(!showSuggestions)}>
              {activeFilter}
              <span className="arrow"></span>
            </div>
            {showSuggestions && (
              <div className="sub-menu theme-aro" role="menu">
                <ul className="sub-menu-list">
                  {filters.map((filter) => (
                    <li className="sub-menu-item" key={filter} onClick={() => handleFilterSelect(filter)}>
                      <a
                        className="sub-menu-link"
                        style={{
                          fontWeight: activeFilter === filter ? "bold" : "normal",
                          color: activeFilter === filter ? "#fff" : "#ccc",
                          background: activeFilter === filter ? "rgba(255,255,255,0.1)" : "transparent",
                        }}
                      >
                        {filter}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
            )}
          </div>
        </div>
      </div>
      </div>
  );
};

export default SubHeader;
