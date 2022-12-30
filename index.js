function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
        switch (randomNum) {
            case 0: 
                return "rock";
                break;
            case 1: 
                return "scissors";
                break;
            case 2:
                return "paper";
                break;
             }
};

