


import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import peopleData from './peopleData';

import Deep from "./Main6";



function BasicExample() {

  const[select, setselect] = React.useState("")

  const[dikhao, setdikho] = React.useState(true)
    
  const[dekho, setdekho] = React.useState(false)

  const person = peopleData.find(person => person.id === select);




    function  Dabao(person) {


      console.log(person.id)

      setselect(person)

      setdikho(false)
        
      setdekho(true)




    }


    React.useEffect(() => {
        
     // console.log(select)
      
  }, [select])



      function Arrow(){


        setdekho(false)

        setdikho(true)


      }








  return (
    <>
      <Row xs={1} md={2} lg={4}  className="g-4">

  
           









        {peopleData.map((person, index) => (

           
          dikhao && (

               

          <Col key={index}>


            <Card onClick={() => Dabao(person)}>



              <Card.Img variant="top" src={person.pic} />
              <Card.Body>
                <Card.Title>{person.name}</Card.Title>
                <Card.Text>
                  {person.description}
                </Card.Text>

                  <Row>
                 
                  <Col className="mb-2">
                   
                <Button variant="primary">Buy now</Button>


                </Col>


                <Col> 
                
                <Button variant="dark">Add to cart <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg></Button>
                
                </Col>


              



                 </Row>

                 
                 
                 
               
                

                

                

                 


              </Card.Body>
            </Card>
          </Col>

          )

        ))}
      </Row>




        { dekho && <Deep select={select} dikhao={dikhao} dekho={dekho} Arrow={Arrow} /> }












    </>
  );
}

export default BasicExample;
















