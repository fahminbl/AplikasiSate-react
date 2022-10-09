import React, {useState} from 'react';
import { TextField, Typography, Box, Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import {selectUser, selectSate} from '../features/sliceCounter.js'
import { nambah, makan, habiskan, nambahSpec, makanSpec } from '../features/sliceCounter'
const MyApp = () => {
	const jumlah = useSelector(selectSate);
	const pengguna = useSelector(selectUser)
	const [tusukanSate, setTusukanSate] = useState(0)
	const dispatch = useDispatch()
	
	const nambahSate = (event) => {
		const tusukan = event.target.value
		setTusukanSate(tusukan)
	}

	const buttonAddSateHandler = () => {
		dispatch(nambah())
	}

	const buttonEatSateHandler = () => {
		dispatch(makan())
	}

	const buttonFinishSateHandler = () => {
		dispatch(habiskan())
	}

	const buttonTambahTusukanHandler = () => {
		dispatch(nambahSpec(+tusukanSate))
		setTusukanSate(0)
	}

	const buttonMakanTusukanHandler = () => {
		dispatch(makanSpec(+tusukanSate))
		setTusukanSate(0)
	}

	return (
		<>
			<Box sx={{
				width: '20em',
				padding: '2em',
				border: '1px dashed black',
				borderRadius: '10px',
				marginTop: '1em',
				display: 'flex',
				flexDirection: 'column',
			}}>
				<Box sx={{
					display: 'flex',
					gap: '1em'
				}}>
					<Typography variant="h5">Aplikasi Penambah Sate</Typography>
				</Box>
				<Box sx={{
					display: 'flex',
					gap: '1em'
				}}>
					<Typography sx={{ marginTop: '1em' }} variant="h7">Nama: {pengguna}</Typography>
					<TextField sx={{ marginTop: '1em' }} value={jumlah} variant="outlined" label="Jumlah Satenya" />
				</Box>
				<Box sx={{
					display: 'flex',
					gap: '1em',
					marginTop: '2em'
				}}>
					<Button variant="outlined" onClick={buttonEatSateHandler} >Makan 1 sate</Button>
					<Button variant="outlined" onClick={buttonFinishSateHandler} >Habiskan</Button>
					<Button variant="outlined" onClick={buttonAddSateHandler} >Tambah 1 sate</Button>
				</Box>
				<Box sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '1em',
					marginTop: '2em'
				}}>
				<TextField sx={{ marginTop: '1em' }} value={tusukanSate} onChange={nambahSate} 
				variant="outlined" label="Tambah Sate" />
					<Box sx={{
						display: 'flex',
						gap: '2em'
					}}>
					<Button variant="outlined" onClick={buttonTambahTusukanHandler} >Tambah {tusukanSate} sate </Button>
					<Button variant="outlined" onClick={buttonMakanTusukanHandler} >Makan {tusukanSate} sate </Button>
					</Box>
				</Box>
			</Box>
		</>
	)
}

export default MyApp;