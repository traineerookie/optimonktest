export default class ButtonEvents implements IFButtonEvents{
    nodeName: string
    constructor(nodeName:string){
        this.nodeName=nodeName
    }
}

export interface IFButtonEvents{
    nodeName:string
}