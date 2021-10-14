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

    size(){continue}
    clear(){}
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
stack.push('banana')
stack.peek()