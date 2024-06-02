// import "./styles.css";
'use client'

import Parent from "@/components/parent";
import { useSyncExternalStore } from "react";

export default function App() {

  const scrrenWidth = useSyncExternalStore(
    (notify)=>{
      window.addEventListener('resize',notify)
      return ()=>window.removeEventListener('resize',notify)
    },
    ()=>{
      return window.innerWidth
    }
  )

  const subscribe = listener => {
    window.addEventListener('online',listener)
    window.addEventListener('offline',listener)
    return ()=>{
      window.removeEventListener('online',listener)
      window.removeEventListener('offline',listener)
    }
  }

  const getIntialProps = ()=> navigator.onLine

  const isOnline = useSyncExternalStore(subscribe,getIntialProps)


  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Parent/>
      <h1>Hi {scrrenWidth}</h1>
      <p>{isOnline ? 'connected' : 'Pls turn on the internet'}</p>
    </div>
  );
}
