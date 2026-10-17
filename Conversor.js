class Conversor {
  Celsius_Para_Fahrenheit(Celsius) {
    return (9 / 5) * Celsius + 32;
  }

  Quilometros_Para_Milhas(km) {
    return km * 0.621371;
  }

  minutos_Para_Horas(minutos) {
    return minutos / 60;
  }
}

export { Conversor };
