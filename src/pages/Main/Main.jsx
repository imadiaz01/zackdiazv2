import React from 'react'
import './main.css';


const Main = () => {
  return (
    <div>
      <div className='separator'></div>
      <div id='About' className='bio'>
     <h1 >Bio.</h1>
     <br />
<p>
  “Imanol Isaac Díaz De León” mejor conocido como (Zack Díaz) nació el 14 de mayo de 1999,
  joven compositor y artista dominicano, gran amante de la buena música que ya ha mostrado su interés en la actuación. 
  Inicio como solista haciendo adaptaciones en vivo y subiendo covers en plataformas digitales a los 13 años de edad,
  en su actual catalogo tenemos a “Admitele” el sencillo favorito del artista, seguido por la fresca idea de “Un Ratito Más” y grandes hits como “Ninfo”, “Amnesia” y ‘’La Dificil’’.
</p>
</div>
      <br />
      <div id='Reper' className='repertoire'>
      <h1>Repertoire</h1>
      <br />
<h2>Zack's latest work</h2>
      </div>

                    <div className='timeline-container'>
                    <div className='timeline-1'>
                        <h2 className="text-subtitle">
                            2021
                        </h2>

                        <div className="timeline">

                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <h4 className="timeline__title"><a href="https://www.youtube.com/watch?v=sJNGarDHu0E">Amnesia</a></h4>
                                    <h5 className="timeline__meta">Single</h5>
                                    <p className="timeline__timeframe">April 2021</p>
                                </div>

                            </div>
                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <h4 className="timeline__title"><a href="https://www.youtube.com/watch?v=AG3zR_RvqIU">Veneno</a></h4>
                                    <h5 className="timeline__meta">Single</h5>
                                    <p className="timeline__timeframe">September 2022</p>
                                </div>
                            </div>

                            </div>
                        </div>

                    

                    <div className="timeline-2" >

                        <h2 className="text-subtitle">
                            2022
                        </h2>

                        <div className="timeline">

                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <h4 className="timeline__title"><a href="https://www.youtube.com/watch?v=HWXPOeDGRYc&amp;themeRefresh=1">10 PM</a></h4>
                                    <h5 className="timeline__meta">Single from EP ''YXNG GOATZ"</h5>
                                    <p className="timeline__timeframe">October 2022</p>
                                </div>
                            </div>

                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <h4 className="timeline__title"><a href="https://www.youtube.com/watch?v=kpl-yHnldR0">De Mentira</a></h4>
                                    <h5 className="timeline__meta">Single from EP ''YXNG GOATZ"</h5>
                                    <p className="timeline__timeframe">November 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
  )
}

export default Main