class Queue {
    constructor() {
        this.items = []
        this.count = 0
    }

    enqueue(element){
        this.items[this.count] = element
        console.log(`queue[${this.count}]: ${element} enqueued`)
        this.count++
        return this.count-1
    }

    dequeue(){
        if(this.count===0) return undefined
        let toDequeue = this.items[0]
        this.count--
        this.items.shift()
        console.log(`queue[0]: ${toDequeue} has dequeued`)
        return toDequeue
    }

    front(){continue}
    isEmpty(){continue}
    size(){continue}
    print(){continue}
    clear(){continue}
}

const queue = new Queue()

queue.enqueue('java')
queue.enqueue('Script')
queue.dequeue()