import Head from 'next/head';
import Image from 'next/image';
import {useMoralis} from "react-moralis";

function Login() {

    const { authenticate } = useMoralis();

    return (
        <>
        <Head>
            <title>Login - Metaverse- Intelligence nomad</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <div className="bg-black relative">
                <h1>I am the login Screen</h1>

                <div className="flex flex-col absolute z-50 h-4/6 w-full space-y-4 items-center justify-center">
                    <Image
                    src="https://intelligence-nomad.web.app/Intelligence-Nomad.png"
                    height={200}
                    width={200}
                    className="object-cover rounded-full"
                    />
                    <button className="bg-yellow-500 rounded-lg p-5 animate-pulse" onClick={authenticate}>Login to the Metaverse</button>
                </div>

                <div className="w-full h-screen">
                    <Image
                    src="https://links.papareact.com/55n"
                    alt="Metaverse"
                    layout='fill'
                    objectFit="cover"
                    />
                </div>

            </div>
        </>
    )
}

export default Login