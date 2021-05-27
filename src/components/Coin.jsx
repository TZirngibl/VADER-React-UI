import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin, deleteCoin }) => {
  return (
    <Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin flex flex-row items-center w-full bg-white rounded">
      <li className="mr-2 coinlist-item list-group-item list-group-item-action flex justify-between text-dark items-center flex w-full">
        
        <div className="flex items-center">
            <img className="coinlist-image p-2" src={coin.image} alt="" />
            <span className="text-decoration-none uppercase  p-2 pl-0">{coin.symbol}</span>
        </div>
        
        <span className="text-decoration-none text-right">${coin.current_price.toLocaleString()}</span>

        <span
          className={
            coin.price_change_percentage_24h < 0
              ? "text-red-500 text-xs font-semibold text-right"
              : "text-green-500 text-xs font-semibold text-right"
          }
        >
          {" "}
          {coin.price_change_percentage_24h < 0 ? (
            <i className="text-red-500 fill-current fas fa-sort-down align-middle"></i>
          ) : (
            <i className="text-green-500 fill-current fas fa-sort-up align-middle"></i>
          )}
          {coin.price_change_percentage_24h} 
        </span>
        
      </li>
    </Link>
  );
};

export default Coin;