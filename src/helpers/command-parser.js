import { render } from "@testing-library/react";
import HelpModal from 'components/help-modal';
import CrashWarningModal from 'components/crash-warning-modal'


const displayHelpModal = () => {
    render(
        <HelpModal />
    )
}
const displayCrashModal = () => {
    render(
        <CrashWarningModal />
    )
}

function parseCommand(command, flights) {

    let flightIds = flights.map(flight => flight.flightId);
    if(command.toLowerCase() === 'help') {
        displayHelpModal();
        return true;
    }
    if(command.toLowerCase() === 'scale') {
        return true;
    }
    if(command.toLowerCase() === 'crashtest') {
        displayCrashModal();
        return true;
    }
    let commandSplit = command.split(" ");
    //Check for flight id
    if(flightIds.includes(commandSplit[0])) {

        //In here check for commands + all parameters ensured in commands, otherwise return false
        if(commandSplit[1].toLowerCase() === 'c') {
            //check if it has a length of 2

            if(commandSplit[2].length === 2) {
                //altitude
                return true;
            } 
            else {
                if(commandSplit[2].length === 3) { //&& digits
                    return true;
                } 
                else if(commandSplit[2].length === 3 || commandSplit[2].length === 5) { 
                    if(commandSplit[3].toLowerCase === 'l'){
                        //left turn
                        return true;
                    }
                    else if(commandSplit[3].toLowerCase === 'r'){
                        //right turn
                        return true;
                    }
                    else{
                        //check for nav point
                        return true;
                    }
                }
                else{
                    return false;
                }
            }
        } 
        else if(commandSplit[1].toLowerCase() === 'l') {
            //do landing stuff
            return true;
        } 
        else if(commandSplit[1].toLowerCase() === 't') {
            //do takeoff stuff
            return true;
        } 
        else if(commandSplit[1].toLowerCase() === 'w') {
            //do wait stuff
            return true;
        } 
        else if(commandSplit[1].toLowerCase() === 'h') {
            //do hold stuff
            return true;
        } 
        else if(commandSplit[1].toLowerCase() === 'a') {
            //do abort stuff
            return true;        
        } 
        else if(commandSplit[1].toLowerCase() === 's') {
            //do speed stuff
            return true;
        }
    } 
    else {
        return false;
    }
}

export default parseCommand;