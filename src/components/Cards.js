import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__item'>
                    <CardItem
                     src="/images/Pr_Flavio.png"
                     label="Pr. Flávio Santos" 
                     text="Cobertura Espiritual"
                     path=""/>
                </ul>

                <ul className='cards__item'>
                    <CardItem
                     src="/images/Pr_Danny.png"
                     label="Pr. Danny Lima" 
                     text="Cobertura Espiritual"
                     path=""/>
                </ul>

                <ul className='cards__item'>
                    <CardItem
                     src="/images/Pr_Marcio.jpg"
                     label="Pr. Márcio da Cruz" 
                     text="Presidente e Pastor MIP Porto Alegre"
                     path=""/>
                </ul>

                <ul className='cards__item'>
                    <CardItem
                     src="/images/Pr_Sandro.jpeg"
                     label="Pr. Sandro Moreno" 
                     text="Vice-Presidente"
                     path=""/>
                </ul>


                <ul className='cards__item'>
                    <CardItem
                     src="/images/Pr_Moises.png"
                     label="Pr. Moisés Nunes" 
                     text="Pastor MIP Alvorada"
                     path=""/>
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Cards