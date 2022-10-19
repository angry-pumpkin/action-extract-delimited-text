const core = require('@actions/core');

const main = async () => {

    let result;

    try {
        
        const inputString = core.getInput('input-string');
        const delimiter = core.getInput('delimiter');

        let firstIndex = inputString.indexOf(delimiter);
        console.log('#### firstIndex: '+firstIndex);

        let lastIndex = inputString.lastIndexOf(delimiter);          
        console.log('#### lastIndex: '+lastIndex);

        if(firstIndex >= 0 && firstIndex != lastIndex) {
            result = inputString.substring(firstIndex+delimiter.length, lastIndex);  
        }

        core.setOutput("is-matched", result ? true : false);
        core.setOutput("result", result);
    }
    catch (error) {
        core.setFailed(error.message);
    }
}

main();