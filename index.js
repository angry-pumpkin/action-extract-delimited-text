const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {

    try {
        const inputValue = core.getInput('input-value');
        console.log(`inputValue: ${inputValue}`);

        const delimiter = core.getInput('delimiter');
        console.log(`delimiter: ${delimiter}`);
    }
    catch (error) {
        core.setFailed(error.message);
    }
}

main();