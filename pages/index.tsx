import Head from 'next/head'
import React, {useEffect, useRef, useState } from 'react';
import styles from '@/styles/Home.module.css'
import Form from './components/Form';

const Home = () => {

  return (
    <>
      <Head>
        <title>PSA Grading</title>
        <meta name="description" content="PSA Centering Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
          <Form />
      </main>
    </>
  )
}

export default Home
