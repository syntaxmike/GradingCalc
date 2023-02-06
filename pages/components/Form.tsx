import React, { useState } from 'react';
import { Inter } from '@next/font/google';
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })


const CourseInput = () => {

    const [fValue, setFValue] = useState(0);
    const [sValue, setSValue] = useState(0);

    let percent = Math.ceil(((Math.max(fValue, sValue)/(fValue + sValue)) * 100));
    
    function handleEnter(e: any) {
      if (e.keyCode === 13) {
        const form = e.target.form;
        const index = Array.prototype.indexOf.call(form, e.target);
        form.elements[index + 1].focus();
        e.preventDefault();
      }
    }

    function handleReset() {
      setFValue(0);
      setSValue(0);
    }

  return (
    <form>
    <h1 className="py-4 underline underline-offset-1 text-lg">Centering Calculator</h1>
      <label>
        Edge A {isNaN(fValue/(fValue + sValue)) ? '' : (fValue/(fValue + sValue) * 100).toFixed(1) + '%'}
      </label>
      <div className="py-2">
        <input 
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="number" 
            min="0" 
            pattern="[0-9]*" 
            onKeyDown={handleEnter} 
            onFocus={(e) => e.target.select()} 
            onChange={ e => 
                e.target.value ? setFValue(parseInt(e.target.value)) : null
            } 
            required
            value={'' || Math.max(0, fValue)}
        />
      </div>
      <label>
        Edge B {isNaN(sValue/(fValue + sValue)) ? '' : (sValue/(fValue + sValue) * 100).toFixed(1) + '%'}
      </label>
      <div className="py-2">
        <input 
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="number" 
            min="0" 
            pattern="[0-9]*" 
            onKeyDown={handleEnter} 
            onFocus={(e) => e.target.select()} 
            onChange={ e => 
                e.target.value ? setSValue(parseInt(e.target.value)): null
            } 
            required
            value={'' || Math.max(0, sValue)}
        />
      </div>
      <div className="px-16 py-2">
        <input
            className='bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded'
            type="reset" 
            onClick={handleReset} 
            value="Reset" />
      </div>
      <p className="px-2 py-2 text-2xl text-center">Centering Grade: 
            {percent >= 50 && percent <= 55 && 
                <span className="text-emerald-900 text-5xl px-2">10</span>
            }
            {percent >= 56 && percent <= 60 && 
                <span className="text-red-400 text-5xl px-2">9</span>
            }
            {percent >= 61 && percent <= 65 && 
                <span className="text-yellow-400 text-5xl px-2">8</span>
            }
            {percent >= 66 && percent <= 70 && 
                <span className="text-blue-400 text-5xl px-2">7</span>
            }
            {percent >= 71 && percent <= 80 && 
                <span className="text-neutral-400 text-5xl px-2">6</span>
            }
            {percent >= 81 && percent <= 85 && 
                <span className="text-gray-200 text-5xl px-2">5</span>
            }
            {percent > 85 && 
                <span className="text-gray-300 text-5xl px-2">4</span>
            }
      </p>
    </form>
  );
};

export default CourseInput;
