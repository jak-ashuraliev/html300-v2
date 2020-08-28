// Local JSON data
const cards = [{
    "name": "Steve Smith",
    "jobTitle": "Project Manage",
    "company": "Front End Dev Co",
    "experience": "3 years",
    "school": "UW",
    "major": "Marketing",
    "email": "steve@fedc.com",
    "linkedInUrl": "steve.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", ".NET", "C#"
    ]
  },
  {
    "name": "Aaron Katz",
    "jobTitle": "Full Stack Developer",
    "company": "Web Sites and More",
    "experience": "5 years",
    "school": "SU",
    "major": "Computer Science",
    "email": "aaronNotMyemail@uw.com",
    "linkedInUrl": "aaron.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", "PHP", "Twig"
    ]
  },
  {
    "name": "Kyle Hendricks",
    "jobTitle": "Starting Pitcher",
    "company": "Chicago Cubs",
    "experience": "12 years",
    "school": "USC",
    "major": "Pitching",
    "email": "kyleH@cubs.com",
    "linkedInUrl": "kyle.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", "Ruby", "Rails"
    ]
  },
  {
    "name": "Michael Jordan",
    "jobTitle": "Point Guard",
    "company": "Chicago Buls",
    "experience": "20 years",
    "school": "UNC",
    "major": "Trash Talking",
    "email": "mJordan@bulls.com",
    "linkedInUrl": "mJordas.linkedinprofile.com",
    "codeLanguages": [
      "HTML", "CSS", "JavaScript", "Java", "Spring"
    ]
  }
]

// Loop thru data and template the information, set it to a variabel
const cardsHTML = cards.map(function (el) {
  let card = `
  <div class="card-outer-box">
			<div class="card-inner-box">
				<div class="card-profile">
					<img
						src="https://raw.githubusercontent.com/jak-ashuraliev/html300-v2/master/lesson02/assignment/img/unsplash-headshot.jpg"
						alt="profile photo" />
					<h3>${el.name}</h3>
					<p><em>${el.jobTitle}</em></p>
				</div>
				<div class="card-content">
					<ul>
						<li><strong>Company: </strong>${el.company}</li>
						<li><strong>Experince: </strong>${el.experience}</li>
						<li><strong>School: </strong>${el.school}</li>
						<li><strong>Major: </strong>${el.major}</li>
            <li><strong>Email: </strong>${el.email}</li>
            <li><strong>Tech Skills: </strong>${el.codeLanguages}</li>
					</ul>
					<p>
						<img class="icon"
							src="https://raw.githubusercontent.com/jak-ashuraliev/html300-v2/11adaec7ed506631b12190304ffd7380605f1e28/lesson02/assignment/img/linkedin.svg"
							alt="linkedin icon" />
						${el.linkedInUrl}
					</p>
				</div>
			</div>
    </div>
    <br>
  `;
  return card;
});


// Use jQuery's append() to add the generated code to the '.template-hook' main tag
$(".template-hook").append(cardsHTML);