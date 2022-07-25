function randomNumber(min, max) {
    return Math.floor((min + Math.random() * max-min));
}

function startPosition() {
    // four possible sides to start from
    let n = randomNumber(0,3);
    let coords = {y: 0, x: 0};
    switch(n) {
        // plane starts on left of screen
        case 0:
            coords.x = 0;
            coords.y = randomNumber(0,149);
            break;
        // plane starts on right of screen 
        case 1:
            coords.x = 100;
            coords.y = randomNumber(0,149);
            break;
        // plane starts on bottom of screen
        case 2:
            coords.x = randomNumber(0,99);
            coords.y = 0;
            break;
        // plane starts on top of screen
        case 3:
            coords.x = randomNumber(0,99);
            coords.y = 149;
            break;
        // if we get here then something is wrong
        default:
            coords.x = -1;
            coords.y = -1;
            break;
        }
        return coords;
    }

    function getHeading(coords) {
        let heading = 0;
        // along left
        if (coords.x <= 50) {
            // top left
            if (coords.y<75) {
                heading = randomNumber(10,90);
            }
            // bottom left
            else {
                heading = randomNumber(200,359);
            }
        } 
        // along right
        else if (coords.x > 51) {
            // top right
            if (coords.y<75) {
                heading = randomNumber(225,270);
            }
            // bottom right
            else {
                heading = randomNumber(270,315);
            }
        }
        // along top
        else if (coords.y === 150) {
            // bottom right
            if (coords.x>50) {
                heading = randomNumber(315,359);
            }
            // bottom left
            else {
                heading = randomNumber(0,45);
            }
        }
        // along bottom
        else if (coords.y === 0){
            // top right
            if (coords.x>50) {
                heading = randomNumber(180,225);
            }
            // top left
            else { 
                heading = randomNumber(135,180);
            }
        }
        return heading;
    }

    function getStatus() {
        let n = randomNumber(0,1);
        switch(n) {
            case 0:
                return 'arriving';
            case 1:
                return 'departing';
            default:
                return 'arriving'
        }
    }

    function generateId() {    
        // sets up rng (note: gen_range is with a range (a,b) not including b)
        let n = randomNumber(0,7);
    
        // selects prefix from available options
        let codes = ["AA", "DL", "SW", "NW", "AM", "NK", "UA", "AS"];
        let id = codes[n];
        
        // generates random id string
        let m = randomNumber(1000,9999);
    
        // concatenates and returns
        id += m.toString();
        return id;
    }
    function generateType() {
        let x = randomNumber(0, 4);
        switch(x) {
            case 0:
                return '737';
            case 1:
                return '747';
            case 2:
                return '777';
            case 3:
                return 'A330';
            case 4:
                return 'Bell222';
            default:
                return '737';
        }
    }

    function getDestination() {
        let destinations = ['PXR', 'AVENT', 'LUF', 'GEENO', 'SMALL', 'EDDNA', 'QUENY', 'ZERLO',
    'LAKEY', 'BELLY', 'VANNZ', 'FZZ', 'CLOSE', 'GATWA', 'IWA', 'VNILA', 'CHD',
'NIMBY', 'HOOPS', 'DUWOP', 'HINEY', 'KUCOO', 'BRNDA', 'LOOSY', 'ALEYS', 'DSERT', 'ANGRY',
'NEELE', 'HENSN', 'BASBL']
        return destinations[randomNumber(0,29)];
    }

    function getRunway() {
        let runways = ['8', '7L', '7R', '25L', '25R', '26'];
        return runways[randomNumber(0,5)];
    }

    export function spawnPlane() {
        let coordinates = startPosition();
        let plane = {
            flightId: generateId(),
            planeType: generateType(),
            climbRate: 42,
            maxAltitude: 43000,
            altitude: randomNumber(1500,4299),
            maxSpeed: 580,
            minSpeed: 160,
            coordinate: coordinates,
            heading: getHeading(coordinates),
            speed: randomNumber(155,599),
            runway: getRunway(),
            destination: getDestination(),
            flightStatus: getStatus(),
        };
        return plane;
    }