import React from 'react';
import './App.css';

import SmallCard from './components/SmallCard/SmallCard'
import BigCard from './components/BigCard/BigCard'
import Comentario from './components/Comentario/Comentario'
import PageSection from './components/PageSection/PageSection.js'
import ParaMostrarComentario from './components/Comentario/Comentario'


function App() {

  const localImgAvatar1 ="https://media.licdn.com/dms/image/C5603AQH59alYwUPfZA/profile-displayphoto-shrink_100_100/0?e=1580342400&v=beta&t=DLodKmNWFS9AXahn21i0Z6fws5Cf-fZuiVtGzyBuLYw"
  const tituloSmallCard1= "ravi"
  const localImgSmallCard1 ="http://soter.ninja/static/media/img1.2352f487.jpeg"

  const localImgAvatar2 ="https://scontent.fplu3-1.fna.fbcdn.net/v/t1.0-1/p160x160/70556162_2677482732302706_2175275303335624704_n.jpg?_nc_cat=101&_nc_ohc=nrKpyWzQ_CwAQl9jrsBW9Lmqj4pEw0KfsE1oRbLpxtvnZl8zboBf5vBlg&_nc_ht=scontent.fplu3-1.fna&oh=ab1c2a0bba72958482fbbd5c2d0b9c80&oe=5E8C54CE"
  const tituloSmallCard2= "Goli"
  const localImgSmallCard2 ="http://soter.ninja/static/media/img2.345aa59c.jpeg"

  const localImgAvatar3 ="https://scontent.fplu3-1.fna.fbcdn.net/v/t1.0-1/c0.29.160.160a/p160x160/68672033_2421979447885620_5534982091600560128_o.jpg?_nc_cat=102&_nc_ohc=63a75liBd-sAQklYLG_9IWWXPFgEGnTZ27PhtAdzxf8SPnWLBn5HX-xxg&_nc_ht=scontent.fplu3-1.fna&oh=adb5b1890de4a337fa8b86ef406904ed&oe=5E75C177"
  const tituloSmallCard3= "Paulinha"
  const localImgSmallCard3 ="http://soter.ninja/static/media/img3.7c69d4c3.jpeg"


  return (
    <div className="App">
    <PageSection>
      <SmallCard titulo={tituloSmallCard1} imagem={localImgAvatar1}/>
      <BigCard imagem={localImgSmallCard1}/>
      <Comentario/>
    </PageSection>

    <PageSection>
      <SmallCard titulo={tituloSmallCard2} imagem={localImgAvatar2}/>
      <BigCard imagem={localImgSmallCard2}/>
      <Comentario/>
     {/*  <ParaMostrarComentario/> */}
    </PageSection>

    <PageSection>
      <SmallCard titulo={tituloSmallCard3} imagem={localImgAvatar3}/>
      <BigCard imagem={localImgSmallCard3}/>
      <Comentario/>
     {/*  <ParaMostrarComentario/> */}
    </PageSection>
     
    </div>
  );
}

export default App;
