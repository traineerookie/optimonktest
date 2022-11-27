import Events from "./trigger";

const {SpecificClickEvents,MouseEventExitIntent}= Events()

// Pointer events works both in mobile and desktop.
export default document.addEventListener('DOMContentLoaded',(_e:any)=>{
    // @ts-ignore
    const button = new SpecificClickEvents('#btn')


    let mxi = new MouseEventExitIntent()
    
    console.log(mxi.watch);
    
    
})
