function envia_post(){
	$.post('http://localhost/int_php/interpreta_php.php', { 'php': $('#cod_php').val(), }).done(function(data){
		$('.result').append(card_content('<p>'+data+'</p>'));
	});
}
function limpa_tela(){
	$('.result').empty();
}
function card_content($content){
	var data = new Date();
	return '<div class="card"><div class="card-header">	<div class"card-header-title">'+ data +'</div><div class="card-header-icon"><a class="delete " onclick="deleteCard(this)"></a></div></div><div class="card-content">'+$content+'</div></div>';
}
function deleteCard(card){
		$(card).parent().parent().parent().remove();
}
$('.envia').on('click', function(){
	envia_post();
});
$('.limpar_tela').on('click', function(){
	limpa_tela();
});

//atalhos
Mousetrap.bind(['ctrl+enter', 'command+enter'], function(e) {
	envia_post();
});
Mousetrap.bind(['ctrl+alt+shift+l', 'command+l'], function(e) {
	limpa_tela();
});



//tabs

	function hideAllContent(){
		$('.tab-content').slideUp();
	}
	function removeAllActivateTabs(){
		$('div.tabs li').removeClass('is-active');
	}
	function showContentTab(tab){
		var href = $(tab).attr('href');
		hideAllContent();
		$(href).slideDown();
	}
	function activateTab(tab){
			removeAllActivateTabs();
			$(tab).parent().addClass('is-active');
			showContentTab(tab);
	}
	function removeTab(aba){
		$(aba).parent().parent().remove();
	}
	// $('label').on('click', function(){
	// 	$(this).parent().parent().remove();
	// });
	function createTab(tab){
			var nomeAba = $(tab).text();
			removeAllActivateTabs();
			$('.nav-tabs').append('<li role="presentation" class="active" ><a href="#" onclick="activateTab(this)">'+nomeAba+' <label onclick="removeTab(this)">x</label></a></li>');
	}