import FullList from "../model/FullList"

interface DOMList {
    ul: HTMLUListElement, // unordered list element
    clear(): void,
    render(fullList: FullList): void,
}
