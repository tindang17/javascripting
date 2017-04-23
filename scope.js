var a = 1, var b = 2, var c = 3;
(function firstFunction() {
  var b = 5, var c = 6;
  (function secondFunction() {
    var b = 8;
    (function thirdFunction() {
      var a = 7; c = 9;
      (function fourthFunction() {
        var a = 1, c = 8;
      });
    });
  });
});