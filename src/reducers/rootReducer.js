
export const initialValue = {
    pengguna: "cewekGhaib",
    jumlah: 10
}

export const rootReducer = (sate, action) => {
    switch (action.type) {
        case 'nambah': 
            return {...sate, 
                jumlah: sate.jumlah + 1
            }
        case 'makan':
            return {...sate,
                jumlah: sate.jumlah - 1
            }
        case 'habiskan':
            return {...sate,
                jumlah: 0
            }
        case 'nambahSpec':
            console.log(sate.jumlah)
            return {...sate,
                jumlah: sate.jumlah + action.maunya
            }
        case 'makanSpec':
            return {...sate,
                jumlah: sate.jumlah - action.maunya
            }
        default:
            return sate;
    }
}
