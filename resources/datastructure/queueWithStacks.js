class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }

    push(element) {
        this.items[this.count] = element
        //console.log(`stack[${this.count}]: ${element} Added`)
        this.count += 1
        return this.count - 1
    }

    pop() {
        if(this.count==0) return undefined
        let toDelete = this.items[this.count - 1]
        this.count -= 1
        //console.log(`stack[${this.count}]: ${toDelete} removed`)
        return toDelete
    }

    peek() {
        console.log(`stack[peek]: ${this.items[this.count-1]}`)
        return this.items[this.count-1]
    }

    isEmpty() {
        console.log(this.count == 0)
        return this.count == 0
    }

    size() {
        //console.log(`Stack Size: ${this.count}`)
        return this.count
    }

    print() {
        console.log(`${this.items.toString()}`)
        return this.items.toString()
    }

    clear() {
        this.items = []
        this.count = 0
        console.log('Reset Stack complete')
        return this.items
    }
}

