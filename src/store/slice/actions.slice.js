import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task: [],
    isShowModal: false,
    taskToEdit:null,
    exitModalButton:false


}

const actionSlice = createSlice({
    name: 'action',
    initialState,
    reducers:{
        changeShowModal: state => {
            state.isShowModal = !state.isShowModal
        },
        changeExitModalButton: state => {
            state.exitModalButton = !state.exitModalButton
        },

    }
})


export const{changeShowModal, changeExitModalButton} = actionSlice.actions

export default actionSlice.reducer