





import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Arrow from "./Arrow";

import Row from 'react-bootstrap/Row';

import Col from 'react-bootstrap/Col';




function Deep({select}) {
  return (

     <>


    




     

       




    <div className="d-flex justify-content-center mt-4">


        



      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={select.pic} />
        <Card.Body>
          <Card.Title>{select.name}</Card.Title>
          <Card.Text>
            {select.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>


      


        
        

        
        
        
        






   
  
     


      </>





  );
}

export default Deep;
























