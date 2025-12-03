"use client";

import { useState, useEffect, useRef } from "react";
import {
  Search,
  MapPin,
  Droplets,
  Wind,
  Sunrise,
  Sunset,
  Cloud,
  CloudRain,
  CloudSnow,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface WeatherProps {
  isDarkMode?: boolean;
}

interface ForecastItem {
  day: string;
  temp: number;
  condition: string;
}

interface WeatherData {
  current: {
    temp: number;
    condition: string;
    humidity: number;
    windSpeed: number;
    sunrise: string;
    sunset: string;
    feelsLike: number;
  };
  forecast: ForecastItem[];
}

type WeatherCondition =
  | "sunny"
  | "partly-cloudy"
  | "cloudy"
  | "rainy"
  | "snowy";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
}

export default function Weather({ isDarkMode = true }: WeatherProps) {
  const [city, setCity] = useState("New York");
  const [searchQuery, setSearchQuery] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [condition, setCondition] = useState<WeatherCondition>("partly-cloudy");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);

  const bgColor = isDarkMode ? "bg-gray-900" : "bg-gray-100";
  const textColor = isDarkMode ? "text-white" : "text-gray-800";
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-white";
  const borderColor = isDarkMode ? "border-gray-700" : "border-gray-200";

  const updateParticles = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
  ) => {
    particles.current.forEach((p) => {
      // Convert percentage to actual position
      const x = (p.x / 100) * width;
      const y = (p.y / 100) * height;

      // Draw particle
      ctx.beginPath();

      if (condition === "rainy") {
        // Draw raindrops
        ctx.strokeStyle = p.color;
        ctx.lineWidth = p.size / 2;
        ctx.moveTo(x, y);
        ctx.lineTo(x + p.speedX, y + p.size * 2);
        ctx.stroke();
      } else if (condition === "snowy") {
        // Draw snowflakes
        ctx.fillStyle = p.color;
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      } else if (condition === "sunny") {
        // Draw sun particles
        ctx.fillStyle = p.color;
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Draw clouds
        ctx.fillStyle = p.color;
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update position
      p.x += p.speedX * 0.1;
      p.y += p.speedY * 0.1;

      // Reset position if out of bounds
      if (condition === "rainy") {
        if (p.y > 100) {
          p.y = 0;
          p.x = Math.random() * 100;
        }
        if (p.x < 0 || p.x > 100) {
          p.x = Math.random() * 100;
        }
      } else if (condition === "snowy") {
        if (p.y > 100) {
          p.y = 0;
          p.x = Math.random() * 100;
        }
        if (p.x < 0 || p.x > 100) {
          p.x = Math.random() * 100;
        }
      } else if (condition === "sunny") {
        // Keep sun particles within bounds
        if (p.x < 0) p.x = 100;
        if (p.x > 100) p.x = 0;
        if (p.y < 0) p.y = 100;
        if (p.y > 100) p.y = 0;
      } else {
        // Cloud movement
        if (p.x < -30) p.x = 130;
        if (p.x > 130) p.x = -30;
      }
    });
  };

  const initParticles = () => {
    particles.current = [];

    const count =
      condition === "rainy"
        ? 100
        : condition === "snowy"
          ? 80
          : condition === "sunny"
            ? 50
            : 30;

    for (let i = 0; i < count; i++) {
      let particle: Particle;

      if (condition === "rainy") {
        particle = {
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 7 + 10,
          opacity: Math.random() * 0.5 + 0.5,
          color: isDarkMode
            ? "rgba(120, 160, 255, 0.8)"
            : "rgba(0, 90, 190, 0.6)",
        };
      } else if (condition === "snowy") {
        particle = {
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 2,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 + 1,
          opacity: Math.random() * 0.3 + 0.7,
          color: "rgba(255, 255, 255, 0.8)",
        };
      } else if (condition === "sunny") {
        particle = {
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          color: isDarkMode
            ? `rgba(${255}, ${200 + Math.random() * 55}, ${0}, ${Math.random() * 0.5 + 0.3})`
            : `rgba(${255}, ${200 + Math.random() * 55}, ${0}, ${Math.random() * 0.7 + 0.3})`,
        };
      } else {
        // Clouds
        particle = {
          x: Math.random() * 100,
          y: Math.random() * 30,
          size: Math.random() * 30 + 20,
          speedX: Math.random() * 0.2 - 0.1,
          speedY: 0,
          opacity: Math.random() * 0.2 + 0.1,
          color: isDarkMode
            ? "rgba(200, 200, 220, 0.3)"
            : "rgba(255, 255, 255, 0.7)",
        };
      }

      particles.current.push(particle);
    }
  };

  const fetchWeather = async (cityName: string) => {
    try {
      setLoading(true);
      setError("");

      const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

      // Current weather (temp, humidity, feelslike etc.)
      const res1 = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`,
      );
      if (!res1.ok) throw new Error("City not found");
      const data1 = await res1.json();

      // Forecast (sunrise, sunset, 5-day)
      const res2 = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=5&aqi=no&alerts=no`,
      );
      const data2 = await res2.json();

      // Map forecast
      const forecastMap: ForecastItem[] = data2.forecast.forecastday.map(
        (d: any) => ({
          day: new Date(d.date).toLocaleDateString("en-US", {
            weekday: "short",
          }),
          temp: Math.round(d.day.avgtemp_c),
          condition: d.day.condition.text.toLowerCase(),
        }),
      );

      // Map current weather
      const mapped: WeatherData = {
        current: {
          temp: Math.round(data1.current.temp_c),
          condition: data1.current.condition.text,
          humidity: data1.current.humidity,
          windSpeed: data1.current.wind_kph,
          sunrise: data2.forecast.forecastday[0].astro.sunrise,
          sunset: data2.forecast.forecastday[0].astro.sunset,
          feelsLike: Math.round(data1.current.feelslike_c),
        },
        forecast: forecastMap,
      };

      setWeather(mapped);

      // Set weather condition
      const c = mapped.current.condition.toLowerCase();
      if (c.includes("rain")) setCondition("rainy");
      else if (c.includes("snow")) setCondition("snowy");
      else if (c.includes("cloud")) setCondition("partly-cloudy");
      else if (c.includes("sun") || c.includes("clear")) setCondition("sunny");
      else setCondition("cloudy");
    } catch (err: any) {
      setError(err.message || "Unable to load weather");
    } finally {
      setLoading(false);
      initParticles();
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  // Initialize particles and animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize particles based on condition
    initParticles();

    // Start animation
    const animate = () => {
      if (!canvas || !ctx) return;

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      updateParticles(ctx, canvas.width, canvas.height);

      // Continue animation
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [condition]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setCity(searchQuery.trim());
    }
    setSearchQuery("");
  };

  const getWeatherIcon = (condition: string) => {
    const c = condition.toLowerCase();
    if (c.includes("sunny")) return <Sun className="w-6 h-6" />;
    if (c.includes("partly-cloudy")) return <Cloud className="w-6 h-6" />;
    if (c.includes("rainy")) return <CloudRain className="w-6 h-6" />;
    if (c.includes("snowy")) return <CloudSnow className="w-6 h-6" />;
    return <Cloud className="w-6 h-6" />;
  };

  return (
    <div
      className={`h-full ${bgColor} ${textColor} flex flex-col relative px-3 sm:px-5 py-2`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Search bar */}
        <div className="p-3 sm:p-4 flex items-center gap-2 w-full">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Search city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className={`pl-10 w-full ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-300"}`}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          </div>

          <Button
            onClick={handleSearch}
            variant={isDarkMode ? "outline" : "default"}
            className={isDarkMode ? "border-gray-700" : ""}>
            Search
          </Button>
        </div>

        {loading && <p className="mt-4 text-gray-400">Loading weather...</p>}
        {error && <p className="mt-4 text-red-400">{error}</p>}

        {!loading && weather && (
          <>
            <div className="mt-3 flex items-center gap-4 sm:gap-6 flex-wrap">
              <MapPin className="text-blue-500" />
              <h1 className="text-3xl font-bold">{city}</h1>
            </div>

            <div className="mt-4 text-5xl sm:text-6xl font-light">
              {weather.current.temp}°
            </div>
            <p className="text-lg">{weather.current.condition}</p>
            <p className="text-gray-400">
              Feels like {weather.current.feelsLike}°
            </p>

            <div
              className={`${cardBg} p-3 sm:p-4 mt-6 rounded-lg border ${borderColor} grid grid-cols-1 sm:grid-cols-2 gap-4`}>
              <div className="flex items-center gap-2">
                <Droplets />
                <span>Humidity: {weather.current.humidity}%</span>
              </div>
              <div className="flex items-center gap-2">
                <Wind />
                <span>Wind: {weather.current.windSpeed} km/h</span>
              </div>
              <div className="flex items-center gap-2">
                <Sunrise />
                <span>Sunrise: {weather.current.sunrise}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sunset />
                <span>Sunset: {weather.current.sunset}</span>
              </div>
            </div>

            {/* Forecast */}
            <h3 className="mt-6 text-xl font-semibold">5-Day Forecast</h3>
            <div
              className={`${cardBg} border ${borderColor} p-3 sm:p-4 rounded-lg mt-3 grid grid-cols-3 sm:grid-cols-5 gap-4`}>
              {weather.forecast.map((f, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <p>{f.day}</p>
                  <span className="my-2">{getWeatherIcon(f.condition)}</span>
                  <p className="text-lg">{f.temp}°</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
