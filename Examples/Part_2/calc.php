<?php
  header("Content-Type: text/xml");
  $meter = $_REQUEST['meter'];
  $miles = $meter * 0.0006213711922373339;
  $yards = $meter * 1.0936133;
  echo "<?xml version=\"1.0\" encoding=\"utf-8\"?>";
?>

<conversion>
    <meter><?php echo $meter; ?></meter>
    <miles><?php echo $miles;  ?></miles>
    <yard><?php echo $yards;  ?></yard>
</conversion>
