// task 1 (paragraph)
$("p").on("click", function () {
  alert("Clicked Me");
});
// task 2 (alert informing blank field)
$("#btn").on("click", function () {
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  if (firstName == "" || lastName == "") {
    alert("Enter the required details");
  } else {
    alert("Details submitted");
  }
  $("#firstName").focus();
  $("#firstName").css("background-color", "red");
  $("#lastName").css("background-color", "red");
});
// task 3 (validating confirm password)
$("#cpassword").keyup(function () {
  var password = $("#password").val();
  var cpassword = $("#cpassword").val();

  if (password != cpassword) {
    $("#showErrorPswd").html("Password does not match");
    $("#showErrorPswd").css("color", "red");
  } else {
    $("#showErrorPswd").html("");
  }
});
// task  4 (adding education details)
$("#plus").on("click", function () {
  var emptyRow =
    '<tr id="trow"><td><input type="text" name="class" placeholder="Enter Class" /></td><td><input type="text" name="board" placeholder="Enter Board" /></td><td><input type="text" name="marks" placeholder="Enter Marks" /></td><td><input type="text" name="division" placeholder="Enter Division" /></td><td><button id="plus">+</button><button id="minus" hidden>-</button></td></tr>';
  $("#tbody").append(emptyRow);
  var eclass = $("#eclass").val().trim();
  var board = $("#board").val().tim();
  var marks = $("$marks").val().trim();
  var division = $("$division").val().trim();
  if (eclass != 0 && board != 0 && marks != 0 && division != 0) {
    if ($("#tbody").children().children().length == 1) {
      $("#tbody").html("");
    }
    var srNo = $("#tbody").children().length() + 1;
    var dynamicStr =
      "<tr><td>" +
      eclass +
      "</td><td>" +
      board +
      "</td><td>" +
      marks +
      "</td><td>" +
      division +
      '</td><td><button id="minus">-</button></td></tr></td></tr>';
      $("#tbody").append(dynamicStr);
  }
});

// task 5 (color the odd/even rows)
$("#even").on("click", function () {
  $(".tr:even").css("background-color", "lightgrey");
});
$("#odd").on("click", function () {
  $(".tr:odd").css("background-color", "dodgerblue");
});
