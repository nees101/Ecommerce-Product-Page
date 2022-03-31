// Switch the large product image by clicking on the small thumbnail images
$(" .thumbnails img").on("click", function() {
  var value = event.target;
  if ($(value).hasClass("thumbnail-1")) {
    $(".product ").attr("src", "images/image-product-1.jpg");
  } else if ($(value).hasClass("thumbnail-2")) {
    $(".product").attr("src", "images/image-product-2.jpg");
  } else if ($(value).hasClass("thumbnail-3")) {
    $(".product").attr("src", "images/image-product-3.jpg");
  } else {
    $(".product").attr("src", "images/image-product-4.jpg");
  }
  $(".thumbnails img").removeClass("highlight-enable");
  $(value).addClass("highlight-enable ");
});


// Change product image on Lightbox gallery by clicking next and previuos buttons
var i = 0;

function next() {
  i++;
  changeImage(i);
  if (i > 3) {
    i--;
  }
}

function prev() {
  i--;
  changeImage(i);
  if (i < 0) {
    i++;
  }
}


function changeImage(n) {
  switch (n) {
    case 0:
      $(".prod-lightbox").attr("src", "images/image-product-1.jpg");
      $(".thumb-lightbox-1").addClass("highlight-enable ");
      $(".thumb-lightbox-2,.thumb-lightbox-3,.thumb-lightbox-4").removeClass("highlight-enable");
      break;

    case 1:
      $(".prod-lightbox").attr("src", "images/image-product-2.jpg");
      $(".thumb-lightbox-2").addClass("highlight-enable ");
      $(".thumb-lightbox-1,.thumb-lightbox-3,.thumb-lightbox-4").removeClass("highlight-enable");
      break;

    case 2:
      $(".prod-lightbox").attr("src", "images/image-product-3.jpg");
      $(".thumb-lightbox-3").addClass("highlight-enable ");
      $(".thumb-lightbox-1,.thumb-lightbox-2,.thumb-lightbox-4").removeClass("highlight-enable");
      break;

    case 3:
      $(".prod-lightbox").attr("src", "images/image-product-4.jpg");
      $(".thumb-lightbox-4").addClass("highlight-enable ");
      $(".thumb-lightbox-1,.thumb-lightbox-2,.thumb-lightbox-3").removeClass("highlight-enable");
      break;

  }
}


// Populating the cart on clicking Add to cart button

var x = $(".number").html();

function minus(){
  x>0? x-- : x;
  $(".number").html(x);
}

function plus(){
x++;
$(".number").html(x);
}

function addToCart(){
  $(".item-quantity").html(x).css("background","var(--Orange)");
}

function cart(){
  var cost = parseFloat(125.00 * x).toFixed(2);
  var total = ("$" + cost).bold();
  if(x==0){
    $(".items ,.checkout").css("display","none");
    $(".card-text").css("display","block");
  }else if(x>0){
    $(".items,.checkout").css("display","block");
    $(".card-text").css("display","none");
    $(".total").html("$125.00 x "+ x + " "+ total);
  }
$(".card").toggle();
}

// Deleting Items in the cart
function deleteItem(){
  $(".items ,.checkout , .item-quantity").css("display","none");
  $(".card-text").css("display","block");
  x=0;
  $(".number").html("0");
}
