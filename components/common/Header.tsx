import React, { useState } from "react";
import Image from "next/image";
import HeaderBurger from "./header/header.burger";

interface HeaderProps {}

export default function Header({}: HeaderProps) {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__pc">
          <div className="header__first">
            <div className="header__image">
              <Image
                src={"/logo.png"}
                width={200}
                height={64}
                alt="Agilus logo"
              />
            </div>
            <div className="header__title-box">
              <h1 className="header__title">Молекулярно-генетический центр</h1>
              <h2 className="header__subtitle">
                Редкие, сложные и генетические исследования
              </h2>
              <div className="header__title-images">
                <div className="header__title-image">
                  <Image
                    src={"/logo-1.jpeg"}
                    width={120}
                    height={51}
                    alt="Agilus logo"
                  />
                </div>
                <div className="header__title-image">
                  <Image
                    src={"/logo-2.jpeg"}
                    width={47}
                    height={51}
                    alt="Agilus logo"
                  />
                </div>
                <div className="header__title-image">
                  <Image
                    src={"/logo-3.jpeg"}
                    width={50}
                    height={51}
                    alt="Agilus logo"
                  />
                </div>
                <div className="header__title-image">
                  <Image
                    src={"/logo-4.jpeg"}
                    width={100}
                    height={51}
                    alt="Agilus logo"
                  />
                </div>
              </div>
            </div>
            <div className="header__contacts">
              <div className="header__contacts-tels">
                <a href="tel:+77476053006" className="header__contacts-tel">
                  +7 (747) 605-30-06
                </a>
                <a href="tel:+77273111403" className="header__contacts-tel">
                  +7 (727) 311-14-03
                </a>
                <button className="header__contact-button">
                  Заказать обратный звонок
                </button>
              </div>
              <div className="header__contacts-social">
                <p className="header__contacts-social-text">Связаться с нами</p>
                <div className="header__contacts-social-images">
                  <a
                    href="https://wa.me/77476053006?text="
                    className="header__contacts-social-image"
                  >
                    <Image src="/whatsapp-logo.png" width={25} height={25} />
                  </a>
                  <a className="header__contacts-social-image">
                    <Image src="/telegram-logo.png" width={25} height={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="header__second">
            <nav className="header__menu" aria-label="Основная навигация">
              <ul role="list" className="header__menu-list">
                <li className="header__menu-list-item">
                  <a className="header__menu-list-link" href="">
                    Главная
                  </a>
                </li>
                <li className="header__menu-list-item">
                  <a className="header__menu-list-link" href="">
                    О нас
                  </a>
                </li>
                <li className="header__menu-list-item">
                  <a className="header__menu-list-link" href="">
                    Услуги
                  </a>
                </li>
                <li className="header__menu-list-item">
                  <a className="header__menu-list-link" href="">
                    Прайс-лист
                  </a>
                </li>
                <li className="header__menu-list-item">
                  <a className="header__menu-list-link" href="">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="header__mobile">
          <div className="header__image">
            <Image
              src={"/logo.png"}
              width={200}
              height={64}
              alt="Agilus logo"
            />
          </div>
          <HeaderBurger />
          <div className="header__menu-hidden">
            <nav className="header__menu" aria-label="Основная навигация">
              <ul role="list" className="header__menu-list">
                <li className="header__menu-list-item">
                  <a className="header__menu-list-link" href="">
                    Главная
                  </a>
                </li>
                <li className="header__menu-list-item">
                  <a className="header__menu-list-link" href="">
                    О нас
                  </a>
                </li>
                <li className="header__menu-list-item">
                  <a className="header__menu-list-link" href="">
                    Услуги
                  </a>
                </li>
                <li className="header__menu-list-item">
                  <a className="header__menu-list-link" href="">
                    Прайс-лист
                  </a>
                </li>
                <li className="header__menu-list-item">
                  <a className="header__menu-list-link" href="">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
            <div className="header__contacts">
              <div className="header__contacts-social-images">
                <a
                  href="https://wa.me/77476053006?text="
                  className="header__contacts-social-image"
                >
                  <Image src="/whatsapp-logo.png" width={25} height={25} />
                </a>
                <a className="header__contacts-social-image">
                  <Image src="/telegram-logo.png" width={25} height={25} />
                </a>
              </div>
              <div className="header__contacts-tels">
                <a href="tel:+77476053006" className="header__contacts-tel">
                  +7 (747) 605-30-06
                </a>
                <a href="tel:+77273111403" className="header__contacts-tel">
                  +7 (727) 311-14-03
                </a>
              </div>
              <button className="header__contact-button">
                Бесплатная консультация
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
