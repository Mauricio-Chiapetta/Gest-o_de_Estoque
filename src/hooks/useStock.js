import { useContext } from "react";
import { StockContext } from "../context/StockContext";

export function useStock (){
    return useContext(StockContext)
}