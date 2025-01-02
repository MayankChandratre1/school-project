import {  getPointsReceivedPerMonth } from '@/api'
import { useEffect, useState } from 'react'
import LineChartCard from '@/Section/School/component/line-chart'

const ByStudentStats = () => {
    const [pointReceivedPerMonth, setpointReceivedPerMonth] = useState<number[]>([])
    

   

    useEffect(()=>{
      const fetchData = async () => {

            const resPoints = await getPointsReceivedPerMonth("")
            setpointReceivedPerMonth(resPoints.monthlyPoints);
      }
      fetchData()
    },[])


  return (
    <div className='grid grid-cols-2 gap-4 mt-2 '>
        <h4 className='col-span-2 text-3xl font-bold'>Your Stats</h4>
        <LineChartCard label={`Total Points Received`} data={pointReceivedPerMonth} />
    </div>
  )
}

export default ByStudentStats