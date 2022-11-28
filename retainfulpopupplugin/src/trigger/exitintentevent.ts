export default class MouseEventExitIntent implements IFMouseEventExitIntent{
    watch: boolean=false;
    constructor(){
        this.watchMouseCursorOut()
        this.watchMouseCursorIn()
    }

    watchMouseCursorOut(){
            document.addEventListener('pointerout',(_e:PointerEvent)=>{
               let modal = document.getElementById('retainful-popup')
               console.log('out');
               
               modal!.style.display='block'
                this.updatAlert(true);
            })
    }

    watchMouseCursorIn(){
            document.addEventListener('pointermove',(_e:PointerEvent)=>{
                console.log('in');
                let modal = document.getElementById('retainful-popup')
                modal!.style.display='none'
                this.updatAlert(false);
            })
    }

    updatAlert(val:boolean){
        this.watch=val
    }
}


export interface IFMouseEventExitIntent{
    watch:boolean
}