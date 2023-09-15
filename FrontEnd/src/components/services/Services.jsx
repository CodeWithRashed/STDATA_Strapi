import Card from './ServiceCard'
const Services = () => {
  return (
    <div  className=' px-[10%] py-[100px] bg-[#1a1f25] font-poppins text-white'>
      <div className="title text-center p-10">
        <h1 className='text-4xl'>Our <span className='text-[#ff4151]'>Services</span></h1>
      </div>
      <div className="card-container  grid gird-cols1 lg:grid-cols-3 justify-center items-center gap-6">
      <Card icon="web" service_name="Web Development" description="web"/>
      <Card icon="design" service_name="Web Design" description="design"/>
      <Card icon="marketing" service_name="Digital Marketing" description="marketing"/>
      <Card icon="dataEntry" service_name="Data Entry" description="dataEntry"/>
      </div>
     
    </div>
  )
}

export default Services
