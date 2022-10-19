const core = require('@actions/core');

const main = async () => {

    try {
        const inputString = core.getInput('input-string');
        const delimiter = core.getInput('delimiter');

        let firstIndex = inputString.indexOf(delimiter);
        console.log('#### firstIndex: '+firstIndex);

        let nextStartPosition = firstIndex + delimiter.length;
        console.log('#### nextStartPosition: '+nextStartPosition);

        let lastIndex = inputString.lastIndexOf(delimiter, nextStartPosition);          
        console.log('#### lastIndex: '+lastIndex);

        let result = inputString.substring(firstIndex+delimiter.length, lastIndex);    
        console.log('#### result: '+result);

        core.setOutput("is-matched", result ? true : false);
        core.setOutput("result", result);
    }
    catch (error) {
        core.setFailed(error.message);
    }
}

main();