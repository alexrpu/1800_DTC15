function CreateSkill(user, name, description, eachInterval, perInterval){
    let Skills = {}
    Skills[name] = {
        description: description,
        interval: eachInterval,
        perInterval: perInterval,
        iterations: {

        }
    }
    console.log(Skills)
    db.collection("users").doc(user.uid).set({
        Skills
    }, { merge: true }).then(function(){
        window.location.assign("main.html");
    })
}

async function NewUser(user){
    db.collection("users").doc(user.uid).set({
        name: user.displayName,
        email: user.email,
        Skills: {
            dummySkill: {
                description: "Dummy Skill",
                interval: "Daily",
                perInterval: "2",
                iterations: {

                }
            }
        }
    })
}

function setActiveStreak(id){
    localStorage.setItem('activeStreak', id);
}