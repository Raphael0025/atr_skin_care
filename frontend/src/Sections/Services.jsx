import React from 'react'
import {GradientHeader} from '../Components'

const Services = () => {
  
const sampleData = ['Dermatologica Facial Services','Skin Rejuvination','Therapeutic Facial Services','RF+Cavitation LIPO','Removal/Extraction/Excision','Laser Treatment']

  return (
    <section className='p-5 gap-5 container'>
      <GradientHeader title={'Menu of Services'} />
      <div className='gri gap-4 p-0 container'>
        {
          sampleData.map((data, indx) => (
            <div key={indx} className='p-5 rounded-3 bg-warning w-100 text-center card'>
              <h3>{data}</h3>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Services