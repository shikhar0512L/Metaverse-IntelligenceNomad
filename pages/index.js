import Head from 'next/head'
import Image from 'next/image'
import Login from '../components/Login'
import styles from '../styles/Home.module.css';
import { useMoralis } from "react-moralis";
import Header from '../components/Header';
import Messages from '../components/Messages';

export default function Home() {

  const { isAuthenticated} = useMoralis();

  if (!isAuthenticated) return <Login />;


  return (
    <>
      <div className="h-screen overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900 overflow-hidden ">
        <Head>
          <title>Metaverse - Intelligence nomad</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <div className="max-w-screen-2xl mx-auto ">
            {/* Header */}
            <Header />
            {/* Messages */}
            <Messages />
          </div>
      </div>
    </>
  )
}