var Application = function () {
	
	return{
		init: function(){
			var func = this;
			func.context = './';
			func.sellos = [];
			func.dataSet = [];
			func.total = 0;
		},
		gotoAjax : function (url) {
		var vurl = Application.context + url;
		$.ajax({
			url: url,
			dataType: 'html', 
			type: 'GET',
			success: function(data){
				$('#contenidoDinamico').fadeOut('normal', function (){
					$(this).remove();
					$('#base').html('<div id="contenidoDinamico">'+data+'</div>');
				});
			},
			error: function(jqXHR, textStatus, errorThrown){
			console.log(errorThrown);
			}
		});		
    }, 
  formatCosto : function(valor){
	if(!valor || valor == 0)
		return 'Gratuita';
	else
		return $.number(valor,2);
  },
  actualizarSuma: function(){
	Application.total = 0;
	for(var i = 0, vlen = Application.sellos.length; i < vlen; i++){
		var tmp = Application.sellos[i];				
		Application.total += tmp.costo;
	}
  },
  removeSello: function(pId){
	var found = false;
	for(var i = 0, vlen = Application.sellos.length; i < vlen && found == false; i++){
		var tmp = Application.sellos[i];				
		if(tmp.id == pId){
			found = true;
			Application.sellos.splice(i,1);
			Application.dataSet.splice(i,1);
		}
	}
  },
  addSello: function(id, nombre, tipo, fecha, costo, cuposTotal, cuposDisponibles, lugar) {
  Application.sellos.push({
				  id : id,
				  nombre : nombre,
				  tipo : tipo,
				  fecha : fecha,
				  costo : costo,
				  cuposTotal : cuposTotal,
				  cuposDisponibles : cuposDisponibles,
				  lugar : lugar
				  
			});
			var dataRow = new Array();
			dataRow[0] = id;
			dataRow[1] = nombre;
			dataRow[2] = tipo;
			dataRow[3] = fecha;
			dataRow[4] = Application.formatCosto(costo);
			dataRow[5] = cuposTotal;
			dataRow[6] = cuposDisponibles;
			dataRow[7] = lugar;
			dataRow[8] = '';
			Application.dataSet.push(dataRow);		
			
}
	};
}();