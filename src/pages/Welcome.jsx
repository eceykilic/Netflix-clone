import { profiles } from "../profiles"
import { useState } from "react";
import Profile from "../components/Profile"

export default function Welcome() {
    
    const [profileList, setProfileList] = useState(profiles);
    
    return (
        <div>
            <h1 className="whos">Who's Watching?</h1>
            <div className="profile-container">
                {profileList.map((item, index) => {
                    return (
                    <Profile key={index} profile={item}/>
                    )
                } )}
            </div>
        </div>
    )
}