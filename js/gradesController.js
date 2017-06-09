var app = angular.module('app', []);
		 

    function gradesCrtl($scope, $rootScope, $http){

      /*  'use strict';

    	if ($rootScope.loguado != 0){
            $rootScope.usuario = "NO logueado";
        }
    	
      */

        $scope.getGrades = function(user){


            $idStudent;
            $quarter;
            $year;
            $majoring;


            $http.get('http://localhost.localdomain:8080/JwtSecurityExample/rest/security/status')
                  .then(function(respose){

                    $scope.grades;
                    


                  




                  });






        }

    	$scope.login = function(user){

    	$http.get('http://localhost.localdomain:8080/JwtSecurityExample/rest/security/status')
    			  .then(function(respose){


    			  	
    			  	$rootScope.logueado = 1;
                    $rootScope.usuario = "Usuario logueado: " + user;




    			  });

    			
                  
                      
                          






    	}


        
 

             
          

        }



    


    function loadPets($scope, $http){



        $http.get('http://localhost:8080/petHeroes/rest/petService/searchByAll')
                  .then(function(respose){
                    
                    $scope.mascotas = respose.data;

                  });


                  	  $scope.setIds = function(idmascota){


                      
                            $scope.IdAnimal = idmascota;
                            $scope.IdGestion = 232132;
                            $scope.Nickname = "Carlos";



                   }

    }


    function adoptPet($scope, $rootScope){

      
       $scope.alert = "alert alert-success";


            $scope.adopt = function(IdGestion, IdAnimal, comprobanteDomicilio, IdCliente, hojaDelincuencia, fechaSalidaMASC){


         
                    $('#aleta').show();

                    $('#alerta').fadeIn();
                    $scope.mensaje = "Felicidades";
                    $scope.mensaje2 = "El proceso de adopción de tu nueva mascota se ha ingresado correctamente";
                    $rootScope.mascotas[1].adoptado = "true";

                   $http.get('http://localhost:8080/petHeroes/rest/petService/AdoptID? ')
                  .then(function(respose){
                    
                        

                  });



            }


    }

 app.controller('loginCrtl', loginCrtl,  'loadPets', loadPets, 'adoptPet', adoptPet );




    