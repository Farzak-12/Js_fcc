const poll = new Map();
let voted = "";
poll.set("Turkey", new Set(["Voter1", "Voter2", "Voter3"]));
poll.set("Morroco", new Set(["Voter4", "Voter5", "Voter6"]));
poll.set("Algeria", new Set(["Voter7", "Voter8", "Voter9"]));

const addOption = (option) => {
    if(!poll.has(option) && option){
        poll.set(option, new Set());
        return `Option "${option}" added to the poll.`;
    }
    else if(poll.has(option)){
        return `Option "${option}" already exists.`;
    }
    else if(!option){
        return `Option cannot be empty.`;
    }
}

const hasVoted = (voterId) => {
    let ind = 0;
    const keyArr = Array.from(poll.keys());
    const ValArr = Array.from(poll.values());
    if(ValArr.some((voter, opt) => {
        ind = opt;
        return voter.has(voterId);
    })){
        voted = keyArr[ind];
        return true;
    }
    return false;
}

const vote = (option, voterId) => {
    if(!poll.has(option)){
        return `Option "${option}" does not exist.`;
    }
    else if(hasVoted(voterId)){
        return `Voter ${voterId} has already voted for "${voted}".`;
    }
    else{
        poll.get(option).add(voterId);
        return `Voter ${voterId} voted for "${option}".`;
    }
}

const displayResults = () => {
    let results = "Poll Results:";
    poll.forEach((val, key) => {
        results += `\n${key}: ${val.size} votes`
    })
    return results;
}



console.log(displayResults());
