import './BMICalculator.css';
import React, { useState } from 'react';

export function BMICalculator() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');

    let calculateBmi = (event) => {
        event.preventDefault();

        if (weight === '' || height === '') {
            alert('Please enter a valid weight and height');
        } else {
            let bmi = (weight / (height * height));
            setBmi(bmi.toFixed(1));

            if (bmi < 18.4) {
                setMessage('Underweight');
            } else if (bmi >= 18.4 && bmi < 24.9) {
                setMessage('Normal');
            } else if (bmi >= 25 && bmi <= 39.9) {
                setMessage('Overweight');
            } else {
                setMessage('Obese');
            }
        }
    }

    return (
        <section className="section">
            <div className='container'>
                <h2 className='center'>BMI Calculator</h2>
                <form onSubmit={calculateBmi}>
                    <div>
                        <label>Weight (kg)</label>
                        <input value={weight} onChange={(e) => setWeight(e.target.value)} className="input" placeholder='Enter weight here' />
                    </div>
                    <div>
                        <label>Height (meters)</label>
                        <input value={height} onChange={(event) => setHeight(event.target.value)} className="input" placeholder='Enter height here'/>
                    </div>
                    <div>
                        <button className='btn' type='submit'>Submit</button>
                    </div>
                </form>
                <div className='center'>
                    <h3>Your BMI is: {bmi}</h3>
                    <p>{message}</p>
                </div>
            </div>
        </section>
    );
}