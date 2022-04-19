import { useMoralis } from "react-moralis";
import { useState } from "react";

function SendMessage({endOfMessagesRef}) {
    const { user , Moralis } = useMoralis();
    const [message, setMessage] = useState("");

    const sendMsg = (e) => {
        e.preventDefault();
        if (!message) return;

        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();

        messages.save({
            message: message,
            user: user.getUsername(),
            ethAddress: user.get("ethAddress"),

        }).then((message)=>{
                // The object uas saved sucessfully!
        },(error)=>{
                // The save failed.
                // error is a Parse.Error with an error code and message.
                console.log(error.message);
        })
            endOfMessagesRef.current.scrollIntoView({behavior: "smooth"});
            setMessage("");
    }
  return (
        <form className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-pink-400">
            <input type="text"
            className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            placeholder={`Enter a message ${user.getUsername()}...`}/>
            <button type="submit" onClick={sendMsg} className="font-bold text-pink-500">Send</button>
        </form>
  )
}

export default SendMessage