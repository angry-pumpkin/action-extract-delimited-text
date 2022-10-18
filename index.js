const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {

    try {
        const inputString = core.getInput('input-string');
        console.log(`inputValue: ${inputString}`);

        const delimiter = core.getInput('delimiter');
        console.log(`delimiter: ${delimiter}`);
    }
    catch (error) {
        core.setFailed(error.message);
    }
}

main();