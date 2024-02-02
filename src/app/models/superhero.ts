export class SuperHero {
    id?: number
    name?: string
    alterEgo?: string
    superPower?: string

    constructor(id?: number, name?: string, alterEgo?: string, superPower?: string) {
        this.id = id
        this.name = name
        this.alterEgo = alterEgo
        this.superPower = superPower
    }
}