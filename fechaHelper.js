(function(global) {
  function hoy() {
    const d = new Date();
    return d.toISOString().slice(0,10);
  }

  function formatearFecha(fecha, formato = "yyyy-mm-dd") {
    const d = new Date(fecha);
    if (isNaN(d)) return null;
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();

    switch(formato.toLowerCase()) {
      case "dd/mm/yyyy": return `${dd}/${mm}/${yyyy}`;
      case "mm-dd-yyyy": return `${mm}-${dd}-${yyyy}`;
      case "yyyy/mm/dd": return `${yyyy}/${mm}/${dd}`;
      default: return `${yyyy}-${mm}-${dd}`;
    }
  }

  function esFinDeSemana(fecha) {
    const d = new Date(fecha);
    if (isNaN(d)) return null;
    const dia = d.getDay();
    return dia === 0 || dia === 6;
  }

  function sumarDias(fecha, dias) {
    const d = new Date(fecha);
    if (isNaN(d)) return null;
    d.setDate(d.getDate() + dias);
    return d.toISOString().slice(0,10);
  }

  function restarDias(fecha, dias) {
    return sumarDias(fecha, -dias);
  }

  function diferenciaDias(fecha1, fecha2) {
    const d1 = new Date(fecha1);
    const d2 = new Date(fecha2);
    if (isNaN(d1) || isNaN(d2)) return null;
    const diffMs = d2 - d1;
    return Math.round(diffMs / (1000 * 60 * 60 * 24));
  }

  function esFechaValida(fecha) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(fecha)) return false;
    const d = new Date(fecha);
    return !isNaN(d);
  }

  function obtenerDiaSemana(fecha, locale = "es-ES") {
    const d = new Date(fecha);
    if (isNaN(d)) return null;
    return d.toLocaleDateString(locale, { weekday: 'long' });
  }

  function obtenerMes(fecha, locale = "es-ES") {
    const d = new Date(fecha);
    if (isNaN(d)) return null;
    return d.toLocaleDateString(locale, { month: 'long' });
  }

  function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
  }

  function ultimoDiaMes(fecha) {
    const d = new Date(fecha);
    if (isNaN(d)) return null;
    return new Date(d.getFullYear(), d.getMonth() + 1, 0).toISOString().slice(0,10);
  }

  function fechaAleatoriaEntre(fechaInicio, fechaFin) {
    const start = new Date(fechaInicio);
    const end = new Date(fechaFin);
    if (isNaN(start) || isNaN(end) || start > end) return null;
    const diff = end.getTime() - start.getTime();
    const randomDiff = Math.floor(Math.random() * diff);
    const randomDate = new Date(start.getTime() + randomDiff);
    return randomDate.toISOString().slice(0,10);
  }

  function sumarMeses(fecha, meses) {
    const d = new Date(fecha);
    if (isNaN(d)) return null;
    const nuevoMes = d.getMonth() + meses;
    d.setMonth(nuevoMes);
    return d.toISOString().slice(0,10);
  }

  function esFechaPasada(fecha) {
    const d = new Date(fecha);
    const hoy = new Date();
    if (isNaN(d)) return null;
    d.setHours(0,0,0,0);
    hoy.setHours(0,0,0,0);
    return d < hoy;
  }

  global.fechaHelper = {
    hoy,
    formatearFecha,
    esFinDeSemana,
    sumarDias,
    restarDias,
    diferenciaDias,
    esFechaValida,
    obtenerDiaSemana,
    obtenerMes,
    esBisiesto,
    ultimoDiaMes,
    fechaAleatoriaEntre,
    sumarMeses,
    esFechaPasada
  };
})(window);
