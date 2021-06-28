$('#Participacion').click(function(){
  $('#primero').text("Convocatorias");
  $('#primero').attr('href', 'MostrarConvocatoriasB.html');
  $('#segundo').text("Proyectos");
  $('#segundo').attr('href', 'MostrarProyectoB.html');
  $('#tercero').text("Actividades actuales");
  $('#tercero').attr('href', 'MostrarActividadesActuales.html');
})
$('#Rendimiento').click(function(){
  $('#primero').text("Desempeño");
  $('#primero').attr('href', 'desempenho.html');
  $('#segundo').text("Sanciones");
  $('#segundo').attr('href', 'sanciones.html');
  $('#tercero').text("Observaciones");
  $('#tercero').attr('href', 'observaciones.html');
})
$('#Medallas').click(function(){
  $('#primero').text("Cargos con experiencia");
  $('#primero').attr('href', 'detalle_cargos.html');
  $('#segundo').text("Logros");
  $('#segundo').attr('href', 'logros.html');
  $('#tercero').text("Certificados");
  $('#tercero').attr('href', 'certificados.html');
})
