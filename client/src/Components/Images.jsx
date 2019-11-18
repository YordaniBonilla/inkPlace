import React from 'react';
import Img from 'react-image';
import Image from 'react-image-resizer';
class Images extends React.Component {
    constructor() {
     super();
     this.state = {
      style: []
    } 
    }
    

    render() {
      const { description } = this.props;
      return (
        <div class="d-flex flex-wrap justify-content-center">
            <div class="card" style={{width: '18rem'}}>
              <img 
                class="card-img-top"
                height={200} 
                src={require('../blackwork/body.jpg')} 
                alt="Card image cap"
              />
              <div class="card-body">
              <h4 >BlackWork</h4>
              <p class="card-text">
              {description.map((item,index) => index === 3 ? item.info : '')}
              </p>
              </div>
              </div>

              <div class="card" style={{width: '18rem'}}>
                <img 
                  class="card-img-top" 
                  src={[require('../oldSchool/one.jpg')]} 
                  alt="Card image cap"
                  height={200}
                />
              <div class="card-body">
              <h4>OldSchool</h4>
              <p class="card-text">
              {description.map((item,index) => index === 0 ? item.info : '')}
              </p>
              </div>
              </div>

              <div class="card" style={{width: '18rem'}}>
                <img 
                  class="card-img-top" 
                  src={[require('../tribal/one.jpg')]} 
                  alt="Card image cap"
                  height={200}
                />
              <div class="card-body">
              <h4>Tribal</h4>          
              <p class="card-text">
              {description.map((item,index) => index === 2 ? item.info : '')}
              </p>
              </div>
              </div>

              <div class="card" style={{width: '18rem'}}>
                <img 
                  class="card-img-top" 
                  src={[require('../japanese/back.jpg')]} 
                  alt="Card image cap"
                  height={200}
                />
              <div class="card-body">
              <h4>Japanese</h4>
              <p class="card-text">
              {description.map((item,index) => index === 1 ? item.info : '')}
              </p>
              </div>
              </div>
        </div>
      );

    }
   
 };

  export default Images;