$(function() {
    var buyRows = 20; // number of buy orders shown at coinigy at a time
    var whichBuyRow = 2; // 0-index
    var whichSellRow = 2; // 0-index
    
    var $buyPanel = $("#detachBuyOrder");
    var $buyDesc = $("#buy_desc");
    if ($buyDesc.html() !== null) {
        $buyDesc.css("width", "120px");
        $buyDesc.after('<button type="button" class="btn btn-default" id="quick_buy">Quick Buy</button>');
    }
    
    var $sellPanel = $("#detachSellOrder");
    var $sellDesc = $("#sell_desc");
    if ($sellDesc.html() !== null) {
        $sellDesc.css("width", "120px");
        $sellDesc.after('<button type="button" class="btn btn-default" id="quick_sell">Quick Sell</button>');
    }
    
    $("#quick_buy").click(function() {
        var btcToSpend = $("#buy_box1").val();
        var buyPrice = $("#asks .asks_tr").eq(buyRows - whichBuyRow - 1).attr("data-price");
        $("#buy_box2").val(buyPrice);
        if (btcToSpend && btcToSpend > 0) {
            $("#buy_box1").trigger("keyup");
        } else {
            $("#detachBuyOrder .secondary_trade_balance").click();
        }
    });
    
    $("#quick_sell").click(function() {
        var btcToReceive = $("#sell_box3").val();
        var sellPrice = $("#bids .bids_tr").eq(whichSellRow).attr("data-price");
        $("#sell_box2").val(sellPrice);
        if (btcToReceive && btcToReceive > 0) {
            if ($sellDesc.find(".to_sell").text() === $("#detachSellOrder .primary_trade_balance").text()) {
                $("#detachSellOrder .primary_trade_balance").click();
            } else {
                $("#sell_box3").trigger("keyup");
            }
        } else {
            $("#detachSellOrder .primary_trade_balance").click();
        }
    });
})
