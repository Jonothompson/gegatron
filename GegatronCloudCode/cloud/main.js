
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("receiveSumoPaint", function(request, response) {
  var base64 = "V29ya2luZyBhdCBQYXJzZSBpcyBncmVhdCE=";
  var file = new Parse.File("sumo-photo.png", { base64: base64 });
  
  var fileUploadControl = $("")[0];
  if (fileUploadControl.files.length > 0) {
      var file = fileUploadControl.files[0];
      var name = "sumo-photo.png";

  var parseFile = new Parse.File(name, file);
  }
  
  response.success("Hello world!");
});
