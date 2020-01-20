import axios from 'axios'

const setTrips = (trips) => ({
    type: 'SET_TRIPS',
    payload:  {
        trips
    }
})

const setTripsDetails = (tripsDetails) => ({
    type: 'SET_TRIPS_DETAILS',
    payload:  {
        tripsDetails
    }
})

export const getTrips = () => async (dispatch) => {
    const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/futureX/ravi/trips')

    dispatch(setTrips(response.data.trips))
}

export const getTripsDetails = (tripId) => async (dispatch) => {
    const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureX/ravi/trip/${tripId}?=`,{
        headers:{
            auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImlDRThZWUh5YVRkS2d0R3ZLTjdvIiwiZW1haWwiOiJmbGF2aW8ucmF2aWVyQGdtYWlsLmNvbS5iciIsImlhdCI6MTU3OTQ0MDc5NH0.t84dAtg1nqWkivjLqwt0hZeajIUFSghAyzA4dLwaIuw"
        }
      })
    dispatch(setTripsDetails(response.data.trip))
}
