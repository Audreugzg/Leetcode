// Defined for signly-linked list
function ListNode(val,next){
  this.val = (val=== undefined ? 0:val);
  this.next = (next === undefined ? null:next);
}

function listToArray(linkedlist){
   let arr = [linkedlist.val];
   while(linkedlist.next!== null){
    linkedlist = linkedlist.next;
    arr.push(linkedlist.val);
   }
   return arr;
}

var addTwoNumbers= function(l1,l2){
  let number1= BigInt(listToArray(l1).reverse().join(''));
  let number2= BigInt(listToArray(l2).reverse().join(''));
  let l3string = (number1+number2).toString();
  let node;
  for(let i = 0; i < l3string.length; i++){
      node = new ListNode(parseInt(l3string[i]),node);
  }
  return node;
}