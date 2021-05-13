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
        $("#checkoutdiv").show()
    }
    let holderHTML = ''
    let total = 0
    let itemCnt = 0
    $.each(shopcart, function(index, value) {
        console.log('this is value: ',value)
        let stotal = value.qty * value.price
        total += stotal
        itemCnt += parseInt(value.qty)
        holderHTML += '<tr><td>'+ value.qty + '</td><td>#'+ value.id+''+value.name+'('+value.s+')</td><td>'+formatMoney(value.price)+'</td><td class="text-right">'+formatMoney(stotal)+'</td></tr>'
    })
    holderHTML += '<tr><td colspan="3" class="text-right">Total</td><td class="text-right">'+ formatMoney(total) + '</td></tr>'
    $("#output").html(holderHTML)
    $(".total").html(formatMoney(total))
    $(".items").html(itemCnt)
}
function formatMoney(money) {
    return '$' + (money/100).toFixed(2)
}
})