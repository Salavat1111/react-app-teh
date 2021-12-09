import React from "react";
import '../App.css';
import logos from '../img/2.png';
// import Button from '../Button.jsx'
// import InputTimeDate from "../InputTimeDate";
// import InputText from "../InputText";
// import Logo from "../Logo";
// import BtnBurger from '../BtnBurger';

import { Button, InputTimeDate, InputText, } from '../cards'
import SortPopup from "./components/SortPopup";

function Repair() {
    return (

        // <div className="content__repair">
        <div className="content__repair">
            <div>
                <img className="repair__page-img" alt="" src={logos} />
            </div>
            <div className="input__regstr">
                <InputText text="Адрес" />
                {/* <InputText text="Выбрать технику" /> */}
                <SortPopup items={['холодильник', 'стиральная машинка', 'телевизор',]} />
                <div className="block__time-date">
                    <InputTimeDate text="время" />
                    <InputTimeDate text="дата" />
                </div>
                <textarea placeholder="напишите что случилось"></textarea>
                <div>
                    <Button>отправить</Button>
                    <Button outline>отправить</Button>
                </div>

            </div>
            <div className="bl_heitgh--crOrder"></div>
        </div>
        // </div>
    );
}




export default Repair;