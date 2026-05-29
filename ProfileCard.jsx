function ProfileCard({ name, role, location, bio }) {
  const handleFollow = () => {
    alert(`You are now following ${name}!`);
  };

  return (
    <div className="profile-card">
      <div className="profile-info">
        <h2 className="profile-name">{name}</h2>
        <p className="profile-role">{role}</p>
        <p className="profile-location">📍 {location}</p>
        <p className="profile-bio">{bio}</p>
        <button className="follow-btn" onClick={handleFollow}>
          Follow
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;