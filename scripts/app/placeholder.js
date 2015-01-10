define(function () {
    //Do setup work here
    var canvas = document.querySelector('#canvas'),
    ctx = canvas.getContext("2d"),
    img = new Image(),
    initPlaceholder = function(){
      //set handler for upload button
      document.querySelector('#btnUpload').onchange = function handleImage(e) {
        var reader = new FileReader();
          reader.onload = function (event){
            img.src = event.target.result;
            img.onload = function () {
              addImageToCanvas();
            }
          }
          reader.readAsDataURL(e.target.files[0]);
        }
    },
    addImageToCanvas = function(){
      ctx.drawImage(img,0,0,img.width,img.height,0,0,canvas.width,canvas.height);
    },
    hideUploadControls = function(){

    };

    return {
        initPlaceholder: initPlaceholder
    }
});