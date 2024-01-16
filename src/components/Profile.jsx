import "./Profile.css"

export default function Profile(props) {
    const {profile} = props;
    
    return (
        <div class="profile-card">
            <img src={profile.avatar} alt="" />
            <h2>{profile.nickname}</h2>
        </div>
    )
}