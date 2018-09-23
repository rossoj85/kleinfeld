import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import {Jumbotron} from 'react-bootstrap';






export default (props)=>{
    let language = props.language
    console.log('ourWork props', props)
    return(
        <ScrollableAnchor id={'services'} >
            <div >
            <Jumbotron id='servicesJumbo'>
                        <div  id='servicesJumboText' className=' jumboTextBlack'>
                            { language==='eng' ?
                            <div>
                                <h1>Our Services</h1>
                            </div>
                            :
                            <div>
                                <h1>Nuestro Servicios</h1>
                            </div>
                            }
                        </div>
                </Jumbotron>
                
                <div className='textBox'>
                    {
                        language==='eng' ?
                        <div>
                            <h2>
                                K-Digital, K-Social and K-Adds, are part of our value offer, a way
                                to look and approach audiences from different fronts, with the purpose
                                to drive the business strategy of each of our clients, because without
                                import the size of them, there is something clear, be and be part of the era
                                digital, rather than a necessity, means being responsible, timely, accurate and
                                expressive, requires to devise and strengthen the personality of the brand, the connection with
                                your audiences, understand the way users today search within all
                                the existing possibilities (reviews, influencers, SEO, among others) the best
                                option.
                            </h2>
                        </div>
                        :
                        <div>
                            <h2>
                            K-Digital, K-Social y K-Adds, hacen parte de nuestra oferta de valor, una manera
                            de mirar y acercarnos a las audiencias desde diferentes frentes, con el propósito
                            de impulsar la estrategia de negocio de cada uno de nuestros clientes, porque sin
                            importar el tamaño de los mismos, hay algo claro, estar y hacer parte de la era
                            digital, más que una necesidad, significa ser responsable, oportuno, preciso y
                            expresivo, requiere idear y fortalecer la personalidad de la marca, la conexión con
                            sus audiencias, entender la manera como los usuarios hoy buscan dentro de todas
                            las posibilidades existentes (reviews, influencers, SEO, entre otros) la mejor
                            opción.
                            </h2>
                        </div>
                    }
                
                    <div id='serviceDescriptions'>
                        <div className='serviceEntry'>
                            <h1><span className="glyphicon glyphicon-phone"></span>K-Digital</h1>
                                {language==='eng'?
                                    <div>
                                        <h3>
                                        We design and manage your website, as one of the great platforms for the presentation of
                                        portfolio, accessibility, information and development of your company.
                                        <br/>
                                        <br/>
                                        To make it effective and efficient, we work on building the hand of our clients,
                                        we identify the necessary keywords or meta tags that will be used when making use of SEO,
                                        the results will give us the insights that will allow us to potentiate the strategy to reach
                                        audiences in the right way, create tools that are more than informative, interactive and
                                        facilitate access to the products and services offered by each company.
                                        <br/>
                                        <br/>
                                        This offer is made up of the following cycles:
                                        </h3>
                                        <div id='digitalServiceCols'>
                                            <div className='dsCol col-sm-12 col-md-4'>
                                                <h3>Consulting</h3>
                                                <ul>
                                                    <li>Site Objectives</li>
                                                    <li>Site Map</li>
                                                    <li>Wireframes</li>
                                                    <li>Content</li>
                                                    <li>SEO (Metatag)</li>
                                                </ul>
                                            </div>
                                            <div className='dsCol col-sm-12 col-md-4'>
                                                <h3>Development</h3>
                                                <ul>
                                                    <li>Design</li>
                                                    <li>Montaje</li>
                                                    <li>Content</li>
                                                    <li>SEO</li>
                                                </ul>
                                            </div>
                                            <div className='dsCol col-sm-12 col-md-4'>
                                                <h3>Operation</h3>
                                                <ul>
                                                    <li>Update Content</li>
                                                    <li>Support Platform</li>
                                                    <li>SEO</li>
                                                    <li>Reports</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <h3>
                                        Diseñamos y administramos su sitio web, como una de las grandes plataformas de presentación del
                                        portafolio, accesibilidad, información y desarrollo de su compañía.
                                        <br/>
                                        <br/>
                                        Para hacerlo efectivo y eficiente, trabajamos en la construcción de la mano de nuestros clientes,
                                        identificamos las palabras clave o meta tags necesarios que servirán a la hora de hacer uso de los SEO,
                                        los resultados arrojados nos darán los insights que nos permitirán potencializar la estrategia para llegar a
                                        las audiencias de la forma correcta, crear herramientas que más que informativas, sean interactivas y
                                        faciliten el acceso a los productos.y servicios ofrecidos por cada compañía.
                                        <br/>
                                        <br/>
                                        Esta oferta está conformada por los siguientes ciclos:
                                        </h3>
                                    <div id='digitalServiceCols' className='clearFix'>
                                        <div className='dsCol col-sm-12 colmd-4'>
                                            <h3>Consulting</h3>
                                            <ul>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                        <div className='dsCol col-sm-12 colmd-4'>
                                            <h3>Development</h3>
                                            <ul>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                        <div className='dsCol col-sm-12 colmd-4'>
                                            <h3>Operation</h3>
                                            <ul>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                }
                        </div>
                        <div className='serviceEntry' >
                            <h1><span className="glyphicon glyphicon-comment"></span>K-Social</h1>
                                {language==='eng'?
                                    <div>
                                        <h3>    
                                            Design and administration of social networks as a tool that contributes to the generation of
                                            website traffic, the way a trend is created, stories are constructed by means of
                                            audiovisual material (videos, photographs, infographics), which allow communities to be created and engagement
                                            with the brand.
                                        </h3>
                                        <div id='digitalServiceCols' className='clearFix'>
                                            <div className='dsCol col-sm-12 col-md-6'>
                                                <h3>Social Media Strategy</h3>
                                                <ul>
                                                    <li>Planning</li>
                                                    <li>Photography</li>
                                                    <li>Videos</li>
                                                    <li>Copywriting</li>
                                                    <li>Engagement</li>
                                                    <li>Editing</li>
                                                    <li>Reporting</li>
                                                </ul>
                                            </div>
                                            <div className='dsCol col-sm-12 col-md-6'>
                                                <h3>Online Advertising</h3>
                                                <ul>
                                                    <li>Paid Social Media</li>
                                                    <li>Production</li>
                                                    <li>Campaign</li>
                                                    <li>Report</li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <h3>
                                            Diseño y administración de las redes sociales como una herramienta que contribuye a la generación de
                                            tráfico del sitio web, a la manera como se crea tendencia, se construyen historias por medio de
                                            material audiovisual (videos, fotografías, infografías), que permiten crear comunidades y engagement
                                            con la marca.
                                        </h3>
                                        <div id='digitalServiceCols' className='clearFix'>
                                        <div className='dsCol col-sm-12 col-md-6'>
                                            <h3>Social Media Strategy</h3>
                                            <ul>
                                                <li>Planning</li>
                                                <li>Photography</li>
                                                <li>Videos</li>
                                                <li>Copywriting</li>
                                                <li>Engagement</li>
                                                <li>Editing</li>
                                                <li>Reporting</li>
                                            </ul>
                                        </div>
                                        <div className='dsCol col-sm-12 col-md-6'>
                                            <h3>Online Advertising</h3>
                                            <ul>
                                                <li>Paid Social Media</li>
                                                <li>Production</li>
                                                <li>Campaign</li>
                                                <li>Report</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                }
                        </div>
                        <div className='serviceEntry'>
                            <h1><span className='glyphicon glyphicon-bullhorn'></span>K-Adds<br/></h1>
                                {language==='eng'?
                                    <div>
                                        <h3>
                                            We offer complementary services to the brand, strategic alternatives of
                                            branding and content for one or more languages, which can be materialized,
                                            inclusive, outside of the digital plane.
                                        </h3>
                                        <div id='digitalServiceCols' className='clearFix'>
                                            <div className='dsCol col-sm-12 col-md-6'>
                                                <h3>Complimentary Services</h3>
                                                <ul>
                                                    <li>Emailing</li>
                                                    <li>Branding</li>
                                                    <li>Infographic</li>
                                                    <li>App</li>
                                                    <li>Event Planner</li>
                                                    <li>Translations</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div>
                                        <h3>
                                            Ofrecemos servicios complementarios a la marca, alternativas estratégicas de
                                            branding y contenido para uno o más idiomas, que pueden ser materializadas,
                                            inclusive, fuera del plano digital.
                                        </h3>

                                        <div id='digitalServiceCols' className='clearFix'>
                                            <div className='dsCol col-sm-12 col-md-6'>
                                                <h3>Complimentary Services</h3>
                                                <ul>
                                                    <li>Emailing</li>
                                                    <li>Branding</li>
                                                    <li>Infographic</li>
                                                    <li>App</li>
                                                    <li>Event Planner</li>
                                                    <li>Translations</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                }
                        </div>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    )
}