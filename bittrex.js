window.onload = function() {
    var whichBuyRow = 2; // 0-index
    var whichSellRow = 2; // 0-index
    
    var $buyButton = $("#form_Buy button[type='submit']");
    if ($buyButton) {
        $buyButton.before('<button id="quick_buy" type="button" class="btn btn-default center-block" style="width:200px; margin-top:10px;">Quick Fill</button>');
    }
    
    var $sellButton = $("#form_Sell button[type='submit']");
    if ($sellButton) {
        $sellButton.before('<button id="quick_sell" type="button" class="btn btn-default center-block" style="width:200px; margin-top:10px;">Quick Fill</button>');
    }
    
    $("#quick_buy").click(function() {
        var $totalBtcInput = $("#form_Buy input[name='total_Buy']");
        var totalBtc = $totalBtcInput.val();
        var buyPrice = $("#sellOrdersTable > tbody > tr").eq(whichBuyRow).find("td").eq(1).find("div").html();
        
        var $buyPriceInput = $("#form_Buy input[name='price_Buy']");
        $buyPriceInput.val(buyPrice);
        $buyPriceInput.trigger("change");
        var $maxButton = $("#form_Buy input[name='quantity_Buy']").closest("div.input-group").find("span > button");
        
        if (totalBtc && totalBtc > 0) {
            if (totalBtc === $("#availableBaseCurrency").html()) {
                $maxButton.click();
                $maxButton.click();    
            } else {
                $totalBtcInput.val(totalBtc);
                $totalBtcInput.trigger("change");
            }
        } else {
            $maxButton.click();
            $maxButton.click();
        }
    });
    
    $("#quick_sell").click(function() {
        var $totalBtcInput = $("#form_Sell input[name='total_Sell']");
        var totalBtc = $totalBtcInput.val();
        var sellPrice = $("#buyOrdersTable > tbody > tr").eq(whichSellRow).find("td").eq(4).find("div").html();
    
        var $sellPriceInput = $("#form_Sell input[name='price_Sell']");
        $sellPriceInput.val(sellPrice);
        $sellPriceInput.trigger("change");
        var $maxButton = $("#form_Sell input[name='quantity_Sell']").closest("div.input-group").find("span > button");
    
        if (totalBtc && totalBtc > 0) {
            if ($("#form_Sell input[name='quantity_Sell']").val() !== $("#availableMarketCurrency").html()) {
                $totalBtcInput.val(totalBtc);
                $totalBtcInput.trigger("change");
            }
        } else {
            $maxButton.click();
            $maxButton.click();
        }
    });
}
