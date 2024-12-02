import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'

// Registra los componentes necesarios para los gráficos
ChartJS.register(
  CategoryScale, // Escala categórica (para gráficos de barras, líneas, etc.)
  LinearScale, // Escala lineal
  PointElement, // Puntos en gráficos de líneas
  LineElement, // Líneas en gráficos lineales
  BarElement, // Barras en gráficos de barras
  Title, // Títulos
  Tooltip, // Tooltips
  Legend, // Leyendas
  ArcElement // Elementos circulares (Doughnut/Pie)
)
