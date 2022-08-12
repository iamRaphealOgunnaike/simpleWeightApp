import { useState } from 'react';
import Form from 'react-bootstrap/Form';



const Converter =()=>{
    const [fromUnit,setFromUnit]=useState("KG")
    const [toUnit,setToUnit]=useState("LBS")
    const [value,setToValue]= useState("")
    const [result,seResult]= useState("")
    const [currentConversion, setCurrentConversion]= useState("1")
    return (
        <Form>
            <Form.Group className="mb-3" controlId="conversion">
                <Form.Label>Select Your Conversion</Form.Label>
                <Form.Select aria-label="Default select example">                    
                    <option value="1">KG-LBS</option>
                    <option value="2">KM-METER</option>
                    <option value="3">DOLLARS-INDIAN RUPEES</option>
                </Form.Select>
                
            </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Kg</Form.Label>
            <Form.Control type="text" placeholder="Enter Value" />           
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>LBS</Form.Label>
            <Form.Control type="text" placeholder="Result" />
          </Form.Group>                  
        </Form>
      );
    }
    
  

export default Converter;
