import { useMoralis } from "react-moralis";

const ChangeUserName = () => {

  const {
    setUserData,
    user,
    userError,
    isUserUpdating
  } = useMoralis();

  const setUserName = () => {
    const username = prompt(`Please enter your new username (current: ${user.getUsername()})`);
    if (!username) return;
    
    setUserData({
      username,
    })
  }

  return (
    <div className="text-sm absolute top-5 right-5 ">
        <button disabled={isUserUpdating} onClick={setUserName} className="hover:text-pink-700">
          Change Username
        </button>
    </div>
  )
}

export default ChangeUserName