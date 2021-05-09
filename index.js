$(document).ready(function() {
    let shopcart = []
    $('.productItem').click(function(e) {
        e.preventDefault();
        
        let itemInfo = $(this.dataset)[0]
        itemInfo.qty = 1;
        shopcart.push(itemInfo)
        console.log(shopcart)
    })
})