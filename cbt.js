$(function() {
    var $sellPanel = $("#detachSellOrder");
    var $sellDesc = $("#sell_desc");
    if ($sellDesc.html() !== null) {
        $sellDesc.css("width", "120px");
        $sellDesc.after('<button type="button" class="btn btn-default" id="auto_sell">Auto Sell</button>');
    }
    
    $("#auto_sell").click(function() {
        
    });
    
    function sell(price, amount) {
        $("#sell_box2").val(price);
        $("#sell_box3").val(amount).trigger("keyup");
        $("#sell_now").trigger("click");
        $("#btnConfirmYes").trigger("click");
    }
})
