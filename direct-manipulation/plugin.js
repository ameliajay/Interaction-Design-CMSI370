function changeColor(currentPosition) {
  if (currentPosition < 200) {
    document.body.style.backgroundColor = "#ff6699";
  } else if (currentPosition >= 200 && currentPosition < 400){
    document.body.style.backgroundColor = "#3399ff";
  } else if (currentPosition >= 400 && currentPosition < 600){
    document.body.style.backgroundColor = "#66ffcc";
  } else if (currentPosition >= 600 && currentPosition < 800){
    document.body.style.backgroundColor = "#31ccc8";
  } else {
    document.body.style.backgroundColor = "#ff99cc";
  }
  return color;
}

$(() => {

    $(".slider").slider({
        change: function (currentPosition, newPosition) {
            changeColor(currentPosition);
        }
    });
});
