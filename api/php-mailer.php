<?php
    include 'request-template.php';

    // TODO: Remove for cors
    header("Access-Control-Allow-Origin: http://localhost:3000");

    $data = $_POST;

     if ($data['type'] == 'booking-request') {
                echo "<pre>";
                print_r($data);
                echo "</pre>";

        $request_template = new RequestTemplate();


        $mail_sent = $request_template->send_email($data);
    } else {
        echo ("Type not supported!");
    }
?>