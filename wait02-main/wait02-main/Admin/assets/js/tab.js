// file Upload starts
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(".upload_cover .image-upload-wrap").hide();

      $(".upload_cover .file-upload-image").attr("src", e.target.result);
      $(".upload_cover .file-upload-content").show();
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUpload();
  }
}

function removeUpload() {
  $(".upload_cover .file-upload-input").replaceWith(
    $(".upload_cover .file-upload-input").clone()
  );
  $(".upload_cover .file-upload-content").hide();
  $(".upload_cover .image-upload-wrap").show();
}
$(".upload_cover .image-upload-wrap").bind("dragover", function () {
  $(".upload_cover .image-upload-wrap").addClass("image-dropping");
});
$(".upload_cover .image-upload-wrap").bind("dragleave", function () {
  $(".upload_cover .image-upload-wrap").removeClass("image-dropping");
});
// file Upload ends

// file Upload starts
function readURLTwo(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $(".upload_prof .image-upload-wrap").hide();

      $(".upload_prof .file-upload-image").attr("src", e.target.result);
      $(".upload_prof .file-upload-content").show();
    };

    reader.readAsDataURL(input.files[0]);
  } else {
    removeUploadTwo();
  }
}

function removeUploadTwo() {
  $(".upload_prof .file-upload-input").replaceWith(
    $(".upload_prof .file-upload-input").clone()
  );
  $(".upload_prof .file-upload-content").hide();
  $(".upload_prof .image-upload-wrap").show();
}
$(".upload_prof .image-upload-wrap").bind("dragover", function () {
  $(".upload_prof .image-upload-wrap").addClass("image-dropping");
});
$(".upload_prof .image-upload-wrap").bind("dragleave", function () {
  $(".upload_prof .image-upload-wrap").removeClass("image-dropping");
});
// file Upload ends
