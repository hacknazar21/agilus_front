"use client";
import React, { useContext } from "react";
import { contextCheckout } from "../context/context.checkout";
import { IAnalysesItem } from "../../interfaces/interface.catalogue";
import { useRouter } from "next/router";
import Link from "next/link";

interface CheckoutCardProps {}

export default function CheckoutCard({}: CheckoutCardProps) {
  const { analyses, isEmptyOrderLines, totalPrice, removeOrderLine } =
    useContext(contextCheckout);
  const router = useRouter();
  function onRemoveOrderLine(analysesItem: IAnalysesItem) {
    removeOrderLine(analysesItem);
  }
  return (
    <div className="checkout__card checkout-card">
      <h2 className="checkout-card__title">Корзина</h2>
      {!isEmptyOrderLines && (
        <>
          <div className="cart-table cart__table">
            <div className="cart-table__row cart-table__row--head">
              <div className="cart-table__row-left">
                <div className="cart-table__row-column">Код</div>
                <div className="cart-table__row-column">Наименование</div>
                <div className="cart-table__row-column">Срок выполнения</div>
              </div>
              <div className="cart-table__row-right">
                <div className="cart-table__row-column">Скидка</div>
                <div className="cart-table__row-column">Цена, ₸</div>
                <div className="cart-table__row-column">Действия</div>
              </div>
            </div>
            {analyses.map((analysesItem) => (
              <div key={analysesItem.id} className="cart-table__row">
                <div className="cart-table__row-left">
                  <div className="cart-table__row-column">
                    {analysesItem.code}
                  </div>
                  <div className="cart-table__row-column">
                    {analysesItem.name}
                  </div>
                  <div className="cart-table__row-column">
                    {analysesItem.deadline}
                  </div>
                </div>
                <div className="cart-table__row-right">
                  <div className="cart-table__row-column">
                    {analysesItem.has_discount
                      ? `${
                          (analysesItem.discount_price * 100) /
                          analysesItem.price
                        }%`
                      : "-"}
                  </div>
                  <div className="cart-table__row-column">
                    <div className="cart-table__cost">
                      {Number(analysesItem.discount_price).toLocaleString(
                        "ru-RU"
                      )}{" "}
                      ₸
                    </div>
                  </div>
                  <div className="cart-table__row-column">
                    <button
                      onClick={() => onRemoveOrderLine(analysesItem)}
                      className="cart-table__del"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="18"
                        viewBox="0 0 14 18"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.5 0L10.5 1H14V3H0V1H3.5L4.5 0H9.5ZM3 18C1.9 18 1 17.1 1 16V4H13V16C13 17.1 12.1 18 11 18H3Z"
                          fill="#009AFF"
                        />
                      </svg>
                      Удалить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart__total-row">
            <div className="cart__total-row-title">Итого</div>
            <div className="cart__total-row-value">
              {Number(totalPrice).toLocaleString("ru-RU")} ₸
            </div>
          </div>
          <div className="checkout-card__button">
            <Link href="/checkout/step-2" className="analyses-detail__card ">
              <span>Продолжить</span>
              <svg
                width="19"
                height="12"
                viewBox="0 0 19 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5303 6.53033C18.8232 6.23744 18.8232 5.76256 18.5303 5.46967L13.7574 0.696699C13.4645 0.403806 12.9896 0.403806 12.6967 0.696699C12.4038 0.989593 12.4038 1.46447 12.6967 1.75736L16.9393 6L12.6967 10.2426C12.4038 10.5355 12.4038 11.0104 12.6967 11.3033C12.9896 11.5962 13.4645 11.5962 13.7574 11.3033L18.5303 6.53033ZM0 6.75H18V5.25H0V6.75Z"
                  fill="white"
                ></path>
              </svg>
            </Link>
          </div>
        </>
      )}
      <div style={{ marginTop: 10 }} className="checkout-card__button">
        <button onClick={() => router.back()} style={{ color: "#009AFF" }}>
          Назад
        </button>
      </div>
    </div>
  );
}
