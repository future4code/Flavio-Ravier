const initialState = {
    allTrips: [],
    tripsDetails: [],
}

const trips = (state = initialState, action) =>{
    switch(action.type){
        case 'SET_TRIPS':
            return {...state, allTrips:action.payload.trips}
        case 'SET_TRIPS_DETAILS':
            //como faz pra da um console.log no return desse reducer?
            console.log("settripsdetails")
            return{...state, tripsDetails:action.payload.tripsDetails}
        default:
            return state
    }
}
export default trips