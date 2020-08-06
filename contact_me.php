<?php
if(empty($_POST['inputName']) || empty($_POST['inputEmpresa'])  || empty($_POST['inputCargo']) || empty($_POST['inputEmail']) || empty($_POST['inputConfEmail']) || empty($_POST['inputTel']) || empty($_POST['inputMsg']))
{
	echo "<script>alert('Por favor preencher todos os campos'); window.open('$url', '_blank'); window.history.back(-1);</script>";
	return false;
}
	
$name = strip_tags(htmlspecialchars($_POST['inputName']));
$email = strip_tags(htmlspecialchars($_POST['inputEmail']));
$assunto = strip_tags(htmlspecialchars($_POST['inputAssunto']));
$tel = strip_tags(htmlspecialchars($_POST['inputTel']));
$message = strip_tags(htmlspecialchars($_POST['inputMsg']));

$to = 'rico@w5.com.br';
$email_subject = "$assunto";
$email_body = "Você recebeu uma nova mensagem.\n\n"."\n\nNome: $name\n\nAssunto: $assunto\n\nTelefone: $tel\n\nEmail: $email\n\nMensagem:\n$message";	
mail($to,$email_subject,$email_body,'From: rico@w5.com.br');
echo "<script>alert('Obrigado pelo seu contato!'); window.open('$url', '_blank'); window.location.href = './index.html';</script>";
return true;			
?>
