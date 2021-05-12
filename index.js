let shopcart = []
$(document).ready(function() {
    
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


function outputCart() {
    if(sessionStorage["sca"]!= null) {
        shopcart = JSON.parse(sessionStorage["sca"].toString())
        console.log(sessionStorage["sca"])
    }
    let holderHTML = ''
    let total = 0
    $.each(shopcart, function(index, value) {
        console.log(value)
        let stotal = value.qty * value.price
        total += stotal
        holderHTML += '<div>Item '+ value.name + '('+value.s+')Qty ' + value.qty + 'Price' + formatMoney(value.price) +  'ID('+value.id+') subtotal = ' + formatMoney(stotal) + '</div>'
    })
    holderHTML += '<div>'+ formatMoney(total) + '</div>'
    $("#output").html(holderHTML)
}
function formatMoney(money) {
    return '$' + (money/100).toFixed(2)
}
})