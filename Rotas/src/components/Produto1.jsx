import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function Produto1(){
    return(
<Container fluid>
    <Row>
        <Col className="text-center"> 
        <Image
            fluid
            src={'https://www.golfwrx.com/wp-content/uploads/2021/01/Screen-Shot-2021-01-11-at-9.55.18-AM-1000x600.png'}
            alt="me"
            width="50%"
        />
        </Col>
    </Row>
</Container>
    ); 
} 

export default Produto1;