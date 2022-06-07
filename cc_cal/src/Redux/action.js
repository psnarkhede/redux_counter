import { ADD, DECREAMENT, DIVISION, INCREAMENT, MULTIPLY, SUBSTRACT } from "./actiontype";

export const Increament = () => ({type:INCREAMENT});

export const Decreament = () => ({type:DECREAMENT});

export const Product = (value) => ({type:MULTIPLY, text:value});

export const Divide = (value) => ({type:DIVISION, text:value});

export const Add = (value) => ({type:ADD, text:value});

export const Substract = (value) => ({type:SUBSTRACT, text:value});