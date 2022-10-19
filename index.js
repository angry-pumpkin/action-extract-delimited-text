const core = require('@actions/core');

const main = async () => {

    let result;
    let isMatched = false;

    try {
        
        const inputString = core.getInput('input-string');
        const delimiter = core.getInput('delimiter');
        const failNoMatch = core.getInput('fail-no-match');

        let firstIndex = inputString.indexOf(delimiter);
        console.log('#### firstIndex: '+firstIndex);

        let lastIndex = inputString.lastIndexOf(delimiter);          
        console.log('#### lastIndex: '+lastIndex);

        if(firstIndex >= 0 && firstIndex != lastIndex) {
            result = inputString.substring(firstIndex+delimiter.length, lastIndex);  
            isMatched = true;
        }

        if(failNoMatch == 'true') {
            core.setFailed('No Match Found');
            exit;
        }

        core.setOutput("is-matched", isMatched);
        core.setOutput("result", result);
    }
    catch (error) {
        core.setFailed('No Match Found');
    }
}

main();