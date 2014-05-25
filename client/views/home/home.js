self.kb = 100; // 10 MB 10485760

Template.home.rendered = function() {
  $('#size').css({
    width: Math.min(parseInt($(document).width()-50), 500) + "px"
  }).slider({
    formater: function(value) {
      value = value * 1024 * 1024;
      self.kb = value;
      $("#sizeOutput").text(filesize(value, {base: 2, round: 0}));
      return 'Zip size: ' + filesize(value, {base: 2, round: 0});
    }
  });
};

var generateRandomString = function(size) {
  var buffer = "";
  do {
    buffer += (Math.random() + 1).toString(2).replace(".", "").substr(7);
  }
  while(buffer.length < size);
  buffer.substring(0, size);
  return buffer;
}

Template.home.events({
  'click #save': function() {
    $("#progressContainer").animate({
      opacity: 1
    }, "fast");
    $("#progress").html("Generating random data...");
    var modifier = 976;
    var zip = new ZipZap();
    var files = Math.ceil(self.kb / 1024 / 100);
    var outstanding = self.kb / 1024;
    var randomString = generateRandomString(Math.min(100, outstanding)*modifier);
    var i=1;
    var lastStep = 0;
    var increase = function() {
      zip.file('random-' + i + '.txt', randomString.substring(0, Math.min(100*modifier, outstanding*modifier)));
      outstanding -= Math.min(100, outstanding);
      var nextStep = 100/files*i;
      if(nextStep - lastStep >= 20) {
        $("#progress").css({
          width: nextStep + "%"
        });
        lastStep = nextStep;
      }
      i++;
      if(i<=files) {
        if(lastStep == nextStep) {
          window.setTimeout(increase, 300);
        }
        else {
          increase();
        }
      }
      else {
        $("#progress").css({
          width: "100%"
        }).html("Zipping...");
        window.setTimeout(function() {
          zip.saveAs("demo.zip", function() {
            delete zip; // free mem
            $("#progressContainer").animate({
              opacity: 0
            }, "fast", function() {
              $("#progress").css({
                width: 0
              });
            });
          });
        }, 500);
      }
    }
    increase();
  }
});
