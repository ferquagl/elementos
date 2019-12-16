<?php
session_start();
require_once 'classes/gen.php';

$_SESSION['token'] = Token::generate();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">

    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Elementos</title>
    <meta name="description" content="Elementos es una selección de vinos que quiere acompañarte en el día a día. Una línea de varietales jóvenes, frescos y frutados.">
    <!-- for mobile devices -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1, maximum-scale=1">
    <link rel="shortcut icon" href="../img/logo-elementos.png" type="image/x-icon">
    <link rel="icon" href="../img/logo-elementos.png" type="image/x-icon">
    <link href="https://fonts.googleapis.com/css?family=Oswald:300,400,500,600,700" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Cardo:400,400i,700" rel="stylesheet">
    <link rel="stylesheet" href="../css/pace.css">
    <link rel="stylesheet" href="../css/style.css">
    <!-- Google Tag Manager -->
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-PTWLJBZ');

    </script>
    <!-- End Google Tag Manager -->
    <!--[if lt IE 9]>
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>

<body>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PTWLJBZ" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    
    <script>
        (function(i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function() {

                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date();
            a = s.createElement(o),

                m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m)

        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

        ga('create', 'UA-99868166-1', 'auto');
        ga('send', 'pageview');

    </script>
    <div id="preloader"></div>
    <header class="gray-header">
        <a href="../"><img class="logo" src="../img/logo-elementos.svg" alt="Elementos" /></a>
        <nav>
            <ul>
                <li>
                    <a href="../index.html#init"><img src="../img/uvas-icon.svg" alt="Nuestros Vinos" /></a>
                </li>
                <li>
                    <a href="contacto.html" target="_blank"><img src="../img/mail-icon.svg" alt="Contacto" /></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/ElementosArg/" target="_blank"><img src="../img/fb-icon.svg" alt="Facebook" /></a>
                </li>
            </ul>
        </nav>
    </header>
    <div class="contacto">
        <div class="content">
            <form id="contact-form" method="post">
                <h1>Contactanos</h1>
                <div>
                    <input id="nombre" name="nombre" type="text" autocomplete="off"><br>
                    <label class="field-name">Nombre y apellido</label>
                </div>
                <div>
                    <input id="email" name="email" type="email" autocomplete="off"><br>
                    <label class="field-name">E-mail</label>
                </div>
                <div class="area-field">
                    <label class="field-name">Mensaje</label>
                    <textarea id="consulta" name="consulta" autocomplete="off"></textarea>
                </div>
                <input type="hidden" name ="token" id = "token" value="<?php echo $_SESSION['token'] = Token::generate(); ?>">
                <br>
                <input id="send" type="button"  onclick="valida_envia();" class="bt white-empty" value="ENVIAR">
            </form>
            <div class="message"></div>
        </div>
        <div class="overlay"></div>
    </div>
    <footer>
        <div class="wrapper">
            <a href="../" target="_blank"><img class="logo" src="../img/logo-elementos.svg" alt="Elementos" /></a>
            <ul>
                <li>
                    <a href="contacto.html" target="_blank"><img src="../img/mail-icon.svg" alt="Contacto" /></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/ElementosArg/" target="_blank"><img src="../img/fb-icon.svg" alt="Facebook" /></a>
                </li>
            </ul>
            <p>© 2017 Elementos, todos los derechos reservados.<br>
                <a href="politicas-privacidad.html" target="_blank">Pol&iacute;ticas de privacidad</a> | <a href="terminos-condiciones.html" target="_blank">T&aacute;rminos y condiciones</a></p>
        </div>
    </footer>
    <script src="../js/jquery-1.12.4.min.js"></script>
    <script src="../js/modernizr-custom.js"></script>
    <script src="../js/pace.min.js"></script>

    <script>
        Pace.on("done", function() {

            $("#preloader").fadeOut(1000);
            $('body').addClass('overflow-auto');

        });

        var chk = '';
        var url = '../acc_enviar.php';

        function valida_envia() {

            function envio() {

                $("#send").attr("disabled", true);

                var parametros = {
                    "nombre": nombre,
                    "email": email,
                    "consulta": consulta,
                    "token":  document.getElementById('token').value
                };
                   
                $.ajax({
                    type: "POST",
                    url: url,
                    data: parametros, // serializes the form's elements.
                    /*beforeSend: function(){
                         $("#result").css('display', 'block');
                         $("#result p").html( "<strong>Enviando datos. </strong></strong>" );
                         $(".bt").removeAttr("disabled");
                    },*/
                    success: function(res) {
                        
                        if (res=="ok"){
                        $('#contact-form').fadeOut(function() {
                            $(".message").append("<span>Gracias por contactarte con nosotros.</span>Te responderemos a la brevedad.").fadeIn();
                        });}else{
                             $(".message").append("<span>Datos no enviados.</span> Intenta m&aacute;s tarde nuevamente por favor.").fadeIn();
                        }
                    },
                    error: function() {
                        $('#contact-form').fadeOut(function() {
                            $(".message").append("<span>Datos no enviados.</span> Intenta m&aacute;s tarde nuevamente.").fadeIn();
                        });
                    }
                });

            }



            function valEmail(valor) {
                re = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/;
                if (!re.exec(valor)) {
                    return false;
                } else {
                    return true;
                }
            }

            function chkb(bool) {
                if (bool)
                    return 1;
                return 0;
            }


            mensaje_error = "Por favor, complete este campo";
            mensaje_error2 = "Incompleto";

            var nombre = $('#nombre').val();

            if (nombre === "") {
                $('#nombre').val(mensaje_error);
                $('#nombre').parent().find('label').css('color', 'orange');

                $('#nombre').focus(function() {
                    $('#nombre').val("");
                    $('#nombre').parent().find('label').css('color', 'white');
                });

                return 0;
            }

            var email = $('#email').val();

            if (valEmail(email) !== true) {

                $('#email').val(mensaje_error);
                $('#email').parent().find('label').css('color', 'orange');

                $('#email').focus(function() {
                    $('#email').val("");
                    $('#email').parent().find('label').css('color', 'white');
                });

                return 0;
            }

            var consulta = $('#consulta').val();

            if (consulta === "") {
                $('#consulta').val(mensaje_error);
                $('#consulta').parent().find('label').css('color', 'orange');

                $('#consulta').focus(function() {
                    consulta = $('#consulta').val();
                    if (consulta === mensaje_error || consulta === "") {
                        $('#consulta').val("");
                        $('#consulta').parent().find('label').css('color', 'orange');
                    }
                });

                return 0;
            }

            envio();

        }

    </script>

</body>

</html
