<?php
    require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/phpmailer.php');

		// *** SMTP *** //

		 require_once($_SERVER['DOCUMENT_ROOT'] . '/smartbasket/php/phpmailer/smtp.php');
		 const HOST = 'smtp.gmail.com';
		 const LOGIN = 'poshtaserver@gmail.com';
		 const PASS = 'Pro100-st';
		 const PORT = '465';

		// *** /SMTP *** //
   
    const SENDER = 'poshtaserver@gmail.com';
    const CATCHER = 'evgen1215@ukr.net';
    const SUBJECT = 'Заявка с сайта';
    const CHARSET = 'UTF-8';
    

