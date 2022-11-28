import Events from "../trigger";

const {SpecificClickEvents,MouseEventExitIntent,ScrollEvent,InSecondEvent}= Events()
export default class Rules implements IFRules{
    data:{
        id:number,
        url:string,
        events:{
            id:number,
            trigger:string,
            rules:{
                type:string,
                activity:string
            }
        }[],
        final:string
    };
    instance:object;
    constructor(data:{
        id:number,
        url:string,
        events:{
            id:number,
            trigger:string,
            rules:{
                type:string,
                activity:string
            }
        }[],
        final:string
    },instance:object){
        this.instance = instance
        this.data = data;
    }

    validateRules(){
       if(this.data.id){                        
        this.data.events.map((e)=>{
            if (e.trigger==='exit-intent') {
                console.log('exit-intent');
                new MouseEventExitIntent()
            }
            if (e.trigger==='selector') {
                console.log('selector');
                new SpecificClickEvents(e.rules.activity)
            }
            if (e.trigger==='scroll-event') {
                new ScrollEvent(20)
            }
            if (e.trigger==='inseconds-event') {
                new InSecondEvent(2)
            }
        })
       }
    }
} 


export interface IFRules{
    data?:{
        id:number,
        url:string,
        events:{
            id:number,
            trigger:string,
            rules:{
                type:string,
                activity:string
            }
        }[],
        final:string
    },
    instance:object
}