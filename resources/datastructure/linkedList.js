class Node {
    constructor(data, next=null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    insertFirst(data) {
        this.head = new Node(data, this.head)
        this.size++
        console.log(`LL: ${data} inserted first`)
    }

    insertLast(data) {
        const NewNode = new Node(data)
        let current

        if(!this.head){
            this.head = NewNode
            console.log(`LL: ${data} inserted first`)
        } else {
            current = this.head

            while (current.next) {
                current = current.next
            }

            current.next = NewNode
            console.log(`LL: ${data} inserted last`)
        }
        this.size++
    }

    insertAt(data, index){
        if (index>0 && index>this.size){
            return false
        }

        if (index===0){
            this.insertFirst(data)
            return true
        }

        const NewNode = new Node(data)
        let curr, prev

        curr = this.head
        let count = 0

        while(count<index){
            prev = curr
            count++
            curr = curr.next
        }

        NewNode.next = curr
        prev.next = NewNode
        console.log(`LL: new Node ${data} inserted in front of ${NewNode.next.data}`)
        this.size++
    }
}

const LList = new LinkedList()
LList.insertFirst(11)
LList.insertLast(12)
LList.insertLast(13)
LList.insertLast(14)

LList.insertAt(15,2)
LList.insertAt(16,2)