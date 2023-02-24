import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [counter, setCounter] = useState(1);
  const countUpFnc = () => setCounter(counter + 1);
  const countDownFnc = () => setCounter(counter - 1);
  const allData={setCounter,countDownFnc,countUpFnc}
  return (
    <>
      <p>現在の数字は{counter}です。</p>
      <button onClick={countUpFnc}>+</button>
      <button onClick={countDownFnc}>-</button>
      <Component {...pageProps} all={allData} />
    </>
  )
}
