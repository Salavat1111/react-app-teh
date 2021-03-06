import './App.css';

import { FaPlusCircle } from "react-icons/fa"; // создать
import { FaBorderAll } from "react-icons/fa"; // заказы
import { FaLayerGroup } from "react-icons/fa"; // история
import { FaRegSun } from "react-icons/fa"; // настройки

import { HistoryMap, Repair, Settings, СardOrder, Logo, NavigationBottom, BtnBurger } from './cards'
import { Routes, Route } from 'react-router-dom';




function App() {


  const items = [
    { value: 'создать', href: './1', icon: <FaPlusCircle />, },
    { value: 'заказы', href: './2', icon: <FaBorderAll />, },
    { value: 'история', href: './3', icon: <FaLayerGroup />, },
    { value: 'настройки', href: './4', icon: <FaRegSun />, },
  ];

  return (
    <>
      <div className="wrapper">
        <div className="wrapper__content">
          <div className="header__container">
            <div className="header__logo">
              <Logo />
            </div>
          </div>
          <BtnBurger />
          <div className="content__repair">
            <Routes>
              <Route path="/1" element={<Repair />} />
              <Route path="/2" element={<СardOrder />} />
              <Route path="/3" element={<HistoryMap />} />
              <Route path="/4" element={<Settings />} />
            </Routes>
          </div>
        </div>
        <NavigationBottom items={items} />
      </div>
    </>
  );
}

export default App;
