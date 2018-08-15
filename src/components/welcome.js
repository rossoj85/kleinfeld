import React, {Component} from 'react';
import { Carousel, Jumbotron } from 'react-bootstrap';
import docks from './images/docks.jpg';
import LA from './images/la.jpg';
import ScrollableAnchor from 'react-scrollable-anchor'
import Splash from './splash'

export default class Welcome extends Component{

    constructor(props){
        super(props);
          this.state ={
            //   whiteBackGround: true,
            //   showLogo: false 
            divClass: ['beginSplash'],
            textClass: [],
            logoClass:['noDisplay']
          }
      }
    
    componentDidMount(){
        setTimeout(()=>{
            this.setState({textClass: ['splashTextFadeOut']})
            console.log('TIMEOUT SET!!!!')
        },1000)
        setTimeout(()=>{
            this.setState({logoClass:[' ']})
        },3000)
        setTimeout(()=>{
            this.setState({logoClass:['fadeLogo']})
        },4000)

        setTimeout(()=>{
            this.setState({divClass: ['fadeOut']})
            console.log('TIMEOUT SET!!!!')
        },6000)
        // console.log('INSIDE MOUNT FUNCTION')
    }
    render(){
        let language= this.props.language
        // setTimeout(this.alertFunc, 3000)
        console.log('RENDERED!!!!!')
        console.log(this.state)   
        return(
            // this.state.whiteBackGround ? 
            // <div style={{
            // 'height':'100vh', 
            // 'backgroundColor': 'white' }}>
            //     <h1>THE BACKGORUND IS WHITE </h1>
            // </div>
            // :
            <ScrollableAnchor id={'splash'}>
                <div>
                    <Splash divClass={this.state.divClass}
                            textClass={this.state.textClass}
                            logoClass={this.state.logoClass}/>
                    <Jumbotron id='welcomeJumbo'  >
                        <div  id='ourWorkJumboText' className=' jumboTextBlack'>
                            { language==='eng' ?
                            <div>
                                <h1>Welcome</h1>
                            </div>
                            :
                            <div>
                                <h1>Bienvenido</h1>
                            </div>
                            }
                        </div>
                    </Jumbotron>



                    {/*<div id='jumbotronText' className='col-lg-6 col-md-6'>
                        { language==='eng' ?
                        <div>
                            <h1>Welcome</h1>

                        </div>
                        :
                        <div>
                            <h1>Beinvenidos</h1>
                        </div>
                        }
                    </div>
                    <Carousel>
                    <Carousel.Item>
                        <img id='carImg' src={docks} />
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img id='carImg' src={LA}/>
                    </Carousel.Item>
                    </Carousel>*/}

                    <div className='textBox'>
                        {
                        language==='eng' ?
                        <h1>
                        Your Brand is more than a logo or a business, your Brand has a story to tell, 
                        an unforgettable experience to create and the opportunity to see your product or service 
                        as a need that your audience wants to live.
                        <br />
                        <br />
                        Through a solid strategy of digital marketing, consulting, analysis
                        design, execution, and tracibility we implement or strengthen your online marketing campaigns.
                        </h1>
                        :
                        <h1>
                        El poder de una marca está en las historias que puede contar, en las experiencias que
                        construye, en la manera como se queda en la mente y corazón de sus audiencias, creando
                        identidad y apropiación de los productos o servicios.  
                        <br />
                        <br />
                        Implementamos y fortalecemos los canales digitales, a través de una sólida estrategia de
                        mercadeo digital fundamentada en la consultoría, análisis, diseño, ejecución y mecanismos de
                        medición que permiten llevar trazabilidad y efectividad.
                        </h1>
                        }
                    </div>

                    <div id='columns'className='clearfix'>
                        <div className='centered col-sm-12 col-md-4 '>
                            <h2><span className="glyphicon glyphicon-phone"></span>Be + <br/>Digital</h2>
                        { language==='eng' ?
                            <h4>Consulting, Development and Administration</h4>
                            :
                            <h4>Consultoría, desarrollo y
                            administración</h4>
                            }
                        </div>

                        <div className='centered col-sm-12 col-md-4 '>
                            <h2><span className="glyphicon glyphicon-comment"></span>Be + <br/>Social</h2>
                            { language==='eng' ?
                            <h4> Social Networking Strategies and Online Presence</h4>
                            :
                            <h4>Estrategia de redes
                            sociales y Publicidad
                            Online</h4>
                            }
                        </div>

                        <div className='centered col-sm-12 col-md-4 '>
                            <h2><span className='glyphicon glyphicon-bullhorn'></span>Be + <br/>Adds<br/></h2>
                            { language==='eng' ?
                            <h4>Branding, Marketing Strategies and Events</h4>
                            :
                            <h4>Branding, Estrategia de
                            Mercadeo relacional,
                            Eventos</h4>
                            }
                        </div>
                    </div>
                </div>
            </ScrollableAnchor>
        );
    }

}