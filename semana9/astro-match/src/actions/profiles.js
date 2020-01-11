import axios from 'axios'

export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ravi/clear')
}

//pegar o perfil

/* {
    "profile": {
        "id": "oew8nSEnNivwns8Bp3sv",
        "age": 70,
        "name": "Rick Sanchez",
        "photo": "https://vignette.wikia.nocookie.net/rickandmorty/images/a/a6/Rick_Sanchez.png/revision/latest?cb=20160923150728",
        "bio": "I'M A PICKLE! I'm pickle Riiiiiick!"
    }
} */


// vai enviar o perfil pra tela swipe
const setProfileToSwipe = (profile) => ({
	type: "SET_PROFILE_TO_SWIPE",
	payload: {
		profile,
	}
})

export const fetchProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ravi/person");
	dispatch(setProfileToSwipe(response.data.profile)) //vai disparar a ação de enviar o perfil para a tela swipe
	/* console.log(response.data.profile)  ele pega o objeto aqui*/
}

export const chooseProfile = (id, choice) => async (dispatch) => {
	
	 if (!choice){ 
		console.log("id:",id);
		console.log("choice:",choice)
		 dispatch(fetchProfileToSwipe())
		 return
	  }
	  console.log("id:",id);
	  console.log("choice:",choice)
	await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ravi/choose-person', {id,choice})
	dispatch(fetchProfileToSwipe())
	}

const setMatches = (matches) => ({
	type: "SET_MATCHES",
	payload: {
		matches,
	}
})

export const getMatches = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/ravi/matches');
	dispatch(setMatches(response.data.matches))
}




