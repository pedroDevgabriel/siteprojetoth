// aguarda o DOM estar pronto para executar os scripts JQuery
$(document).ready(function(){
  $('#loginAluno').submit(function( evento ){
      var usuario = $('#inputUsuario').val()
      var senha = $('inputSenha').val()

      if( usuario == 'admin' && senha == '1234'){
        $('mensagem').addClass('alert alert-sucess alert-dismissible fade show')
        $('#mensagem').text('Usuário Logado').show().fadeOut(3000)}
        else{
           $('mensagem').addClass('alert alert-sucess alert-dismissible fade show')
            $('#mensagem').text('Usuário ou senha inválido').show().fadeOut(3000)
            evento.prevenDefault()
            }
        }
      }
    })
})