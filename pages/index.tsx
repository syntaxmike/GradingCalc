import Head from 'next/head'
import React, {useEffect, useRef, useState } from 'react';
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })
const initalFValue = 0;
const initalSValue = 0;

const Home = () => {

  const [fValue, setFValue] = useState(initalFValue);
  const [sValue, setSValue] = useState(initalSValue);

  let percent = Math.ceil(((Math.max(fValue, sValue)/(fValue + sValue)) * 100));
  
  function handleEnter(event: any) {
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }

  // const edgeAFocus = useRef(null);

  // useEffect(() => {
  //   if (edgeAFocus.current) {
  //     edgeAFocus.current.focus();
  //   }else {

  //   }
  // }, []);

  function handleReset() {
    setFValue(initalFValue);
    setSValue(initalSValue);
  }

  return (
    <>
      <Head>
        <title>PSA Grading</title>
        <meta name="description" content="PSA Centering Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <form>
        <h1 className="p-8">Centering Calculator</h1>
          <label>
            Edge A 
          </label>
          <div className="py-2">
            <input type="number" onKeyDown={handleEnter} value={fValue} onFocus={(e) => e.target.select()} onChange={e => e.target.value ? setFValue(parseInt(e.target.value)) : 0}/>
            <span className="p-4">{(fValue/(fValue + sValue) * 100).toFixed(1)} %</span>
          </div>
          <label>
            Edge B 
          </label>
          <div className="py-2">
            <input type="number" onKeyDown={handleEnter} value={sValue} onFocus={(e) => e.target.select()} onChange={e => e.target.value ? setSValue(parseInt(e.target.value)): 0} />
            <span className="p-4">{(sValue/(fValue + sValue) * 100).toFixed(1)} %</span>
          </div>
          <div className="px-16 py-2">
            <input type="reset" onClick={handleReset} className='bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded' value="Reset" />
          </div>
          <p className="px-2 py-2 text-2xl">Centering Grade: 
              {percent >= 50 && percent <= 55 && <span className="text-sky-400 text-5xl px-2">10</span>}
              {percent >= 56 && percent <= 60 && <span className="text-sky-400 text-5xl px-2">9</span>}
              {percent >= 61 && percent <= 65 && <span className="text-sky-400 text-5xl px-2">8</span>}
              {percent >= 66 && percent <= 70 && <span className="text-sky-400 text-5xl px-2">7</span>}
              {percent >= 71 && percent <= 80 && <span className="text-sky-400 text-5xl px-2">6</span>}
              {percent >= 81 && percent <= 85 && <span className="text-sky-400 text-5xl px-2">5</span>}
              {percent > 85 && <span className="text-sky-400 text-5xl px-2">4</span>}
          </p>
        </form>
      </main>
    </>
  )
}

export default Home