import SpecificClickEvents from "./specificevet";
import MouseEventExitIntent from "./exitintentevent";
import ScrollEvent from "./scrollevent"; 

/*

-User Exit intent - done
-On Click Specific area - done
-After x percent scrolling 
-After x seconds of inactivity
-After x seconds

*/
function Events(): { SpecificClickEvents: typeof SpecificClickEvents; MouseEventExitIntent: typeof MouseEventExitIntent; ScrollEvent: typeof ScrollEvent; } {
    return {
        SpecificClickEvents,
        MouseEventExitIntent,
        ScrollEvent
    };
}

export default Events;