import { Doughnut, Pie, Bar, Line } from 'react-chartjs-2'

const chartComponents = {
  Doughnut,
  Pie,
  Bar,
  Line,
}

const stylesChart = {
  position: 'relative',
  height: '300px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const Card = ({ title, text, chartType, chartData }) => {
  const ChartComponent = chartComponents[chartType] || Doughnut

  return (
    <section className='col'>
      <div className='card'>
        <div style={stylesChart} id={title.replace(/\s+/g, '-').toLowerCase()}>
          <ChartComponent data={chartData} />
        </div>
        <div className='card-body'>
          <h5 className='card-title text-center'>{title}</h5>
          <p className='card-text'>{text}</p>
        </div>
      </div>
    </section>
  )
}
