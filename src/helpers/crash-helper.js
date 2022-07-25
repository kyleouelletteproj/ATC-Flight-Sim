import { render } from 'react';
import CrashWarningModal from 'components/crash-warning-modal';

export function checkCrash(arry) {
    let toMap = {};
    let resultToReturn = false;
    for (let i = 0; i < arry.length; i++) {

        if (toMap[arry[i]]) {
            resultToReturn = true;
            // terminate the loop
            break;
        }

        toMap[arr[i]] = true;
    }

    if (resultToReturn) {
        render(<CrashWarningModal />)
        return true;
        }
        else {
            return false;
            }
        }