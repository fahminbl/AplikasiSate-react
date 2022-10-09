import { createSlice } from "@reduxjs/toolkit";

const initialValueForSate = {
    pengguna: "Hana",
    jumlah: 10
}

const counterSateSlice = createSlice({
    name: 'counterSate',
    initialState: initialValueForSate,

    reducers: {
        nambah(state) {
            state.jumlah = state.jumlah + 1
        },

        makan(state) {  
            state.jumlah -= 1
        },
        
        habiskan(state) {
            state.jumlah = 0
        },
        
        nambahSpec(state, action) {
            state.jumlah += action.payload
        },

        makanSpec(state, action) {
            state.jumlah -= action.payload
        }
    }
})

export const { nambah, makan, habiskan, nambahSpec, makanSpec } = counterSateSlice.actions

export const selectUser = (state) => state.counterSate.pengguna

export const selectSate = (state) => state.counterSate.jumlah

export default counterSateSlice.reducer