$(function() {
    var whichBuyRow = 2; // 0-index
    var whichSellRow = 2; // 0-index
    
    var $buyButton = $("#buyForm .loginRequired > .cta > .theButton");
    if ($buyButton) {
        $buyButton.before('<button id="quickBuyBtn" class="theButton" type="button" style="margin-right: 7px;">Quick Buy</button>');
    }
    
    var $sellButton = $("#sellForm .loginRequired > .cta > .theButton");
    if ($sellButton) {
        $sellButton.before('<button id="quickSellBtn" class="theButton" type="button" style="margin-right: 7px;">Quick Sell</button>');
    }
    
    $("#quickBuyBtn").click(function() {
        var btcToSpend = $("#buyTotal").val();
        var buyPrice = $("#asksTableBody tr").eq(whichBuyRow).find("td.orderRate").html();
        $("#buyRate").val(buyPrice);
        if (btcToSpend && btcToSpend > 0) {
            $("#buyTotal").trigger("keyup");
        } else {
            $("#primaryBalance").click();
        }
    });
    
    $("#quickSellBtn").click(function() {
        var sellAmount = $("#sellAmount").val();
        var btcToReceive = $("#sellTotal").val();
        var sellPrice = $("#bidsTableBody tr").eq(whichSellRow).find("td.orderRate").html();
        $("#sellRate").val(sellPrice);
        if (btcToReceive && btcToReceive > 0) {
            if (sellAmount === $("#secondaryBalance").html()) {
                $("#secondaryBalance").click();    
            } else {
                $("#sellTotal").trigger("keyup");    
            }
        } else {
            $("#secondaryBalance").click();
        }
    });
})
