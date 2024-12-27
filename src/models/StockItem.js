export const CATEGORIES = [
    'jogos',
    'livros',
    'Brinquedos',
    'Acessórios'
]
export default class StockItem {

    constructor({ name, description, quantity, price, category }) {

        this.id = Math.floor(Math.random() * 1000000)//simular um id 
        this.name = name
        this.description = description
        this.quantity = +quantity // esse + na frente é para converter para number !
        this.price = +price
        this.category = category

        this.createdAt = new Date()
        this.updatedAt = new Date()

        this.#validate()

    }

    #validate() {
        const validName = typeof this.name === 'string'
        const validDescription = typeof this.description === 'string'
        const validQuantity = typeof this.quantity === 'number' && Number.isInteger(this.quantity)
        const validPrice = typeof this.price === 'number'
        const validCategory = CATEGORIES.includes(this.category)

        if (!(validName && validDescription && validQuantity && validPrice && validCategory)) {
            throw new Error('Invalid Item!!')
        }
    }
}