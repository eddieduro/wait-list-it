$(document).ready(function(){
  $("#add-reservation").click(function(event) {
      event.preventDefault();
      $("ul#list").append("<li>Bob</li>");
    });

  $("ul#list li").click(function(){
    $(this).remove();
  });
});
