// This is where Nyle will code up the UI during first sprint.

// Coordinate with Adam because this view might be the same as Dashboard.js in patient-pages
import Patientcard from "../../components/patientcard";
import "./Patients.css";
import Navbar from "../../components/navbar";

const Patients = (props) => {

  const INFO= [
    {
      img: "/Images/JaneDoe.png",
      name: "Jane Doe",
      sex: "Female",
      age: 21,
      bloodType: "A+",
      knownIllnesses: ["Peanut Allergy", "Test Illness 2"],
      upcomingAppointments: [{
        location: "Women's Hospital",
        purpose: "Ultrasound",
        date: "Thursday, October 5, 2022, 5:00PM"
      }, {
        location: "Scarborough General Hospital",
        purpose: "X-ray",
        date: "Sunday, October 21, 2022, 6:00PM"
      }]
    },
    {
      img: "/Images/JaneDoe.png",
      name: "Nyle Melegrito",
      sex: "Male",
      age: 21,
      bloodType: "O-",
      knownIllnesses: ["Swag", "Smelly"],
      upcomingAppointments: [{
        location: "Men's Hospital",
        purpose: "General Check-up",
        date: "Thursday, November 5, 2022, 5:00PM"
      }, {
        location: "Scarborough General Hospital",
        purpose: "X-ray",
        date: "Sunday, November 21, 2022, 6:00PM"
      }]
    },
    {
      img: "/Images/JaneDoe.png",
      name: "Lebron James",
      sex: "Male",
      age: 37,
      bloodType: "AB-",
      knownIllnesses: ["Old Age", "Bad Teammates"],
      upcomingAppointments: [{
        location: "Humber River Hospital",
        purpose: "X-Ray",
        date: "Thursday, October 5, 2022, 5:00PM"
      }, {
        location: "Madison Square Garden",
        purpose: "Drop 50",
        date: "Sunday, December 21, 2022, 6:00PM"
      }]
    },
    {
      img: "/Images/JaneDoe.png",
      name: "Malia Monae",
      sex: "Female",
      age: 24,
      bloodType: "B+",
      knownIllnesses: ["Sick", "Test Illness 2"],
      upcomingAppointments: [{
        location: "Toronto Hospital",
        purpose: "Cough",
        date: "Wednesday, November 23, 2022, 5:00PM"
      }, {
        location: "Scarborough General Hospital",
        purpose: "Vaccine",
        date: "Sunday, October 31, 2022, 8:00PM"
      }]
    }
  ]
  return (
    <div>
      <Navbar />
      <h2>Patients Page</h2>
      <div className="patients">
        { INFO.map((patient) => 
          {
            return (
              <div>
                <Patientcard
                  img= {patient.img}
                  name= {patient.name}
                  sex= {patient.sex}
                  age= {patient.age}
                  blood= {patient.bloodType}
                  ill= {patient.knownIllnesses}
                />
              </div>
            )
          }
        )}
        {/* <div>
          <Patientcard 
            img="/lebron.jpg"
            name="LeBron James"
            sex="Male"
            age="37"
            blood="AB-"
            ill="bad teammates"
          />
        </div>
        <div>
          <Patientcard 
            img="/lebron.jpg"
            name="LeBron James"
            sex="Male"
            age="37"
            blood="AB-"
            ill="bad teammates"
          />
        </div>
        <div>
          <Patientcard 
            img="/lebron.jpg"
            name="LeBron James"
            sex="Male"
            age="37"
            blood="AB-"
            ill="bad teammates"
          />
        </div>
        <div>
          <Patientcard 
            img="/lebron.jpg"
            name="LeBron James"
            sex="Male"
            age="37"
            blood="AB-"
            ill="bad teammates"
          />
        </div>
        <div>
          <Patientcard 
            img="/lebron.jpg"
            name="LeBron James"
            sex="Male"
            age="37"
            blood="AB-"
            ill="bad teammates"
          />
        </div>
        <div>
          <Patientcard 
            img="/lebron.jpg"
            name="LeBron James"
            sex="Male"
            age="37"
            blood="AB-"
            ill="bad teammates"
          />
        </div> */}
      
      </div>
    </div>
  );
};

export default Patients;
