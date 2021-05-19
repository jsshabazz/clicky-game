import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card>
      <img class="card-img-top" src={props.url} alt="Card img cap"></img>

        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText></CardText>
         
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;






// import React from 'react'
// import React, { Component } from 'react';


// const card = (props) => {
//     return (
   
   
//         <div>
//            <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src={props.url} alt="Card img cap"></img>

//         </div>
//         </div>
//     );
// };


// export default card;