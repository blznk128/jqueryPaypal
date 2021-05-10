$(document).ready(function() {
    let shopcart = []
    $('.productItem').click(function(e) {
        e.preventDefault();
        
        let itemInfo = $(this.dataset)[0]
        itemInfo.qty = 1;
        let itemInCart = false
        $.each(shopcart, function(index, value){
            // console.log(index + " " + value.id)
            if(value.id == itemInfo.id){
                value.qty = parseInt(value.qty) + parseInt(itemInfo.qty)
                itemInCart = true
            }
        })
        if(!itemInCart){
            shopcart.push(itemInfo)
        }
        
        console.log(shopcart)
    })
})