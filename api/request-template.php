<?php

class RequestTemplate
{
    private const SCAFFOLD_URL = './template-scaffold.html';
    private const TEMPLATE_URL = './request-template.html';

    public function send_email($data) {
        $subject = isset($data['isVoucher']) && $data['isVoucher'] == 'true' ? 'Anfrage Gutschein' : 'Anfrage Gleitschirmflug';

        $email_address = '"FlyDifferent" <info@flydifferent.eu>';
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= $email_address . "\r\n";

        $html_content = $this->build_html($data);

        echo "<pre>";
           print_r($html_content);
        echo "</pre>";

        $mail_sent = @mail($email_address, $subject, $html_content, $headers);

        return $mail_sent;
    }

    private function build_html($data) {
        $template_scaffold = file_get_contents(self::SCAFFOLD_URL);

        $template = file_get_contents(self::TEMPLATE_URL);
        $template_data = $this->build_template_data($data);

        $template_html = str_replace(array_keys($template_data), array_values($template_data), $template);

        $email_content_data = [
            '{{content}}' => $template_html,
            '{{title}}' => isset($data['isVoucher']) && $data['isVoucher'] == 'true' ? 'Anfrage Gutschein' : 'Anfrage Gleitschirmflug'
        ];

        $email_content = str_replace(array_keys($email_content_data), array_values($email_content_data), $template_scaffold);

        return $email_content;
    }

    private function build_passenger_rows($passengers) {
        $passenger_rows = '';
        foreach ($passengers as $index => $passenger) {
            $table_index = $index + 1;
            $age = isset($passenger['age']) ? htmlspecialchars($passenger['age']) : '-';
            $weight = isset($passenger['weight']) ? htmlspecialchars($passenger['weight']) : '-';
            $passenger_rows .= "<tr><td>$table_index</td><td>$age</td><td>$weight</td></tr>";
        }
        return $passenger_rows;
    }

    private function build_template_data($data) {
        $template_data = [
            '{{isVoucher}}' => isset($data['isVoucher']) && $data['isVoucher'] == 'true' ? 'Ja' : 'Nein',
            '{{voucherRecipient}}' => htmlspecialchars($data['voucherRecipient'] ?? '-'),
            '{{flightTitle}}' => htmlspecialchars($data['flightTitle'] ?? '-'),
            '{{firstName}}' => htmlspecialchars($data['firstName'] ?? '-'),
            '{{lastName}}' => htmlspecialchars($data['lastName'] ?? '-'),
            '{{phoneNumber}}' => isset($data['phoneNumber']) ? htmlspecialchars("+" . $data['phoneNumber']) : '-',
            '{{email}}' => htmlspecialchars($data['email'] ?? '-'),
            '{{arrivalDate}}' => htmlspecialchars($data['arrivalDate'] ?? '-'),
            '{{departureDate}}' => htmlspecialchars($data['departureDate'] ?? '-'),
            '{{furtherDetails}}' => htmlspecialchars($data['furtherDetails'] ?? '-'),
            '{{passengerRows}}' => (isset($data['passengers']) && is_array($data['passengers'])) ? $this->build_passenger_rows($data["passengers"]) : '',
            '{{expectedDuration}}' => (isset($data['flightVariation']) && isset($data['flightVariation']['expectedDuration'])) ? htmlspecialchars($data['flightVariation']['expectedDuration']) : '-',
            '{{price}}' => (isset($data['flightVariation']) && isset($data['flightVariation']["price"])) ? $data['flightVariation']["price"] : '-'
        ];

        return $template_data;
    }
}



?>