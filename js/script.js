const buttonAdd = document.getElementById("basic-addon1");
const buttonMinus = document.getElementById("basic-addon2");
const buttonPlus = document.getElementById("basic-addon3");
const buttonReset = document.getElementById("reset");
const buttonAssign = document.getElementById("assign-member");
const listeeClass = document.getElementById("input-field-name");
const unorderedList = document.querySelector(".name-list");
let teamsNumber = document.getElementById("input-field-teams");
let count = 0;

const buttonAddition = () => {
    teamsNumber.value = ++count;
}

const buttonRemove = () => {
    if (count >= 1) {
    teamsNumber.value = --count;
    }
}


const addTeam = () => {
    const teamList = document.querySelector(".teams-list");
    const newTeam = document.createElement("ul");
    let counterNumber = parseInt(teamsNumber.value);
    newTeam.innerText = "Team" + " " + counterNumber;
    newTeam.classList.add("team-list-group");
    newTeam.classList.add("col-6");
    teamList.appendChild(newTeam);
}

const removeTeam = () => {
    const newTeam = document.querySelectorAll(".team-list-group");
    let counterNumber = parseInt(teamsNumber.value);
    newTeam[counterNumber].remove();
}

const resetNames = () => {
    // const unorderedList = document.querySelector(".list-group");
    unorderedList.textContent = "";
}

const addListItem = function() {
    if (listeeClass.value === "") {
        return;
    }
    const newListItem = document.createElement("li");
    newListItem.innerText = listeeClass.value;
    newListItem.classList.add("list-group-item");
    unorderedList.appendChild(newListItem);
    listeeClass.value = "";
}

const assignMemberToTeam = () => {
    const teamList = document.querySelector(".teams-list");
    const newTeam = document.querySelectorAll(".team-list-group");
    // const values = Object.values(teamList);
    // console.log(values);
    const unorderedList = document.querySelector(".list-group");
    const newTeamItem = document.createElement("li");
    const values = Object.values(newTeam);

    newTeamItem.innerText = unorderedList.lastChild.innerText;
    newTeam[0].appendChild(newTeamItem);
    teamList.appendChild(newTeam);
    console.log(Object.values(newTeamItem), Object.keys(newTeamItem));
}

// const assignMemberToTeam = () => { 
// 	//this is the same logic as distributing cards among players: 
// 	//each player gets one card, in order. Once all the players have received the first round of cards,
// 	//they all recieve a second round and so on, so forth...

// 	let currentTeam = 0 //this will make sure that names are assigned through all teams
// 	while (unorderedList.length > 0) { //until there's people in the waitingList...
// 		if (currentTeam >= counterNumber) { //if we have assigned a student for each team...
// 			currentTeam = 0 //start from the first team again 
// 		}
// 		//this below happens in ALL cases
// 		let ranNum = Math.floor(Math.random() * unorderedList.length)
// 		let randomStudent = unorderedList[ranNum] //randomize a student
// 		// waitingList = waitingList.filter((name) => name !== randomStudent) //ES6 <<= we still have not covered this, so I gave you an alternative: 
// 		unorderedList.splice(ranNum, 1)
// 		let currentId = "#team_" + currentTeam.toString() //get the id of the team
// 		let teamUl = document.querySelector(currentId) //retrieve the element
// 		let li = document.createElement("li") //create an li
// 		li.innerText = randomStudent
// 		teamUl.appendChild(li)
// 		currentTeam += 1
//         console.log(ranNum, randomStudent, currentId, teamUl, li);
//         console.log(unorderedList, typeof unorderedList);
// 	}
// }

buttonPlus.addEventListener('click', buttonAddition);
buttonMinus.addEventListener('click', buttonRemove);
buttonPlus.addEventListener('click', addTeam);
buttonMinus.addEventListener('click', removeTeam);
buttonReset.addEventListener('click', resetNames);
buttonAdd.addEventListener('click', addListItem);
buttonAssign.addEventListener('click', assignMemberToTeam);
listeeClass.addEventListener('keyup', function(event) {
    if (event.which === 13) {
        addListItem();
    }
})