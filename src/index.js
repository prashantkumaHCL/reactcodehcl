import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyMaxNumberForm() {
  const [MaxNumber, setMaxNumber] = useState("");
  const  [inputValue, setInputValue] =  useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(`The name you entered was: ${MaxNumber}`)
    if(MaxNumber.trim() != '' && MaxNumber > 0)
    {
      if(isNaN(MaxNumber))
      {
        alert('Only Number value is aloowed!')
      }
      else
      {
        var printedValue = '';
        for(var incr = 1; incr <= MaxNumber; incr++)
        {
          printedValue += incr+',';
        }
        printedValue = printedValue.substring(0,printedValue.length-1);
        setInputValue(printedValue);
      }
    }
    else
    {
      alert('Max Number should not be empty and greater than zero!')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label><b>Max Number to Print</b>:
        <input
          type="text" 
          value={MaxNumber}
          onChange={(e) => setMaxNumber(e.target.value)}
        />
      </label>
      <input type="submit" />

      <br />
      <p><b>The printed Numbers</b>: {inputValue}</p>
    </form>
  )
}

function MyAreaForm() {
  const [Height, setHeight] = useState("");
  const [Width, setWidth] = useState("");
  const  [CalculatedArea, setCalculatedArea] =  useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(Height.trim() != '' && Height > 0 && Width.trim() != '' && Width > 0)
    {
      if(isNaN(Height) && isNaN(Width))
      {
        alert('Only Number value is aloowed for Height & Width!')
      }
      else
      {
        var totalArea = (Height * Width);
        setCalculatedArea(totalArea);
      }
    }
    else
    {
      alert('Height & Width should not be empty and greater than zero!')
    }
  }

  return (
    
    <form onSubmit={handleSubmit}>
      <br /><br /><b>Area Calcuation:</b><br />
      <label><b>Height</b>:
        <input
          type="text" 
          value={Height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <label><b>Width</b>:
        <input
          type="text" 
          value={Width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </label>
      <input type="submit" />

      <br />
      <p><b>The Calculated Total Area</b>: {CalculatedArea}</p>
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyMaxNumberForm />);

const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<MyAreaForm />);
