var list = [];
list.length=20000;
list.fill('a');

var nextListItem = function() {
    var item = list.pop();
    console.log(item);
    if (item) {
        // process the list item...
        //nextListItem();
        setTimeout( nextListItem, 0);
    }
};

nextListItem();