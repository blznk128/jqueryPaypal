let shopcart =[]
$(document).ready(function() {
    outputCart()
    $("#output").on("change keyup",".dynqua", function() {
        let iteminfo = $(this.dataset)[0]
        let itemInCart = false
        console.log(shopcart)
        let qty = $(this).val()
        if (qty < 0) {
            qty = 0
            $(this).val(0)
        }
        $.each(shopcart, function(index, value){
            if(value.id == iteminfo.id){
                shopcart[index].qty=qty
                itemInCart = true
            }
        })
        
        sessionStorage["sca"] = JSON.stringify(shopcart)
        outputCart()
        
        console.log(sessionStorage["sca"])
    })


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
            let a = (index + 1)
            total += stotal
            itemCnt += parseInt(value.qty)
            holderHTML += '<tr><td><input size="5"  type="number" class="dynqua" name="quantity_' + a + '" value="' + value.qty + '" data-id="' + value.id + 
            '"></td><td><input type="hidden" name="item_name_' + a + '" value="' + value.name + ' ' + value.s + '">' + value.name + 
            '(' + value.s + ')</td><td><input type="hidden" name="amount_' + a + '" value="' + formatMoney(value.price) + '"> $' + formatMoney(value.price) + 
            ' </td><td class="text-xs-right"> ' + formatMoney(stotal) + '</td></tr>'
        })
        holderHTML += '<tr><td colspan="3" class="text-right">Total</td><td class="text-right">'+ formatMoney(total) + '</td></tr>'
        $("#output").html(holderHTML)
        
    }
    function formatMoney(money) {
        return (money/100).toFixed(2)
    }
})