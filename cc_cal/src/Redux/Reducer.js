import { ADD, DECREAMENT, DIVISION, INCREAMENT, MULTIPLY, SUBSTRACT } from "./actiontype";


export const Reducer = (state, action) => {
    switch(action.type){
        case DECREAMENT: {
            if(state.count > 0){
            state.count--;
            }
            return {...state}
           
        }

        case INCREAMENT:{
            state.count++;
            return {...state}
        }

        case MULTIPLY:{
            state.count = state.count * action.text;
            return {...state};
        }

        case DIVISION:{
            state.count = (state.count / action.text).toFixed(2);
            return {...state};
        }

        case ADD: {
            state.count = Number(state.count) + Number(action.text);
            return {...state}
           
        }

        case SUBSTRACT: {
            state.count = state.count - action.text;
            return {...state}
           
        }


        default:{
            return state;
        }
    }
};