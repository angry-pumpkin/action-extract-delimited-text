const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {

    try {
        const inputString = core.getInput('input-string');
        const delimiter = core.getInput('delimiter');

        let firstIndex = inputString.indexOf(delimiter);
        let lastIndex = inputString.lastIndexOf(delimiter);   
        let result = inputString.substring(firstIndex+delimiter.length, lastIndex);    

        core.setOutput("is-matched", result ? true : false);
        core.setOutput("result", result);
    }
    catch (error) {
        core.setFailed(error.message);
    }
}

main();