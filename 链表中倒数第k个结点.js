//head:输入的链表 k:倒数第k个节点
//两个指针 遍历一遍
function FindKthToTail(head, k){
    if(head==null||k<=0){
        return null;
    }
    var prev=head;
    var tail=head;
    for(let i=0;i<k-1;i++){
        if(prev.next!=null){
            prev=prev.next;
        }else{
            return null;
        }
    }
    while(prev.next!=null){
        tail=tail.next;
        prev=prev.next;
    }
    return tail;

}