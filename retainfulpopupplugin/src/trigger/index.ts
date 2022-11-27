import SpecificClickEvents from "./specificevet";
import MouseEventExitIntent from "./exitintentevent";
import ScrollEvent from "./scrollevent"; 
import InSecondEvent from './inseconds'

/*

-User Exit intent - done
-On Click Specific area - done
-After x percent scrolling 
-After x seconds of inactivity
-After x seconds

*/
function Events(): { SpecificClickEvents: typeof SpecificClickEvents; MouseEventExitIntent: typeof MouseEventExitIntent; ScrollEvent: typeof ScrollEvent; InSecondEvent:typeof InSecondEvent} {
    return {
        SpecificClickEvents,
        MouseEventExitIntent,
        ScrollEvent,
        InSecondEvent
    };
}

export default Events;