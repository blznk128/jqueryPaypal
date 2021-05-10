let shopcart = []
$(document).ready(function() {
    if(sessionStorage["sca"]!= null) {
        shopcart = JSON.parse(sessionStorage["sca"].toString())
    }
    outputCart()
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
        sessionStorage["sca"] = JSON.stringify(shopcart)
        outputCart()
        
    })
})

function outputCart() {
    console.log(sessionStorage["sca"])
}