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
      return (
        <div class="d-flex">
            <div class="card" style={{width: '18rem'}}>
              <img 
                class="card-img-top" 
                src={require('../blackwork/body.jpg')} 
                alt="Card image cap"
              />
              <div class="card-body">
              <h4 >BlackWork</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              </div>

              <div class="card" style={{width: '18rem'}}>
                <img 
                  class="card-img-top" 
                  src={[require('../oldSchool/one.jpg')]} 
                  alt="Card image cap"
                />
              <div class="card-body">
              <h4>OldSchool</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              </div>

              <div class="card" style={{width: '18rem'}}>
                <img 
                  class="card-img-top" 
                  src={[require('../tribal/one.jpg')]} 
                  alt="Card image cap"
                />
              <div class="card-body">
              <h4>Tribal</h4>          
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              </div>

              <div class="card" style={{width: '18rem'}}>
                <img 
                  class="card-img-top" 
                  src={[require('../japanese/back.jpg')]} 
                  alt="Card image cap"
                />
              <div class="card-body">
              <h4>Japanese</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              </div>
        </div>
      );

    }
   
 };

  export default Images;