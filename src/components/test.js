import * as React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const Test = () => {

    return(
    <Container>
        <Row>
            <Col lg={4}>Column 1</Col>
            <Col lg={4}>Column 2</Col>
            <Col lg={4}>Column 3</Col>
        </Row>
    </Container>

    // <div style={{backgroundColor: 'white'}}>
    //     <div className='test-row'>
    //         <div>Div 1</div>
    //         <div>Div 2</div>
    //         <div>Div 3</div>
    //     </div>
    // </div>
    );

}

export default Test;