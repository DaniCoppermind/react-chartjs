import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from './components/Card'
import data from './api/data.json'

function App() {
  return (
    <>
      <h1 className='text-center'>Dashboard</h1>
      <main className='container'>
        <div className='row row-cols-1 rows-cols-md-2 g-4'>
          {data.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              text={data.text}
              chartType={data.type}
              chartData={data.data}
              options={data.options}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
