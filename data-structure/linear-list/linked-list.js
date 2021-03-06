
/**
 *  单链表查找，只能从头开始找
 *  遍历节点(插入节点在前一个节点和当前节点之间)
 * @param {*} el 
 */
function Node(el) {
    this.element = el;
    this.next = null;
}

function LinkedList() {
    this.length = 0;
    this.head = null;
}

exports.LinkedList = LinkedList;

LinkedList.prototype = {
    append(el) {
        var node = new Node(el),
            current;
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    },
    insert(pos, el) {
        if (pos > -1 && pos <= this.length) {
            var node = new Node(el),
                current = this.head,
                previous = null,
                index = 0;
            if (pos === 0) {
                this.head = node;
                node.next = current;
            } else {
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        } else {
            return false;
        }
    },
    removeAt(pos) {
        if (pos > -1 && pos < length) {
            var current = this.head,
                previous,
                index;

            if (pos === 0) {
                this.head = current.next;
            } else {
                while (index++ < pos) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            this.length--;
            return current.element;
        } else {
            return null;
        }
    },
    remove(el) {
        var index = this.indexOf(el);
        return this.removeAt(index);
    },
    indexOf(el) {
        var current = this.head,
            index = -1;
        while (current) {
            if (el === current.el) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    },
    isEmpty() {
        return this.length === 0;
    },
    size() {
        return this.length;
    },
    toString() {
        var current = this.head,
            string = '';
        while (current) {
            string += current.el;
            current = current.next;
        }
        return string;
    },
    getHead() {
        return this.head;
    },
    showAll() {
        let head = this.getHead();
        while (head) {
            console.log(head);
            head = head.next;
        }
    },
};

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

const list1 = new LinkedList();

list1.append(2);
list1.append(4);
list1.append(6);
list1.append(7);

// list.showAll();

// const listAll = mergeTwoLists(list1, list);
// console.log(listAll);

const l1 = reverseBetween(list1.head, 2,4);
console.log(l1);

// 合并有序链表
function mergeTwoLists(l1, l2) {
    if (l1 == null) {
        return l2;
    } else if (l2 == null) {
        return l1;
    }

    if (l1.val >= l2.val) {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    } else {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
};

// 反转链表
function reverse(head) {
    if (head == null || head.next == null) {
        return head
    }

    let curr = head.next;
    let tmp;
    let current;
    while (curr) {
        tmp = curr.next
        curr.next = current
        current = curr
        curr = tmp
    }

    head.next.next = head;
    head.next = null
    return current;
};

/**
 * 反转链表
 * @param {*} head 
 */
function reverse(head) {
    if (head.next == null) return head;
    const last = reverse(head.next);
    head.next.next = head;
    head.next = null;
    return last;
}

/**
 * 反转链表的第n位
 * @param {*} head 
 * @param {*} n 
 */
var successor = null;
function reverse(head, n) {
    if (n == 1) {
        successor = head.next;
        return head;
    }
    let last = reverse(head.next, n - 1);
    head.next.next = head;
    head.next = successor;
    return last;
}

/**
 * 反转链表的其中一部分
 * @param {*} head 
 * @param {*} m 
 * @param {*} n 
 * @returns 
 */
function reverseBetween(head, m, n) {
    if (m == 1) {
        return reverse(head, n);
    }
    head.next = reverseBetween(head.next, m - 1, n - 1);
    return head;
}