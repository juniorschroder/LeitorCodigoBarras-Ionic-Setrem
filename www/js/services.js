app.factory('DadosService', function($localStorage) {
  
  $localStorage = $localStorage.$default({
    historico: []
  });
  
  return {
    retornarTodos: function() {
      return $localStorage.historico;
    },
    incluir: function(dados) {
      $localStorage.historico.push(dados);
    },
    excluir: function(dados) {
      $localStorage.historico.splice($localStorage.historico.indexOf(dados), 1);
    }
  };
});
