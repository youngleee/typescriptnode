export interface Item {
    id: string,
    item: string,
    checked: boolean;
    /* they're private so I need to create getters and setters*/
}

export default class ListItem implements Item {

    constructor(
        private _id: string = '',
        private _item: string = '',
        private _checked: boolean = false,
        // the underscore shows that the variable is private
    ) {}

    get id(): string {
        return this._id
    }
    set id(id: string) {
        this._id = id
    } 
    get item(): string {
        return this._item
    }
    set item(item: string) {
        this._item = item
    }
    get checked(): boolean {
        return this.checked
    }
    set checked(checked: boolean){
        this._checked = checked
    }
}