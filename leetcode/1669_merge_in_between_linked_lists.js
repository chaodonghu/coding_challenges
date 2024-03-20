var mergeInBetween = function (list1, a, b, list2) {
    let first = list1;
    
    // start our first pointer at the node before the first node to be removed
    let i = 0;

    // while our pointer reaches the node before the first node to be removed
    while (i < a - 1) {
        first = first.next;
        i++;
    }

    // let our second head be at the first
    let second = first;

    // our pointer should reach the second node index to be removed
    while (i <= b) {
        first = first.next;
        i++;
    }

    // connect the second next to list2
    second.next = list2;

    // move our list2 pointer to the end of list2
    while (list2.next) {
        list2 = list2.next;
    }

    // our list 2 should be connected to the end of the first list, which pointer should not include the nodes a to b
    list2.next = first;
    return list1;
};

             //  // //  //FIRST // SECOND
let list1 = [10, 1, 13, 6, 9, 5];
let list2 = [1000000, 1000001, 1000002];
let a = 3;
let b = 4;