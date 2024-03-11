import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';

function Survey() {
    const [formData, setFormData] = useState({
      Q1: '',
      Q2: '',
      Q3: '',
      Q4: '',
      Q5: '',
      Q6: '',
      Q7: '',
      Q8: '',
      Q9: '',
      Q10: '',
      Q11: '',
      Q12: '',
      Q13: '',
      Q14: '',
      Q15: ''
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post(`${import.meta.env.VITE_REACT_APP_API_URL}/api/submit`, formData)
        .then((response) => {
        console.log(response.data);
        alert('Form submitted successfully!');
        window.location.href = '/results';
        })
        .catch((error) => {
        console.error('Error:', error);
        });
    };
  
    return (
      <div>
        <h1>Survey</h1>
        <Card style={{textAlign: 'left', padding: 50}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="Q1">
                    <Form.Label>1. How old are you?</Form.Label>
                    <Form.Control type="number" name="Q1" value={formData.Q1} onChange={handleChange} min="0" max="100" required />
                </Form.Group><br />

                <Form.Group controlId="Q2">
                    <Form.Label>2. What is your Gender?</Form.Label>
                    <Form.Check
                    type="radio"
                    label="Male"
                    id="Q2Option1"
                    name="Q2"
                    value="Male"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Female"
                    id="Q2Option2"
                    name="Q2"
                    value="Female"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Others"
                    id="Q2Option3"
                    name="Q2"
                    value="Others"
                    onChange={handleChange}
                    required 
                    />
                </Form.Group><br />

                <Form.Group controlId="Q3">
                    <Form.Label>3. At what time do you usually go to bed?</Form.Label>
                    <Form.Check
                    type="radio"
                    label="Before 10:00 PM"
                    id="Q3Option1"
                    name="Q3"
                    value="Before 10:00 PM"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="10:00 PM - 11:00 PM"
                    id="Q3Option2"
                    name="Q3"
                    value="10:00 PM - 11:00 PM"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="11:00 PM - 12:00 AM"
                    id="Q3Option3"
                    name="Q3"
                    value="11:00 PM - 12:00 AM"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="After 12:00 AM"
                    id="Q3Option4"
                    name="Q3"
                    value="After 12:00 AM"
                    onChange={handleChange}
                    required 
                    />
                </Form.Group><br />

                <Form.Group controlId="Q4">
                    <Form.Label>4. Do you experience difficulties falling asleep or staying asleep?</Form.Label>
                    <Form.Check
                    type="radio"
                    label="Never"
                    id="Q4Option1"
                    name="Q4"
                    value="Never"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Rarely"
                    id="Q4Option2"
                    name="Q4"
                    value="Rarely"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Sometimes"
                    id="Q4Option3"
                    name="Q4"
                    value="Sometimes"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Often"
                    id="Q4Option4"
                    name="Q4"
                    value="Often"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Always"
                    id="Q4Option5"
                    name="Q4"
                    value="Always"
                    onChange={handleChange}
                    required 
                    />
                </Form.Group><br />

                <Form.Group controlId="Q5">
                    <Form.Label>5. How many hours of sleep do you usually get per night?</Form.Label>
                    <Form.Control type="number" name="Q5" value={formData.Q5} onChange={handleChange} min="0" max="24" required />
                </Form.Group><br />



                <Form.Group controlId="Q6">
                    <Form.Label>6. On average, how many hours per day do you spend on the internet (including work and leisure)?</Form.Label>
                    <Form.Control type="number" name="Q6" value={formData.Q6} onChange={handleChange} min="0" max="24" required />
                </Form.Group><br />

                <Form.Group controlId="Q7">
                    <Form.Label>7. How often do you use electronic devices (smartphone, tablet, computer, etc.) in bed before going to sleep?</Form.Label>
                    <Form.Check
                    type="radio"
                    label="Never"
                    id="Q7Option1"
                    name="Q7"
                    value="Never"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Rarely"
                    id="Q7Option2"
                    name="Q7"
                    value="Rarely"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Sometimes"
                    id="Q7Option3"
                    name="Q7"
                    value="Sometimes"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Often"
                    id="Q7Option4"
                    name="Q7"
                    value="Often"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Always"
                    id="Q7Option5"
                    name="Q7"
                    value="Always"
                    onChange={handleChange}
                    required 
                    />
                </Form.Group><br />

                <Form.Group controlId="Q8">
                    <Form.Label>8. How often do you consume caffeinated beverages (coffee, tea, energy drinks) during the day?</Form.Label>
                    <Form.Check
                    type="radio"
                    label="Never"
                    id="Q8Option1"
                    name="Q8"
                    value="Never"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Rarely"
                    id="Q8Option2"
                    name="Q8"
                    value="Rarely"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Sometimes"
                    id="Q8Option3"
                    name="Q8"
                    value="Sometimes"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Often"
                    id="Q8Option4"
                    name="Q8"
                    value="Often"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Always"
                    id="Q8Option5"
                    name="Q8"
                    value="Always"
                    onChange={handleChange}
                    required 
                    />
                </Form.Group><br />

                <Form.Group controlId="Q9">
                    <Form.Label>9. How frequent do you exercise or engage in physical activity?</Form.Label>
                    <Form.Check
                    type="radio"
                    label="Never"
                    id="Q9Option1"
                    name="Q9"
                    value="Never"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Rarely"
                    id="Q9Option2"
                    name="Q9"
                    value="Rarely"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Sometimes"
                    id="Q9Option3"
                    name="Q9"
                    value="Sometimes"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Often"
                    id="Q9Option4"
                    name="Q9"
                    value="Often"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Always"
                    id="Q9Option5"
                    name="Q9"
                    value="Always"
                    onChange={handleChange}
                    required 
                    />
                </Form.Group><br />

                <Form.Group controlId="Q10">
                    <Form.Label>10. How would you rate your overall stress level?</Form.Label>
                    <Form.Check
                    type="radio"
                    label="Very Low"
                    id="Q10Option1"
                    name="Q10"
                    value="Very Low"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Low"
                    id="Q10Option2"
                    name="Q10"
                    value="Low"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Moderate"
                    id="Q10Option3"
                    name="Q10"
                    value="Moderate"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="High"
                    id="Q10Option4"
                    name="Q10"
                    value="High"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Very High"
                    id="Q10Option5"
                    name="Q10"
                    value="Very High"
                    onChange={handleChange}
                    required 
                    />
                </Form.Group><br />

                <Form.Group controlId="Q11">
                    <Form.Label>11. Do you engage in relaxation techniques (such as meditation, deep breathing exercises) before bedtime?</Form.Label>
                    <Form.Check
                    type="radio"
                    label="Never"
                    id="Q11Option1"
                    name="Q11"
                    value="Never"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Rarely"
                    id="Q11Option2"
                    name="Q11"
                    value="Rarely"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Sometimes"
                    id="Q11Option3"
                    name="Q11"
                    value="Sometimes"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Often"
                    id="Q11Option4"
                    name="Q11"
                    value="Often"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Always"
                    id="Q11Option5"
                    name="Q11"
                    value="Always"
                    onChange={handleChange}
                    required 
                    />
                </Form.Group><br />

                <Form.Group controlId="Q12">
                    <Form.Label>12. Do you feel refreshed upon waking up in the morning?</Form.Label>
                    <Form.Check
                    type="radio"
                    label="No"
                    id="Q12Option1"
                    name="Q12"
                    value="No"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Rarely"
                    id="Q12Option2"
                    name="Q12"
                    value="Rarely"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Sometimes"
                    id="Q12Option3"
                    name="Q12"
                    value="Sometimes"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Always"
                    id="Q12Option4"
                    name="Q12"
                    value="Always"
                    onChange={handleChange}
                    required 
                    />
                </Form.Group><br />

                <Form.Group controlId="Q13">
                    <Form.Label>13. Do you experience feelings of tiredness or fatigue during the day?</Form.Label>
                    <Form.Check
                    type="radio"
                    label="No"
                    id="Q13Option1"
                    name="Q13"
                    value="No"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Rarely"
                    id="Q13Option2"
                    name="Q13"
                    value="Rarely"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Sometimes"
                    id="Q13Option3"
                    name="Q13"
                    value="Sometimes"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Always"
                    id="Q13Option4"
                    name="Q13"
                    value="Always"
                    onChange={handleChange}
                    required 
                    />
                </Form.Group><br />

                <Form.Group controlId="Q14">
                    <Form.Label>14. Do you have a consistent sleep schedule (going to bed and waking up at the same time every day)?</Form.Label>
                    <Form.Check
                    type="radio"
                    label="No"
                    id="Q14Option1"
                    name="Q14"
                    value="No"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Rarely"
                    id="Q14Option2"
                    name="Q14"
                    value="Rarely"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Sometimes"
                    id="Q14Option3"
                    name="Q14"
                    value="Sometimes"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Always"
                    id="Q14Option4"
                    name="Q14"
                    value="Always"
                    onChange={handleChange}
                    required 
                    />
                </Form.Group><br />

                <Form.Group controlId="Q15">
                    <Form.Label>15. How would you rate the quality of your sleep?</Form.Label>
                    <Form.Check
                    type="radio"
                    label="Poor"
                    id="Q15Option1"
                    name="Q15"
                    value="Poor"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Fair"
                    id="Q15Option2"
                    name="Q15"
                    value="Fair"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Good"
                    id="Q15Option3"
                    name="Q15"
                    value="Good"
                    onChange={handleChange}
                    required 
                    />
                    <Form.Check
                    type="radio"
                    label="Excellent"
                    id="Q15Option4"
                    name="Q15"
                    value="Excellent"
                    onChange={handleChange}
                    required 
                    />
                </Form.Group><br />

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Card>
      </div>
    );
  }

export default Survey
