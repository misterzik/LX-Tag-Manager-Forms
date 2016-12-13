<?php

if( $_POST ){
 
    $fname = $_POST['txt_fname'];
    $lname = $_POST['txt_lname'];
    $email = $_POST['txt_email'];
    $phno = $_POST['txt_phone'];
    $addr_street = $_POST['txt_addr_street'];
    $addr_state = $_POST['txt_addr_state'];
    $addr_city = $_POST['txt_addr_city'];
    
    $addr_zip = $_POST['txt_addr_zip'];
    
    $txt_msg = $_POST['dForm-Subject'];

    ?>
    
    <table class="table table-striped" border="0">
    
    <tr>
    <td colspan="2">
     <div class="alert alert-info">
      <strong>Success</strong>, Form Submitted Successfully...
     </div>
    </td>
    </tr>
    
    <tr>
    <td>First Name</td>
    <td><?php echo $fname ?></td>
    </tr>
    
    <tr>
    <td>Last Name</td>
    <td><?php echo $lname ?></td>
    </tr>
    
    <tr>
    <td>Your eMail</td>
    <td><?php echo $email; ?></td>
    </tr>       
        
    <tr>
    <td>Contact No</td>
    <td><?php echo $phno; ?></td>
    </tr>
        
    <tr>
    <td>Address</td>
    <td><?php echo $addr_street; ?></td>
    </tr>
        
    <tr>
    <td>City</td>
    <td><?php echo $addr_city; ?></td>
    </tr>
        
    <tr>
    <td>State</td>
    <td><?php echo $addr_state; ?></td>
    </tr>

    <tr>
    <td>Zip Code</td>
    <td><?php echo $addr_zip; ?></td>
    </tr>        

    <tr>
    <td>Comments</td>
    <td><?php echo $txt_msg; ?></td>
    </tr>  
    
    </table>
    <?php
 
}