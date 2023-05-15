import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task: [],
    isShowModal: false,
    taskToEdit:null,
    exitModalButton:false,
    theme:true,


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
        changeTheme: state=>{
            state.theme = !state.theme
        }

    }
})


export const{changeShowModal, changeExitModalButton, changeTheme} = actionSlice.actions

export default actionSlice.reducer