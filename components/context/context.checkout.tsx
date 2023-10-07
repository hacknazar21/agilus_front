"use client";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { IAnalyses, IAnalysesItem } from "../../interfaces/interface.catalogue";

interface ICheckout {
  addOrderLine: (analysesItem: IAnalysesItem) => void;
  increaseOrderLine: (analysesItem: IAnalysesItem) => void;
  removeOrderLine: (analysesItem: IAnalysesItem) => void;
  decreaseOrderLine: (analysesItem: IAnalysesItem) => void;
  isOrderLineAlreadyAdded: (analysesItem: IAnalysesItem) => boolean;
  clearAllOrderLines: () => void;
  analyses: IAnalyses;
  orderLinesCount: number;
  isEmptyOrderLines: boolean;
  totalPrice: number;
}

export const contextCheckout = createContext({} as ICheckout);

export default function ContextCheckout({ children }: PropsWithChildren) {
  const [analyses, setAnalyses] = useState<IAnalyses>([]);

  useEffect(() => {
    const savedAnalyses = localStorage.getItem("orderLines");
    if (savedAnalyses) {
      setAnalyses(JSON.parse(savedAnalyses));
    }
  }, []);

  function returnOrderLine(newState: IAnalyses) {
    localStorage.setItem("orderLines", JSON.stringify(newState));
    return newState;
  }

  function addOrderLine(analysesItem: IAnalysesItem) {
    setAnalyses((prevState) =>
      returnOrderLine([
        ...prevState.filter((prevLine) => prevLine.id !== analysesItem.id),
        {
          ...analysesItem,
          amount: 1,
        },
      ])
    );
  }
  function increaseOrderLine(analysesItem: IAnalysesItem) {
    setAnalyses((prevState) =>
      returnOrderLine([
        ...prevState.map((prevLine) => {
          if (prevLine.id === analysesItem.id)
            return {
              ...prevLine,
              amount: prevLine.amount + 1,
            };
          return prevLine;
        }),
      ])
    );
  }
  function removeOrderLine(analysesItem: IAnalysesItem) {
    setAnalyses((prevState) =>
      returnOrderLine([
        ...prevState.filter((prevLines) => prevLines.id !== analysesItem.id),
      ])
    );
  }
  function decreaseOrderLine(analysesItem: IAnalysesItem) {
    setAnalyses((prevState) =>
      returnOrderLine([
        ...prevState.map((prevLine) => {
          if (prevLine.id === analysesItem.id && prevLine.amount - 1 > 0)
            return {
              ...prevLine,
              amount: prevLine.amount - 1,
            };
          else if (prevLine.id === analysesItem.id && prevLine.amount - 1 === 0)
            removeOrderLine(analysesItem);
          return prevLine;
        }),
      ])
    );
  }
  function isOrderLineAlreadyAdded(analysesItem: IAnalysesItem) {
    return analyses.some((orderLine) => orderLine.id === analysesItem.id);
  }
  function clearAllOrderLines() {
    setAnalyses(returnOrderLine([]));
  }

  const initialCheckout: ICheckout = {
    addOrderLine,
    decreaseOrderLine,
    increaseOrderLine,
    removeOrderLine,
    isOrderLineAlreadyAdded,
    clearAllOrderLines,
    analyses,
    orderLinesCount: analyses.length,
    isEmptyOrderLines: !analyses.length,
    totalPrice: analyses
      .map((analysesItem) => analysesItem.discount_price)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0),
  };

  return (
    <contextCheckout.Provider value={initialCheckout}>
      {children}
    </contextCheckout.Provider>
  );
}
