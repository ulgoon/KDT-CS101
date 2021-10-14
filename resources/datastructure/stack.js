class Stack {
    constructor() {
        this.items = []
        this.count = 0
    }

    push(element){
        this.items[this.count] = element
        console.log(`stack[${this.count}]: ${element} Added`)
        this.count++
        return this.count-1
    } // someStack.push('simpsons')

    pop(){
        if(this.count===0) return undefined

        let toRemove = this.items[this.count - 1]
        this.count--
        console.log(`stack[${this.count}]: ${toRemove} removed`)
        return toRemove
    } // someStack.pop()

    peek(){
        console.log(`stack[peek> ${this.count-1}]: ${this.items[this.count-1]}`)
        return this.items[this.count-1]
    }

    isEmpty(){
        console.log(this.count===0)
        return this.count===0
    } // return true or false

    size(){
        console.log(`Stack size: ${this.count}`)
        return this.count
    }

    print(){
        console.log(`${this.items.toString()}`)
        return this.items.toString()
    }

    clear(){
        //0. this.items = []
        //1. this.items.length = 0
        this.items.splice(0,this.items.length)
        this.count = 0
        console.log('Reset Stack complete')
        return this.items
    } // initialize
}

const stack = new Stack()

stack.isEmpty()
stack.push('apple')
stack.push('banana')
stack.push('coconut')

stack.pop()
stack.pop()

stack.isEmpty()
stack.peek()
stack.push('bike')
stack.peek()

stack.size()
stack.print()

stack.clear()
stack.size()
stack.print()