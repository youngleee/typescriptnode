import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './templates/ListTemplate'

const initApp = (): void => {
    const fullList = FullList.instance
    const template = ListTemplate.instance

    const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement
    itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
        event.preventDefault()

        const input = document.getElementById("newItem") as HTMLInputElement
        const newEntryText: string = input.value.trim() //trim away white space
        if(!newEntryText.length) return //if there's not new entry text after white space trim, return

        const itemId: number = fullList.list.length
        ? parseInt(fullList.list[fullList.list.length - 1].id) //last element of list
        : 1 //make the item number 1 if item doesn't exist
        
        const newItem = new ListItem(itemId.toString(), newEntryText)

        fullList.addItem(newItem) // add item

        template.render(fullList) // render list after adding item
    })

    const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement

    clearItems.addEventListener('click', (): void => {
        fullList.clearList()
        template.clear()
    })

    fullList.load()
    template.render(fullList)

}

document.addEventListener("DOMContentLoaded", initApp)

// finished!!!