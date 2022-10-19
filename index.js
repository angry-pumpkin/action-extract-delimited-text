const core = require('@actions/core');

const main = async () => {

    let result;
    let isMatched = false;

    try {
        
        const inputString = core.getInput('input-string');
        const delimiter = core.getInput('delimiter');
        const failNoMatch = core.getInput('fail-no-match');

        let firstIndex = inputString.indexOf(delimiter);

        let lastIndex = inputString.lastIndexOf(delimiter);          

        if(firstIndex >= 0 && firstIndex != lastIndex) {
            result = inputString.substring(firstIndex+delimiter.length, lastIndex);  
            isMatched = true;
        }

        if(failNoMatch == 'true' && !isMatched) {
            core.setFailed('No Match Found');
        }       

        core.setOutput("is-matched", isMatched);
        console.log('is-matched: '+isMatched);

        core.setOutput("result", result);
        console.log('result: '+result);
    }
    catch (error) {
        core.setFailed('No Match Found');
    }
}

main();