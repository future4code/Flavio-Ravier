import React from 'react';
import './App.css';
import BigCard from './components/BigCard/BigCard'
import ImageButton from './components/ImageButton/ImageButton'
import SmallCard from './components/SmallCard/SmallCard'
import PageSection from './components/PageSection/PageSection'

function App() {
	/* Const do BigCard */
	
	const localImg1Bigcard ="https://media.licdn.com/dms/image/C5603AQH59alYwUPfZA/profile-displayphoto-shrink_100_100/0?e=1580342400&v=beta&t=DLodKmNWFS9AXahn21i0Z6fws5Cf-fZuiVtGzyBuLYw"
	const titulo1Bigcard = "Flávio Ravier"
	const textoUser1Bigcard ="Engenheiro, Programador, Planilheiro de mão cheia. Busco estar satisfeito com o que faço, dando o meu melhor para avançar em objetivos que me inspirem.Aprendi com o tempo que o trabalho de todo mundo pode e deve ser leve, basta encontrar o que realmente importa e rechear todas as atividades do dia a dia com essa significação."

	const localImg2Bigcard="https://media.licdn.com/dms/image/C4D0BAQHp6kJU2k5a7Q/company-logo_400_400/0?e=1582761600&v=beta&t=hhi9Q47wPUme7a0qet91BYqI4Whpaq-tw3KyqDfw5qw"
	const titulo2Bigcard = "Future4"
	const textoUser2Bigcard ="Com um programa imersivo de 6 meses full-time remoto - (o dia inteiro construindo tecnologias!). A abordagem é toda baseada em projetos, com desafios de construção de soluções e instrutores o tempo inteiro!"

	const localImg3Bigcard="https://lh4.googleusercontent.com/-a8dt2zfKC9E/AAAAAAAAAAI/AAAAAAAAAAA/QRyrh6WU7c4/s55-p-k-no-ns-nd/photo.jpg"
	const titulo3Bigcard = "Methanum"
	const textoUser3Bigcard ="Elaboração de estudos e análise de viabilidade técnica e econômica de projetos de biogás. Realização de visitas técnicas para avaliação da operacionalidade e segurança de plantas de biogás Assistência técnica de todos componentes e equipamentos das plantas"
	
	
	
	/* Const do SmallCard */

	const localImg1Smallcard ="data:image/jpeg;base64,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"
	const titulo1SmallCard = "Email: "
	const textoUser1SmallCard = "flavio.ravier@gmail.com"

	const localImg2Smallcard = "https://image.flaticon.com/icons/png/512/9/9778.png"
	const titulo2SmallCard = "Endereço: "
	const textoUser2SmallCard = "Av. Bias Fortes 1122"
	/* Const do ImageButton */

	const localImg1ImageButton = "https://st2.depositphotos.com/4060975/8059/v/950/depositphotos_80596450-stock-illustration-down-arrow-vector-icon.jpg"
	const textoUser1ImageButton = "Ver mais"

	const localImg2ImageButton = "data:image/png;base64,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"
	const textoUser2ImageButton = "LinkedIn"



	
	return (

		<PageSection>
			
			<h2>Dados Pessoais</h2>
			<BigCard titulo={titulo1Bigcard} texto={textoUser1Bigcard} imagem={localImg1Bigcard}/>
			<SmallCard titulo={titulo1SmallCard} texto={textoUser1SmallCard} imagem={localImg1Smallcard}/>
			<SmallCard titulo={titulo2SmallCard} texto={textoUser2SmallCard} imagem={localImg2Smallcard}/>
			<ImageButton texto={textoUser1ImageButton} imagem={localImg1ImageButton}/>
			<h2>Experiências profissionais</h2>
			<BigCard titulo={titulo2Bigcard} texto={textoUser2Bigcard} imagem={localImg2Bigcard}/>
			<BigCard titulo={titulo3Bigcard} texto={textoUser3Bigcard} imagem={localImg3Bigcard}/>
			<h2>Minhas redes sociais</h2>
			<ImageButton texto={textoUser2ImageButton} imagem={localImg2ImageButton}/>

		</PageSection>
 
  	);
}

export default App;
