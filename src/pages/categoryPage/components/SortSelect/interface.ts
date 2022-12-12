export interface SelectInterface {
    options: string[]
    selectedOption: string
    placeholder: string
    callback: (option:string) => void
}