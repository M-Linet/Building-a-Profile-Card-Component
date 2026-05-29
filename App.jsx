import ProfileCard from './ProfileCard';
import './App.css';

function App() {
  // Profile data for three different people
  const profiles = [
    {
      name: "Wanjiku Muthoni",
      role: "Software Engineer",
      location: "Nairobi, Kenya",
      bio: "Passionate full-stack developer with 5 years of experience building web applications. Loves React and solving real-world problems."
    },
    {
      name: "Atieno Omondi",
      role: "UX Designer",
      location: "Kisumu, Kenya",
      bio: "Creative designer focused on user-centered design. Enjoys creating beautiful and functional interfaces."
    },
    {
      name: "Maria Fatuma",
      role: "Product Manager",
      location: "Kilifi, Kenya",
      bio: "Data-driven product leader with expertise in agile methodologies. Passionate about building products users love."
    }
  ];

  return (
    <div className="app-container">
      <h1 className="title">Profile Cards</h1>
      <div className="cards-container">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            role={profile.role}
            location={profile.location}
            bio={profile.bio}
          />
        ))}
      </div>
    </div>
  );
}

export default App;