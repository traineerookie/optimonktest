export default class MouseEventExitIntent implements IFMouseEventExitIntent{
    watch: boolean=false;
    constructor(){
        this.watchMouseCursorOut()
        this.watchMouseCursorIn()
    }

    watchMouseCursorOut(){
            document.addEventListener('pointerout',(_e:PointerEvent)=>{
                console.log('out');
                this.updatAlert(true);
            })
    }

    watchMouseCursorIn(){
            document.addEventListener('pointermove',(_e:PointerEvent)=>{
                console.log('in');
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