import SpecificClickEvents from "./specificevet";
import MouseEventExitIntent from "./exitintentevent";

/*

-User Exit intent
-On Click Specific area
-After x percent scrolling
-After x seconds of inactivity
-After x seconds

*/
function Events(): { SpecificClickEvents: typeof SpecificClickEvents; MouseEventExitIntent: typeof MouseEventExitIntent; } {
    return {
        SpecificClickEvents,
        MouseEventExitIntent
    };
}

export default Events;