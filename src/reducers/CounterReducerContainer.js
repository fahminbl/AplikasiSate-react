import React from 'react';

export const jumlahSate = 1;

export const CounterReducer = (sate, action) => {
    switch (action.type) {
        case 'nambah': 
            return sate + 1;
        case 'makan':
            return sate - 1;
        case 'habiskan':
            return sate - sate;
        case 'nambahSpec':
            return sate + action.tusuk;
        case 'makanSpec':
            return sate - action.tusuk;
        default:
            return sate;
    }
}
