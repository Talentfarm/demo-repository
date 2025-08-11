class SimpleWeatherSimulator {
  constructor() {
   
    this.crops = {
      cotton: {
        name: "Cotton",
        thresholds: {
          temperature: { max: 40, min: 10 },
          rainfall: { maxDaily: 50, minMonthly: 20 },
          windSpeed: 60,
          humidity: 85
        }
      },
      rice: {
        name: "Rice",
        thresholds: {
          temperature: { max: 38, min: 15 },
          rainfall: { maxDaily: 120, minMonthly: 80 },
          windSpeed: 50,
          humidity: 98
        }
      },
      wheat: {
        name: "Wheat",
        thresholds: {
          temperature: { max: 35, min: 0 },
          rainfall: { maxDaily: 40, minMonthly: 30 },
          windSpeed: 40,
          humidity: 75
        }
      },
      sugarcane: {
        name: "Sugarcane",
        thresholds: {
          temperature: { max: 38, min: 16 },
          rainfall: { maxDaily: 150, minMonthly: 50 },
          windSpeed: 55,
          humidity: 97
        }
      }
    };

    // Weather Scenarios for Guntur
    this.scenarios = {
      normal: {
        name: "Normal Weather",
        temperature: 28,
        rainfall: 10,
        windSpeed: 15,
        humidity: 65,
        description: "Perfect growing conditions"
      },
      heatwave: {
        name: "Heat Wave",
        temperature: 45,
        rainfall: 0,
        windSpeed: 10,
        humidity: 30,
        description: "Extreme heat damaging crops"
      },
      heavyrain: {
        name: "Heavy Rainfall",
        temperature: 25,
        rainfall: 80,
        windSpeed: 20,
        humidity: 95,
        description: "Excessive rainfall causing waterlogging"
      },
      storm: {
        name: "Storm Damage",
        temperature: 30,
        rainfall: 30,
        windSpeed: 75,
        humidity: 85,
        description: "High winds damaging crops"
      }
    };

    this.currentScenario = "normal"; // default
  }

  getCurrentWeather(location = "Guntur") {
    const w = this.scenarios[this.currentScenario];
    return {
      location,
      temperature: w.temperature,
      rainfall: w.rainfall,
      windSpeed: w.windSpeed,
      humidity: w.humidity,
      description: w.description,
      scenario: w.name,
      timestamp: new Date()
    };
  }

  setScenario(scenarioName) {
    if (this.scenarios[scenarioName]) {
      this.currentScenario = scenarioName;
      console.log(`🌦 Weather set to: ${this.scenarios[scenarioName].name} in Guntur`);
      return true;
    }
    return false;
  }

  evaluatePayoutConditionForCrop(cropKey) {
    const crop = this.crops[cropKey?.toLowerCase()];
    if (!crop) {
      return { shouldTriggerPayout: false, reason: "Unknown crop", severity: "LOW" };
    }
    if (this.currentScenario === 'normal') {
    return {
      shouldTriggerPayout: false,
      reason: "No adverse weather conditions",
      weatherData: this.getCurrentWeather(),
      severity: "LOW"
    };
  }

    const weather = this.getCurrentWeather();
    let payout = false;
    let reasons = [];

    if (weather.temperature > crop.thresholds.temperature.max) {
      payout = true;
      reasons.push(`Heat stress: ${weather.temperature}°C > ${crop.thresholds.temperature.max}°C`);
    } else if (weather.temperature < crop.thresholds.temperature.min) {
      payout = true;
      reasons.push(`Cold stress: ${weather.temperature}°C < ${crop.thresholds.temperature.min}°C`);
    }

    if (weather.rainfall > crop.thresholds.rainfall.maxDaily) {
      payout = true;
      reasons.push(`Excess rainfall: ${weather.rainfall}mm > ${crop.thresholds.rainfall.maxDaily}mm`);
    } else if (weather.rainfall < crop.thresholds.rainfall.minMonthly) {
      payout = true;
      reasons.push(`Low rainfall: ${weather.rainfall}mm < ${crop.thresholds.rainfall.minMonthly}mm`);
    }

    if (weather.windSpeed > crop.thresholds.windSpeed) {
      payout = true;
      reasons.push(`High wind: ${weather.windSpeed}km/h > ${crop.thresholds.windSpeed}km/h`);
    }

    if (weather.humidity > crop.thresholds.humidity) {
      payout = true;
      reasons.push(`High humidity: ${weather.humidity}% > ${crop.thresholds.humidity}%`);
    }

    return {
      shouldTriggerPayout: payout,
      reason: payout ? reasons.join("; ") : "No adverse weather",
      weatherData: weather,
      severity: payout ? "HIGH" : "LOW"
    };
  }

  getAllScenarios() {
    return Object.keys(this.scenarios).map(key => ({
      id: key,
      name: this.scenarios[key].name,
      description: this.scenarios[key].description
    }));
  }
}

module.exports = SimpleWeatherSimulator;
