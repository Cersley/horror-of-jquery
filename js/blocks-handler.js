var priceTable = [
  {
    from: 0,
    to: 100,
    discount: 0,
    price: 100
  },
  {
    from: 101,
    to: 500,
    discount: 20,
    price: 80
  },
];

$(document).ready(function(){

  $( "#date1" ).datepicker();
  $( "#date2" ).datepicker();

  function NavTab (parentNavTab, curTab) {
    $(parentNavTab).children().removeClass("active");
    $(curTab).addClass("active");
  }
  function TabShow (parentTab, tab) {
    $(parentTab).children().addClass("none");
    $(tab).removeClass("none");
  }
  function ToggleRow (btnRow, newRow) {
      $(newRow).show();
      $(btnRow).hide();
  }
  function PriceDivision (tab) {
    var price = $(tab + " div").text();
    var percent = $(tab + " input[type='text']").val();
    if(price === "Price") {
      console.log("заполни поле процента");
    } else {
      if($.isNumeric( percent )) {
        var division = price - (price * (percent * 0.01));
        $(tab + " div").text(division);
        $(tab + " input[type='text']").val('');
      } else console.log("введи проценты");
    }
  }


// Default Price

    // Price model
  $("#priceTabs span:first").click(function() {
    NavTab("#priceTabs", "#priceTabs span:first");
    TabShow("#tab", "#tab1");
  });
  $("#priceTabs span:eq(1)").click(function() {
    NavTab("#priceTabs", "#priceTabs span:eq(1)");
    TabShow("#tab", "#tab2");
  });
  $("#priceTabs span:last").click(function() {
    NavTab("#priceTabs", "#priceTabs span:last");
    TabShow("#tab", "#tab3");
  });
  $("#tab1 :button").click(function() {
    var val = $("#tab1 input[type='text']").val();
    if($.isNumeric( val )) {
      $("#discountsTab1 div, #campaignsTab1 div, #vouchersTab1 div").text(val);
      $("#tab1 input[type='text']").val('');
    } else console.log("Write price");
  });

    // Add row
  $("#addRow").click(function() {
    ToggleRow(this, "#newRow");
  });
  $("tfoot .no").click(function() {
    ToggleRow("#newRow", "#addRow");
  });


    // Expiry
  $("#expiryTabs span:first").click(function() {
    NavTab("#expiryTabs", "#expiryTabs span:first");
    TabShow("#expiryTab", "#expiryTab1");
  });
  $("#expiryTabs span:eq(1)").click(function() {
    NavTab("#expiryTabs", "#expiryTabs span:eq(1)");
    TabShow("#expiryTab", "#expiryTab2");
  });
  $("#expiryTabs span:last").click(function() {
    NavTab("#expiryTabs", "#expiryTabs span:last");
    TabShow("#expiryTab", "#expiryTab3");
  });

// Discounts

    // Price model
  $("#discountsPriceTabs span:first").click(function() {
  NavTab("#discountsPriceTabs", "#discountsPriceTabs span:first");
  TabShow("#discountsTab", "#discountsTab1");
  });
  $("#discountsPriceTabs span:eq(1)").click(function() {
  NavTab("#discountsPriceTabs", "#discountsPriceTabs span:eq(1)");
  TabShow("#discountsTab", "#discountsTab2");
  });
  $("#discountsPriceTabs span:last").click(function() {
  NavTab("#discountsPriceTabs", "#discountsPriceTabs span:last");
  TabShow("#discountsTab", "#discountsTab3");
  });

    // Add row
  $("#discountsAddRow").click(function() {
  ToggleRow(this, "#discountsNewRow");
  });
  $("tfoot .no").click(function() {
  ToggleRow("#discountsNewRow", "#discountsAddRow");
  });

    // Expiry
  $("#discountsExpiryTabs span:first").click(function() {
    NavTab("#discountsExpiryTabs", "#discountsExpiryTabs span:first");
    TabShow("#discountsExpiryTab", "#discountsExpiryTab1");
  });
  $("#discountsExpiryTabs span:eq(1)").click(function() {
    NavTab("#discountsExpiryTabs", "#discountsExpiryTabs span:eq(1)");
    TabShow("#discountsExpiryTab", "#discountsExpiryTab2");
  });
  $("#discountsExpiryTabs span:last").click(function() {
    NavTab("#discountsExpiryTabs", "#discountsExpiryTabs span:last");
    TabShow("#discountsExpiryTab", "#discountsExpiryTab3");
  });

  $("#discountsTab1 :button").click(function() {
    PriceDivision("#discountsTab1");
  });


  $("#test").click(function() {
    var val = $("#test option:selected").text();
    console.log(val);
  });


// Compaigns

    // Price model
  $("#campaignsPriceTabs span:first").click(function() {
  NavTab("#campaignsPriceTabs", "#campaignsPriceTabs span:first");
  TabShow("#campaignsTab", "#campaignsTab1");
  });
  $("#campaignsPriceTabs span:eq(1)").click(function() {
  NavTab("#campaignsPriceTabs", "#campaignsPriceTabs span:eq(1)");
  TabShow("#campaignsTab", "#campaignsTab2");
  });
  $("#campaignsPriceTabs span:last").click(function() {
  NavTab("#campaignsPriceTabs", "#campaignsPriceTabs span:last");
  TabShow("#campaignsTab", "#campaignsTab3");
  });

    // Add row
  $("#campaignsAddRow").click(function() {
  ToggleRow(this, "#campaignsNewRow");
  });
  $("tfoot .no").click(function() {
  ToggleRow("#campaignsNewRow", "#campaignsAddRow");
  });

    // Expiry
  $("#campaignsExpiryTabs span:first").click(function() {
    NavTab("#campaignsExpiryTabs", "#campaignsExpiryTabs span:first");
    TabShow("#campaignsExpiryTab", "#campaignsExpiryTab1");
  });
  $("#campaignsExpiryTabs span:eq(1)").click(function() {
    NavTab("#campaignsExpiryTabs", "#campaignsExpiryTabs span:eq(1)");
    TabShow("#campaignsExpiryTab", "#campaignsExpiryTab2");
  });
  $("#campaignsExpiryTabs span:last").click(function() {
    NavTab("#campaignsExpiryTabs", "#campaignsExpiryTabs span:last");
    TabShow("#campaignsExpiryTab", "#campaignsExpiryTab3");
  });

  $("#campaignsTab1 :button").click(function() {
    PriceDivision("#campaignsTab1");
  });


// Vouchers

    // Price model
  $("#vouchersPriceTabs span:first").click(function() {
  NavTab("#vouchersPriceTabs", "#vouchersPriceTabs span:first");
  TabShow("#vouchersTab", "#vouchersTab1");
  });
  $("#vouchersPriceTabs span:eq(1)").click(function() {
  NavTab("#vouchersPriceTabs", "#vouchersPriceTabs span:eq(1)");
  TabShow("#vouchersTab", "#vouchersTab2");
  });
  $("#vouchersPriceTabs span:last").click(function() {
  NavTab("#vouchersPriceTabs", "#vouchersPriceTabs span:last");
  TabShow("#vouchersTab", "#vouchersTab3");
  });

    // Add row
  $("#vouchersAddRow").click(function() {
  ToggleRow(this, "#vouchersNewRow");
  });
  $("tfoot .no").click(function() {
  ToggleRow("#vouchersNewRow", "#vouchersAddRow");
  });

    // Expiry
  $("#vouchersExpiryTabs span:first").click(function() {
    NavTab("#vouchersExpiryTabs", "#vouchersExpiryTabs span:first");
    TabShow("#vouchersExpiryTab", "#vouchersExpiryTab1");
  });
  $("#vouchersExpiryTabs span:eq(1)").click(function() {
    NavTab("#vouchersExpiryTabs", "#vouchersExpiryTabs span:eq(1)");
    TabShow("#vouchersExpiryTab", "#vouchersExpiryTab2");
  });
  $("#vouchersExpiryTabs span:last").click(function() {
    NavTab("#vouchersExpiryTabs", "#vouchersExpiryTabs span:last");
    TabShow("#vouchersExpiryTab", "#vouchersExpiryTab3");
  });

  $("#vouchersVExpiryTabs span:first").click(function() {
    NavTab("#vouchersVExpiryTabs", "#vouchersVExpiryTabs span:first");
    TabShow("#vouchersVExpiryTab", "#vouchersVExpiryTab1");
  });
  $("#vouchersVExpiryTabs span:eq(1)").click(function() {
    NavTab("#vouchersVExpiryTabs", "#vouchersVExpiryTabs span:eq(1)");
    TabShow("#vouchersVExpiryTab", "#vouchersVExpiryTab2");
  });
  $("#vouchersVExpiryTabs span:last").click(function() {
    NavTab("#vouchersVExpiryTabs", "#vouchersVExpiryTabs span:last");
    TabShow("#vouchersVExpiryTab", "#vouchersVExpiryTab3");
  });

  $("#vouchersTab1 :button").click(function() {
    PriceDivision("#vouchersTab1");
  });



///////////////////////////////////////////////////////////////
////////////////STORAGE MANIPULATION////////////////////////////
///////////////////////////////////////////////////////////////



    // Render table
  function RenderTable (typeOfblock, newObj) {
    $.getJSON( "js/table.json", function( data ) {
      data.priceTable.push(newObj);
      $.each(data.priceTable, function(i, item) {
        var $tr = $('<tr>').append(
            $('<td>').text(item.from),
            $('<td>').text(item.to),
            $('<td>').text(item.discount),
            $('<td>').text(item.price)
        )
        .appendTo(typeOfblock + " thead");
      });
    });
  }
  function DeleteTable(typeOfBlock) {
    $(typeOfBlock + ">thead>tr:nth-child(n+2)").empty();
  }
  var check = false;
  function GetVal (val1, val2, val3, val4) {
    var obj = {
      from: null,
      to: null,
      discount: null,
      price: null
    };
    if($(val1).val() === '' || $(val2).val() === '' || $(val3).val() === '' || $(val4).val() === '') {
      check = true;
    } else {
      obj.from = $(val1).val();
      obj.to = $(val2).val();
      obj.discount = $(val3).val();
      obj.price = $(val4).val();
    }
    return obj;
  }
  function ClearInput (val1, val2, val3, val4) {
    $(val1).val('');
    $(val2).val('');
    $(val3).val('');
    $(val4).val('');
  }
  function Dates (option, time, curTime) {
    var r;
    var d = new Date(curTime);
    if(option === "Months") {
      d.setMonth(d.getMonth() + (+time));
    } else if (option === "Days") {
      d.setDate(d.getDate() + (+time));
    } else if (option === "Years") {
      d.setFullYear(d.getFullYear() + (+time));
    }
    r = new Date(d);
    return r;
  }
  function GetProductsList (table, typeOfName, typeOfList) {
    $.getJSON( "js/table.json", function( data ) {
      $.each(data[table], function(i, item) {
        var $tr = $('<tr>').append(
            $('<td>').text(item[typeOfName]),
            $('<td>').text(item.from),
            $('<td>').text(item.to),
            "<td><span class='redact-list'>" +'&#9998;' + "</span>" +
              "<span class='redact-list'>" +'&#10006;' + "</span></td>"
        )
        .appendTo(typeOfList + " tbody");
      });
    });
  }

  // Default Price

  RenderTable("#defaultPrice");

    // Create tr of table
  $("#newRow .ok").click(function() {
    var obj = GetVal("#val1", "#val2", "#val3", "#val4");
    if(check === true) {
      console.log("нужно заполнить");
    } else {
      DeleteTable("#defaultPrice");
      RenderTable("#defaultPrice", obj);
      ToggleRow("#newRow", "#addRow");
      ClearInput("#val1", "#val2", "#val3", "#val4");
    }
    check = false;
  });

  //Discounts

  function RenderListOfClients () {
    $.getJSON( "js/table.json", function( data ) {
      var $select = $("#clientList");
      $.each(data.clientTable, function(i, item) {
        $select.append('<option value=' + i + '>' + item.clientName + '</option>');
      });
    });
  }
  RenderListOfClients();

  $("#clientList").click(function() {
    var val = $("#clientList option:selected").text();
    if (val !== '') {
      $.getJSON( "js/client.json", function( data ) {
        var clientData = data[val];
        DeleteTable("#discountsPrice");
        $.each(clientData, function(i, item) {
          var $tr = $('<tr>').append(
              $('<td>').text(item.from),
              $('<td>').text(item.to),
              $('<td>').text(item.discount),
              $('<td>').text(item.price)
          )
          .appendTo("#discountsPrice thead");
        });
      });
    }
  });

  $("#discountsNewRow .ok").click(function() {
    var obj = GetVal("#discountsVal1", "#discountsVal2", "#discountsVal3", "#discountsVal4");
    if(check === true) {
      console.log("нужно заполнить");
    } else {
      $("#discountsPrice thead").append('<tr>');
      $.each(obj, function(i, item) {
        var $td = $('<td>').append(item);
        $td.appendTo("#discountsPrice thead tr:last");
      });
      ToggleRow("#discountsNewRow", "#discountsAddRow");
      ClearInput("#discountsVal1", "#discountsVal2", "#discountsVal3", "#discountsVal4");
    }
    check = false;
  });

  GetProductsList('clientTable', 'clientName', "#discountsList");

    // New row of Clients
  $("#discountsAddClient").click(function() {
    var clientName = $("#clientList option:selected").text();
    var typeOfDays = $("#discountsExpiryTab2 option:selected").text();
    var time = $("#discountsExpiryTab2 :input").val();
    var date = new Date();
    var curDate = new Date().toJSON().substring(0,10);
    var r;
      if ($("#discountsExpiryTabs span:last").hasClass('active')) {
      r = '&#8734;';
    } else {
      r = Dates(typeOfDays, time, date).toJSON().substring(0,10);
    }
    if (clientName !== '' && time !== '') {
      $("#discountsList tbody").append(
        "<tr>" +
        "<td>" + clientName + "</td>" +
        "<td>" + curDate + "</td>" +
        "<td>" + r + "</td>" +
        "<td><span class='redact-list'>" +'&#9998;' + "</span>" +
          "<span class='redact-list'>" +'&#10006;' + "</span></td>" +
        "</tr>"
      );
      if ($("#discountsExpiryTabs span:last").hasClass('active')) {
        $("#discountsList tbody tr:last td:eq(2)").addClass('inf');
      }
    }
  });


  //Campaigns

  RenderTable("#campaignsPrice");

  $("#campaignsNewRow .ok").click(function() {
    var obj = GetVal("#campaignsVal1", "#campaignsVal2", "#campaignsVal3", "#campaignsVal4");
    if(check === true) {
      console.log("нужно заполнить");
    } else {
      DeleteTable("#campaignsPrice");
      RenderTable("#campaignsPrice", obj);
      ToggleRow("#campaignsNewRow", "#campaignsAddRow");
      ClearInput("#campaignsVal1", "#campaignsVal2", "#campaignsVal3", "#campaignsVal4");
    }
    check = false;
  });
  GetProductsList('campaignsTable', 'campaignName', "#campaignsList");

  $("#campaignsAddClient").click(function() {
    var companyName = $("#compaignNameInput").val();
    var date1 = $("#date1").val();
    var d1 = new Date(date1).toJSON().substring(0,10);
    var date2 = $("#date2").val();
    var d2 = new Date(date2).toJSON().substring(0,10);
    if (date1 < date2 && companyName !== '' && date1 !== '' && date2 !== '') {
      $("#campaignsList tbody").append(
          "<tr>" +
          "<td>" + companyName + "</td>" +
          "<td>" + d1 + "</td>" +
          "<td>" + d2 + "</td>" +
          "<td><span class='redact-list'>" +'&#9998;' + "</span>" +
            "<span class='redact-list'>" +'&#10006;' + "</span></td>" +
          "</tr>"
        );
    } else console.log('Wrong date');
  });

  //Vouchers

  RenderTable("#vouchersPrice");

  $("#vouchersNewRow .ok").click(function() {
    var obj = GetVal("#vouchersVal1", "#vouchersVal2", "#vouchersVal3", "#vouchersVal4");
    if(check === true) {
      console.log("нужно заполнить");
    } else {
      DeleteTable("#vouchersPrice");
      RenderTable("#vouchersPrice", obj);
      ToggleRow("#vouchersNewRow", "#vouchersAddRow");
      ClearInput("#vouchersVal1", "#vouchersVal2", "#vouchersVal3", "#vouchersVal4");
    }
    check = false;
  });
  GetProductsList('vouchersTable', 'voucherName', "#vouchersList");

  // New row of Vouchers
$("#vouchersAddClient").click(function() {
  var typeOfDays = $("#vouchersVExpiryTab2 option:selected").text();
  var time = $("#vouchersVExpiryTab2 :input").val();
  var voucherName = $("#voucherVExpiryInput").val();
  var voucherCode = $("#voucherVExpiryCode").val();
  var date = new Date();
  var r;
  if ($("#vouchersVExpiryTabs span:last").hasClass('active')) {
    r = '&#8734;';
  } else {
    r = Dates(typeOfDays, time, date).toJSON().substring(0,10);
  }
  if (voucherName !== '' && voucherCode !== '') {
    $("#vouchersList tbody").append(
      "<tr>" +
      "<td>" + voucherName + "</td>" +
      "<td>" + voucherCode + "</td>" +
      "<td>" + r + "</td>" +
      "<td><span class='redact-list'>" +'&#9998;' + "</span>" +
        "<span class='redact-list'>" +'&#10006;' + "</span></td>" +
      "</tr>"
    );
    if ($("#vouchersVExpiryTabs span:last").hasClass('active')) {
      $("#vouchersList tbody tr:last td:eq(2)").addClass('inf');
    }
    $("#voucherVExpiryInput").val('');
    $("#voucherVExpiryCode").val('');
  }
});

});
