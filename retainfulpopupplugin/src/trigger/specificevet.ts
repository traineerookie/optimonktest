export default class SpecificClickEvents implements IFSpecificClickEvents{
    selectorClicks!: { name?: string; time?: number; };
    constructor(cssselector:string){
        this.clickEvent(cssselector)
        this.selectorClicks={name:'',time:0}
    }

    clickEvent(cssselector:string):void{   
        let element:Partial<ElementType>={}; 

       switch (this.checkSelector(cssselector)) {
        case cssselector.startsWith('.'):
            element.type='Collection'
            element.nodeElement = document.getElementsByClassName(cssselector.replace('.',''))
            break;
        case cssselector.startsWith('#'):
            element.type='Element'
            element.nodeElement  = document.getElementById(cssselector.replace('#',''))!
            break;
        default:
            element.type='Collection'
            element.nodeElement  = document.getElementsByTagName(cssselector)!
            break;
       }
        if (this.checkSelector(cssselector)) {            
            if (element.type==='Collection') {
                Array.from(element.nodeElement!).map((e)=>{
                    this.eventListener(e as HTMLElement)
                })
            }else if(element.type==='Element'){
                this.eventListener(element.nodeElement as HTMLElement)
            }  
        }
    }

    eventListener(e:HTMLElement){
        e.addEventListener('pointerdown',(_e:PointerEvent)=>{
                    this.selectorClicks.name=e.nodeName  
                    ++this.selectorClicks.time!;
                    let modal = document.getElementById('retainful-popup')
                    modal!.style.display='block'
                    console.log(this.selectorClicks);
        }) 
    }

    checkSelector(checkSelector:string){
        return document.querySelectorAll(checkSelector).length>0
    }
}

export interface IFSpecificClickEvents{
    selectorClicks:{name?:string,times?:number},
   clickEvent:Function
}

type HTMLCollectionOfType={
    type:'Collection',
    nodeElement:HTMLCollectionOf<HTMLElement|Element>
}

type SpecificElementType={
    type:'Element',
    nodeElement:HTMLElement
}

type ElementType=HTMLCollectionOfType|SpecificElementType

