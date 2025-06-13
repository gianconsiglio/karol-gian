
const startDate = new Date("2025-04-18T20:15:00");

    function updateTimer() {
      const now = new Date();

      // Cria uma data inicial temporária com o mesmo dia do namoro, mas neste mês/ano
      let tempDate = new Date(startDate);

      // Conta anos
      let years = now.getFullYear() - tempDate.getFullYear();
      tempDate.setFullYear(tempDate.getFullYear() + years);
      if (tempDate > now) {
        years--;
        tempDate.setFullYear(tempDate.getFullYear() - 1);
      }

      // Conta meses
      let months = now.getMonth() - tempDate.getMonth();
      if (months < 0) months += 12;
      tempDate.setMonth(tempDate.getMonth() + months);
      if (tempDate > now) {
        months--;
        tempDate.setMonth(tempDate.getMonth() - 1);
      }

      // Agora a diferença de dias, horas, minutos, segundos
      const diff = now - tempDate; // diferença em milissegundos
      const diffDate = new Date(diff);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = diffDate.getUTCHours();
      const minutes = diffDate.getUTCMinutes();
      const seconds = diffDate.getUTCSeconds();

      if (years == 1){
        msgYears = 'Ano'
      }

      else{
        msgYears = 'Anos'
      }
      if (days == 1){
        
        msgDays = 'Dia'
      }
      else{
        msgDays = 'Dias'
      }
      if (months == 1){
        msgMonths = 'Mês'
      }
      else{
        msgMonths = 'Meses'
      }
      if (hours == 1 ){
        msgHours = 'Hora'
      }
      else{
        msgHours = 'Horas'
      }
      if (minutes == 1 ){
        msgMinutes = 'Minuto'
      }
      else{
        msgMinutes = 'Minutos'
      }
      if (seconds == 1){
        msgSeconds = 'Segundo'
      }
      else{
        msgSeconds = 'Segundos'
      }

      document.getElementById("ano").innerText = `${zeroNumber(years)} ${msgYears}`
      document.getElementById("mes").innerText = `${zeroNumber(months)} ${msgMonths}`
      document.getElementById("dia").innerText = `${zeroNumber(days)} ${msgDays}`
      document.getElementById("hora").innerText = `${zeroNumber(hours)} ${msgHours}`
      document.getElementById("minutos").innerText = `${zeroNumber(minutes)} ${msgMinutes}`
      document.getElementById("segundos").innerText = `${zeroNumber(seconds)} ${msgSeconds}`
    }

    setInterval(updateTimer, 1000);
    updateTimer();   

    function zeroNumber(num){
      return num >= 10 ? num : `0${num}`
}
