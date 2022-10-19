const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {

    try {
        const inputString = core.getInput('input-string');
        console.log(`inputValue: ${inputString}`);

        const delimiter = core.getInput('delimiter');
        console.log(`delimiter: ${delimiter}`);

        let firstIndex = inputString.indexOf(delimiter);
        console.log(`firstIndex: ${firstIndex}`);

        let lastIndex = inputString.lastIndexOf(delimiter);
        console.log(`lastIndex: ${lastIndex}`);      

        let result = inputString.substring(firstIndex, lastIndex);
        console.log(`extracted: ${extracted}`);      

        core.setOutput("is-matched", true);
        core.setOutput("result", result);

    }
    catch (error) {
        core.setFailed(error.message);
    }
}

main();