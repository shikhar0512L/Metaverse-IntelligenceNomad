import { useMoralis } from "react-moralis";
import Image from 'next/image';
import ChangeUserName from './ChangeUserName';
import Avatar from "./Avatar";

function Header() {
    const { user } = useMoralis();
    return (
        <div className="sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700 text-pink-500">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image
                        src="https://intelligence-nomad.web.app/Intelligence-Nomad.png"
                        className="rounded-full"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div className="col-span-4 text-left lg:text-center">
                    <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
                    <Avatar
                    logoutOnPress
                    />
                    </div>

                    <h1 className="text-3xl">Welcome to Metaverse - Intelligence nomad</h1>
                    <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

                        <ChangeUserName />
                </div>

            </div>
        </div>
    )
}

export default Header;