$(document).ready(function() {
    outputCart()
    function outputCart() {
        if(sessionStorage["sca"]!= null) {
            shopcart = JSON.parse(sessionStorage["sca"].toString())
        }
        let holderHTML = ''
        let total = 0
        let itemCnt = 0
        $.each(shopcart, function(index, value) {
            console.log(index)
            let stotal = value.qty * value.price
            total += stotal
            itemCnt += parseInt(value.qty)
            holderHTML += '<tr><td><input type="hidden" name="quantity_1" value="'+ value.qty + '"></td><td>#'+ value.id+''+value.name+'('+value.s+')</td><td>'+formatMoney(value.price)+'</td><td class="text-right">'+formatMoney(stotal)+'</td></tr>'
        })
        holderHTML += '<tr><td colspan="3" class="text-right">Total</td><td class="text-right">'+ formatMoney(total) + '</td></tr>'
        $("#output").html(holderHTML)
        
    }
    function formatMoney(money) {
        return '$' + (money/100).toFixed(2)
    }
})