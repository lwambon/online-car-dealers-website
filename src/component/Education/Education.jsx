import './Education.css';
import educationInfo from '../../data/Education';

function Education() {
  return (
    <div className="education-section">
      <h2 className="title">Education Center</h2>
      <div className="education-container">
        <h3 className="sub-title">Nairobi is an education centre and has many famous primary, high schools, and universities. Some of the famous recognized universities include:</h3>
        {educationInfo.map((university, index) => (
          <div className="education-card" key={index}>
            <img src={university.universityImage} alt={university.universityName} />
            <h4 className="university-title">{university.universityName}</h4>
            <p className="university-details">{university.universityInformation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
