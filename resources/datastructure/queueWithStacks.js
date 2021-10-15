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

class QueueWithStacks {
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(value){
        this.stack1.push(value)
        return true
    }
    dequeue(){
        while (this.stack1.length>0) {
            this.stack2.push(this.stack1.pop())
        }

        const toDequeue = this.stack2.pop()

        while (this.stack2.length>0){
            this.stack1.push(this.stack2.pop())
        }
        return toDequeue
    }
    print(){
        console.log(`${this.stack1.toString()}`)
    }
}

const queueStacks = new QueueWithStacks

queueStacks.enqueue(1)
queueStacks.enqueue(2)
queueStacks.enqueue(3)
queueStacks.print()

queueStacks.dequeue()
queueStacks.dequeue()
queueStacks.print()