import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';

export default function Home(props: any) {
  const fnc = props.all.countUpFnc;

  const [cssName, setCssName] = useState(styles.apper_div);
  const [scrollVolume,setScrollVolume]=useState<number>(0);
  const [windowHeight, setWindowHeight]=useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrollVolume(scrollY);
      console.log(scrollVolume);
      if (scrollVolume>(windowHeight+100)){
        setCssName(`${styles.apper_div} ${styles.active}`);
          console.log('detected!');
        } 
    });
  }, [scrollVolume]);

  useEffect(()=>{
    setWindowHeight(window.innerHeight);
  },[]);

  const getFnc=()=>{
    console.log(window.innerHeight);
    const domGetter=document.querySelectorAll('.test_div');
    domGetter.forEach((data,index)=>{
      console.log(index);      
      setTimeout(() => {
        data.classList.add('active');
      }, index*500);
    });
  }

  useEffect(()=>{
  },[]);
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h3>This is Top Page</h3>
          <Link href='/components/about'>Goto About</Link>
          <br />
          <button onClick={fnc}>増加</button>
        </div>

        <button onClick={getFnc}>Get</button>
        <p>test code</p>
        <div className='test_div'>
          <p>Apear1</p>
        </div>
        <div className='test_div'>
          <p>Apear2</p>
        </div>
        <div className='test_div'>
          <p>Apear3</p>
        </div>
        <div className='test_div'>
          <p>Apear4</p>
        </div>
        <div className='test_div'>
          <p>Apear5</p>
        </div>
      </main>
    </>
  )
}
