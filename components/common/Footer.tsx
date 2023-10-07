import React from "react";
import Image from "next/image";
interface HeaderProps {}

export default function Footer({}: HeaderProps) {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__columns">
          <div className="footer__column">
            <div className="footer_logo">
              <Image src="/logo-white.png" width={215} height={69} />
            </div>
            <div className="footer__text">
              «Диагностический центр «Agilus by dgtl lab.» — центр, оказывающий
              широкий перечень диагностических услуг взрослому и детскому
              населению
            </div>
          </div>
          <div className="footer__column">
            <h3 className="footer__column-title">КОНТАКТЫ</h3>
            <div className="footer__contacts">
              <div className="footer__contact">
                <h4 className="footer__contact-title">«Agilus by dgtl lab»</h4>
                <p className="footer__text">
                  Республика Казахстан г. Алматы, пр. Санаторная 46
                </p>
              </div>
              <div className="footer__contact">
                <h4 className="footer__contact-title">Телефоны:</h4>
                <p className="footer__text">
                  <a href="tel:87476053006">87476053006</a> <br />
                  <a href="tel:87273111403">87273111403</a>
                </p>
              </div>
              <div className="footer__contact">
                <h4 className="footer__contact-title">E-mail: </h4>
                <p className="footer__text">
                  <a href="mailto:agilus.kz@mail.ru">agilus.kz@mail.ru</a>
                </p>
              </div>
            </div>
          </div>
          <div className="footer__column">
            <h3 className="footer__column-title">ГЛАВНАЯ</h3>
            <nav className="footer__menu">
              <ul className="footer__menu-list">
                <li className="footer__menu-list-item">
                  <a href="/" className="footer__menu-list-link footer__text">
                    Услуги
                  </a>
                </li>
                <li className="footer__menu-list-item">
                  <a href="/" className="footer__menu-list-link footer__text">
                    О центре
                  </a>
                </li>
                <li className="footer__menu-list-item">
                  <a href="/" className="footer__menu-list-link footer__text">
                    Наши врачи
                  </a>
                </li>
                <li className="footer__menu-list-item">
                  <a href="/" className="footer__menu-list-link footer__text">
                    Новости
                  </a>
                </li>
                <li className="footer__menu-list-item">
                  <a href="/" className="footer__menu-list-link footer__text">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__column">
            <div className="footer__sub-columns">
              <div className="footer__sub-column">
                <h3 className="footer__column-title">РЕЖИМ РАБОТЫ</h3>
                <p className="footer__text">
                  Пн-Пт: 08:00 – 20:00 <br />
                  Сб: Выходной <br />
                  Вс: Выходной
                </p>
              </div>
              <div className="footer__sub-column">
                <h3 className="footer__column-title">МЫ В СОЦСЕТЯХ</h3>
                <div className="footer__social">
                  <a href="" className="footer__social-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_30_333)">
                        <path
                          d="M21.647 0.414551H8.50186C4.22364 0.414551 0.743164 3.89503 0.743164 8.17325V21.3186C0.743164 25.5966 4.22364 29.0771 8.50186 29.0771H21.6473C25.9253 29.0771 29.4057 25.5966 29.4057 21.3186V8.17325C29.4057 3.89503 25.9253 0.414551 21.647 0.414551V0.414551ZM15.0744 22.583C10.7529 22.583 7.23725 19.0674 7.23725 14.7458C7.23725 10.4243 10.7529 6.90863 15.0744 6.90863C19.396 6.90863 22.9116 10.4243 22.9116 14.7458C22.9116 19.0674 19.396 22.583 15.0744 22.583ZM23.0991 8.7569C21.822 8.7569 20.7833 7.71818 20.7833 6.4411C20.7833 5.16402 21.822 4.12508 23.0991 4.12508C24.3761 4.12508 25.4151 5.16402 25.4151 6.4411C25.4151 7.71818 24.3761 8.7569 23.0991 8.7569Z"
                          fill="#42B3E5"
                        />
                        <path
                          d="M15.0745 8.58887C11.6797 8.58887 8.9176 11.3508 8.9176 14.7457C8.9176 18.1405 11.6797 20.9026 15.0745 20.9026C18.4695 20.9026 21.2314 18.1405 21.2314 14.7457C21.2314 11.3508 18.4695 8.58887 15.0745 8.58887Z"
                          fill="#42B3E5"
                        />
                        <path
                          d="M23.0991 5.80566C22.7488 5.80566 22.4636 6.09082 22.4636 6.44114C22.4636 6.79146 22.7488 7.07662 23.0991 7.07662C23.4496 7.07662 23.7348 6.79168 23.7348 6.44114C23.7348 6.0906 23.4496 5.80566 23.0991 5.80566Z"
                          fill="#42B3E5"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_30_333">
                          <rect
                            width="28.6626"
                            height="28.6626"
                            fill="white"
                            transform="translate(0.743164 0.414551)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                  <a href="" className="footer__social-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_30_328)">
                        <path
                          d="M8.14846 15.6803H11.2903V28.6149C11.2903 28.8702 11.4973 29.0772 11.7526 29.0772H17.0798C17.3352 29.0772 17.5421 28.8702 17.5421 28.6149V15.7412H21.154C21.3888 15.7412 21.5864 15.565 21.6132 15.3317L22.1618 10.5698C22.1769 10.4388 22.1354 10.3076 22.0477 10.2093C21.96 10.1109 21.8344 10.0546 21.7026 10.0546H17.5423V7.06964C17.5423 6.16982 18.0268 5.71353 18.9825 5.71353C19.1187 5.71353 21.7026 5.71353 21.7026 5.71353C21.958 5.71353 22.1649 5.50651 22.1649 5.25123V0.880272C22.1649 0.624897 21.958 0.417972 21.7026 0.417972H17.9538C17.9274 0.416677 17.8687 0.414551 17.7822 0.414551C17.1317 0.414551 14.8708 0.542238 13.0848 2.18525C11.106 4.00598 11.381 6.186 11.4468 6.56398V10.0545H8.14846C7.89308 10.0545 7.68616 10.2615 7.68616 10.5168V15.2179C7.68616 15.4732 7.89308 15.6803 8.14846 15.6803Z"
                          fill="#42B3E5"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_30_328">
                          <rect
                            width="28.6626"
                            height="28.6626"
                            fill="white"
                            transform="translate(0.594238 0.414551)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <button className="footer__button">Записать на консультацию</button>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__bottom-text">© 2019-2023 Agilus by dgtl lab.</p>
        </div>
      </div>
    </div>
  );
}
