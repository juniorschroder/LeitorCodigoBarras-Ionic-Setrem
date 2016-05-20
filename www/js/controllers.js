app.controller('LeitorCtrl', ['$scope', 'DadosService', '$cordovaBarcodeScanner', function ($scope, DadosService, $cordovaBarcodeScanner) {
    $scope.texto = null;
    $scope.tipo = null;
    $scope.lerCodigo = function () {
      document.addEventListener("deviceready", function () {
        $cordovaBarcodeScanner
          .scan()
          .then(function (barcodeData) {
            $scope.texto = barcodeData.text;
            $scope.tipo = barcodeData.format;
            DadosService.incluir(barcodeData);
          }, function (error) {
            $scope.texto = error;
          });

      }, false)
    }
  }]);

  app.controller('HistoricoCtrl', ['$scope', 'DadosService', function ($scope, DadosService) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.dados = DadosService.retornarTodos();
    $scope.remover = function (registro) {
      DadosService.excluir(registro);
    };
  }]);
