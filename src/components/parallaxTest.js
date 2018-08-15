import React from 'react';
import { Parallax, Background } from 'react-parallax';

const MyComponent = () => (
  <div>
    {/*<Parallax
      blur={10}
      bgImage={require('./images/docks.jpg')}
      bgImageAlt="the cat"
      strength={200}
    >
    <div style={{height: '100vh'}}>
    <div id='textOverParallax'>
    <h1>sdafadfadf asd fads fasd f sadf dsa fdsa f saf dsaf as df</h1>
    </div>
    </div>
    </Parallax>
    <div style={{height: '200px', background:'white'}}></div>


    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={require('./images/garden.jpg')}
      bgImageAlt="the dog"
      strength={200}
    >
      Blur transition from min to max
      <div style={{ height: '100vh' }}>
      <h1>HELLO</h1>
      </div>
    </Parallax>



    <Parallax strength={300}>
      <div>Use the background component for custom elements</div>
      <Background className="custom-bg">
        <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
      </Background>
      <div style={{ height: '100vh' }} />
    </Parallax>
  </div>
    */}

    <div id="wrapper">
    <div class="content">    
        <p>This text is in frontend</p>
    </div>
    <div class="background">
        <p>Background text</p>
        <img src="http://nuclearpixel.com/content/icons/2010-02-09_stellar_icons_from_space_from_2005/earth_128.png" alt="background" />
        <img src="http://upload.wikimedia.org/wikipedia/en/0/0c/IrfanView_Logo.png" alt="background 2" />

    </div>
</div>







);
export default MyComponent;