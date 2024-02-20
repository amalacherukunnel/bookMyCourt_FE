import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../config/AxiosInstance';
import MainNavBar from '../../components/NavBar/MainNavBar';
import './CourtDetails.css';
import Modal from '../../components/common/Modal';
import { TIMINGS } from '../../constants';

function CourtDetails() {
    const { id } = useParams();
    const [court, setCourt] = useState({});
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState([]);
    const [filteredSlots, setFilteredSlots] = useState(TIMINGS);
    const [slotdata, setSlotData] = useState({});

    useEffect(() => {
        //fetch data here and populate the page with it.
        getCourtDatabyId();
    }, []);

    const getCourtDatabyId = () => {
        axiosInstance.get('/users/getCourtDatabyId', { params: { id } })
            .then((res) => {
                setCourt(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const openModal = () => {
        setOpen(true);
    };

    const selectedSlot = (e) => {
        const slot = TIMINGS.find((element) => element.id === parseInt(e.target.value));
        const filterData = filteredSlots.filter((element) => element.id !== parseInt(e.target.value));
        setFilteredSlots(filterData);
        setSelected([...selected, slot]);
    };

    const createSlotsData = () => {
        axiosInstance.post('/admin/addtimeSlotData', { ...slotdata, slots: selected, courtId: id })
            .then((res) => {
                setOpen(false);
                alert(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleSlotData = (e) => {
        setSlotData({ ...slotdata, [e.target.name]: e.target.value });
    };

    return (
        <>
            <MainNavBar />
            <div className='courtDetails-container'>
                <img src={`${process.env.REACT_APP_BE_URL}/images/${court.courtPic}`} alt='' />
                <div>
                    <h2>{court.courtName}</h2>
                </div>
                <div className='d-flex justify-content-end me-2'>
                    <button className='p-1' onClick={openModal}>Add Time Slots</button>
                </div>
                {open && <Modal open={open} setOpen={setOpen} buttonName={'Create Time Slots'} heading={'Create Slots'} handleSubmit={createSlotsData}>
                    <div className='d-flex flex-column gap-2'>
                        <h2>{court.courtName}</h2>
                        <h4>{court.location}</h4>
                        <span>
                            <label htmlFor='Start-Date'>Starting Date</label>
                            <input type='date' name='startDate' value={slotdata.startDate} onChange={handleSlotData} />
                        </span>
                        <span>
                            <label htmlFor='End-Date'>Ending Date</label>
                            <input type='date' name='endDate' value={slotdata.endDate} onChange={handleSlotData} />
                        </span>
                        <span>
                            <label htmlFor=''>Cost</label>
                            <input type='number' name='cost' value={slotdata.cost} onChange={handleSlotData} />
                        </span>
                        <span>
                            <label htmlFor=''>Time Slots</label>
                            <select name='' id='' onChange={selectedSlot}>
                                <option selected disabled>select time slots</option>
                                {filteredSlots.map((slot) => <option value={slot.id} key={slot.id}>{slot.name}</option>)}
                            </select>
                        </span>
                        <div>
                            {selected.map((slot) => <label className='border border-1 rounded-2 mt-1 me-1 p-2' key={slot.id}>{slot.name}</label>)}
                        </div>
                    </div>
                </Modal>}
            </div>
        </>
    );
}

export default CourtDetails;
