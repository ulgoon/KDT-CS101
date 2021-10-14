class QueueElement {
    constructor(element, priority){
        this.element = element
        this.priority = priority
    }
} // {'element':1, 'priority':2}

class PriorityQueue {
    constructor() {
        this.items = []
        this.count = 0
    }

    enqueue(element,priority){
        // hint1: create QueueElement instance
        // hint2: low number will get higher priority
        const qElement = new QueueElement(element, priority)
        let isEnqueued = false

        for(let i=0;i<this.items.length;i++){
            if(this.items[i].priority>qElement.priority){
                this.items.splice(i,0,qElement)
                isEnqueued = true
                console.log(`pQueue[${i}]: ${element} enqueued in front of ${this.items[i+1].element}`)
                break
            }
        }
        if (!isEnqueued){
            this.items[this.count] = qElement
            console.log(`queue[${this.count}]: ${element} enqueued`)
        }
        this.count++
        return this.count-1
    }

    dequeue(){
        if(this.count===0) return undefined
        let toDequeue = this.items[0].element
        this.count--
        this.items.shift()
        console.log(`queue[0]: ${toDequeue} has dequeued`)
        return toDequeue
    }

    front(){
        console.log(`queue[front]: ${this.items[0].element}`)
        return this.items[0].element
    }

    isEmpty(){
        let result = this.count===0
        console.log(result)
        return result
    }

    size(){
        console.log(`queue size: ${this.count}`)
        return this.count
    }
    print(){
        for (const item of this.items){
            console.log(item.element, item.priority)
        }
        return undefined
    }
    clear(){
        this.items.splice(0,this.items.length)
        this.count = 0
        console.log('Reset queue complete')
        return this.items
    }
}

const pQueue = new PriorityQueue()
pQueue.enqueue(1,3) 
pQueue.enqueue(2,4) 
pQueue.enqueue(3,2)
pQueue.print()

pQueue.dequeue()
pQueue.dequeue()
pQueue.print()