import React from "react";
import '../App.css';
// import logos from '../img/2.png';
// import Button from '../Button.jsx'
// import InputTimeDate from "../InputTimeDate";
// import InputText from "../InputText";
// import Logo from "../Logo";
// import ButtonBack from '../ButtonBack';
// import BtnBurger from '../BtnBurger';
// import NavigationBottom from "../NavigationBottom";

import { FaChevronRight } from "react-icons/fa"; //стрелка вправо
import { FaEnvelope } from "react-icons/fa"; //почта
import { FaMapMarkerAlt } from "react-icons/fa"; //геолокация
import { FaPhoneAlt } from "react-icons/fa"; //телефон

import { ButtonBack } from '../cards'


function Settings() {
    return (
        <div className="wrapper">
            <div className="wrapper__content">
                <div className="header__container">
                    <div className="header__logo">
                    </div>
                </div>
                <div className="content">
                    <div>
                        <div>
                            <ButtonBack />
                            <h1 className="zgl__login--card--reg">Настройки</h1>

                        </div>
                        <div className="order__block">
                            <div className="order__content-telefon">
                                <div className="">
                                    <p>Фаттахов Салават</p>
                                </div>
                                <div className="forward__lastname">
                                    <FaChevronRight />
                                </div>
                            </div>
                            <p className="title__contacts">Контакты</p>
                            <div className="order__content">
                                <div className="container__fasource">
                                    <div className="svg__content">
                                        <FaPhoneAlt />
                                    </div>
                                    <div className="">
                                        <p className="title__menu">Телефон</p>
                                        <p className="title__text">880090005555</p>
                                    </div>
                                </div>
                                <div className="forward">
                                    <FaChevronRight />
                                </div>

                            </div>
                            <div className="order__content">
                                <div className="container__fasource">
                                    <div className="svg__content">
                                        <FaEnvelope />
                                    </div>
                                    <div className="">
                                        <p className="title__menu">Почта</p>
                                        <p className="title__text">reptilt@mail.ru</p>
                                    </div>
                                </div>
                                <div className="forward">
                                    <FaChevronRight />
                                </div>
                            </div>

                            <div className="order__content">
                                <div className="container__fasource">
                                    <div className="svg__content">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div className="">
                                        <p className="title__menu">Адрес</p>
                                        <p className="title__text">Москва, ул. Кутузова д. 17б, кв 14</p>
                                    </div>
                                </div>
                                <div className="forward">
                                    <FaChevronRight />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                {/* <NavigationBottom /> */}
                <div className="bl_heitgh--crOrder"></div>
            </div>
        </div>
    );
}




export default Settings;