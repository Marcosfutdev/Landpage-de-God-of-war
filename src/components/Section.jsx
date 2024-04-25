import React from 'react';
// import components
import Button from './Button';
// import imgs
import ArrowLeft from './assets/img/arrow-left.svg';
import ArrowRight from './assets/img/arrow-right.svg';
import Kratos from './assets/img/kratos.svg';
import Atreus from './assets/img/atreus.svg';
import Freya from './assets/img/freya.svg';
import Angrboda from './assets/img/angrboda.svg';
import Photo1 from './assets/img/photo-1.svg';
import Photo2 from './assets/img/photo-2.svg';
import Photo3 from './assets/img/photo-3.svg';
import Machado from './assets/img/machado.svg';
import Arco from './assets/img/arco-flecha.svg'
// style 
import './Section.css'
const Section = ( ) =>{
    return(
        <section >
           <div id="container-herois">
            <h1 id="primeiroh1">OS MAIORES HERÓIS DOS NOVES REINOS</h1></div> 
            <main>
                <img src={ArrowLeft} alt="arrow-left" className="left" />
                <div id="herois">
                    <div className="herioi">
                <img src={Kratos} alt="kratos" />
                    </div>
                    <div className="herioi">
                <img src={Atreus} alt="atreus" />
                    </div>
                    <div className="herioi">
                <img src={Freya} alt="freya" />
                    </div>
                    <div className="herioi">
                <img src={Angrboda} alt="angrboda" />
                    </div>
                </div>
                <img src={ArrowRight} className="right" alt="arrow-right"/>
            </main>
           
            <div className="lutas">
                <div className="imgs">
                    <img src={Photo1} alt="kratos/dragão" />
                    <img src={Photo2} alt="luta" />
                    <img src={Photo3} alt="kratos/garoto" />
                </div>
                <div id="reino">
                    <div className="justifyh2">
                    <h2>LUTE NO REINO NÓRDICO</h2>
                    </div>
                    <div className="justifyp">
                    <p>
                 Com a vingança contra os deuses do Olímpo em um passado distante,
                 Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos. 
                 É nesse mundo duro e implacável que ele deve
                  lutar para sobreviver... e ensinar seu filho a fazer o mesmo. 
                  </p>
                    </div> 
                </div>
            </div>
            <div id="armaslen">
                  <h1>ARMAS LENDÁRIAS</h1>
            
                  <div id="armas">
                    <div id="primeira">
                    <h2>PODER RÚNICO REFINADO</h2>
                    <div className="p">
                    <p>
                    Novas habilidades permitem que Kratos use seu machado de maneira inéditas 
                    </p>
                    </div>
                    <Button className="btn-saiba">SAIBA MAIS</Button>
                    <img src={Machado} alt="machado" />
                    </div>
                    <div id="segunda"> 
                    <h2>
                        MAIS DO QUE UM GAROTO COM UM ARCO
                    </h2>
                    <div className="p">
                    <p>
                    Atreus aprimorou suas
                     habilidades de 
                     arquearia para desferir novos ataques
                    </p>
                    </div>
                     <img src={Arco} alt="arco-flecha" />
                     <Button id="mais">SAIBA MAIS</Button>
                    </div>
                  </div>

            </div>
        </section>
    )
}
export default Section;