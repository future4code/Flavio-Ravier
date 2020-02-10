import axios from "axios";

const urlGetTask = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-ravi"
const urlPostTask = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-ravi"

export const changeLoadingStatus = () => ({
    type: 'CHANGE_LOADING_STATUS',
  })

export const setTasks = (mon,tue,wed,thu,fri,sat,sun) => ({
    type: 'SET_TASKS',
    payload: {
        mon,
        tue,
        wed,
        thu,
        fri,
        sat,
        sun
    }
  })

  
  export const getAllTasks = () => async (dispatch) => {
    
    try {
        dispatch(changeLoadingStatus())
        const response = await axios.get(urlGetTask)

        const taskMonday = response.data.filter(cadaTask => {
            return (cadaTask.day === "Monday")
        })

        const taskTuesday = response.data.filter(cadaTask => {
            return (cadaTask.day === "Tuesday")
        })

        const taskWednesday = response.data.filter(cadaTask => {
            return (cadaTask.day === "Wednesday")
        })

        const taskThursday = response.data.filter(cadaTask => {
            return (cadaTask.day === "Thursday")
        })

        const taskFriday = response.data.filter(cadaTask => {
            return (cadaTask.day === "Friday")
        })

        const taskSaturday = response.data.filter(cadaTask => {
            return (cadaTask.day === "Saturday")
        })

        const taskSunday = response.data.filter(cadaTask => {
            return (cadaTask.day === "Sunday")
        })

        dispatch(setTasks(taskMonday,taskTuesday,taskWednesday,taskThursday,taskFriday,taskSaturday,taskSunday))
        dispatch(changeLoadingStatus())
    } catch(e) {
        window.alert(e)
    }
  }

export const createNewTask = (bodyContent) => async (dispatch) => {
    try {
        await axios.post(urlPostTask, bodyContent)
        dispatch(getAllTasks())
    } catch {
        window.alert("Erro ao enviar o post.")
    }
}
