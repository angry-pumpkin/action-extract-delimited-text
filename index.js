const core = require('@actions/core');

const main = async () => {

    try {
        const inputString = core.getInput('input-string');
        const delimiter = core.getInput('delimiter');

        let firstIndex = inputString.indexOf(delimiter);
        console.log('### firstIndex: '+firstIndex);

        let lastIndex = inputString.lastIndexOf(delimiter, firstIndex+50);   
        console.log('### lastIndex: '+lastIndex);

        let result = inputString.substring(firstIndex+delimiter.length, lastIndex);    
        console.log('### result: '+result);

        core.setOutput("is-matched", result ? true : false);
        core.setOutput("result", result);
    }
    catch (error) {
        core.setFailed(error.message);
    }
}

main();