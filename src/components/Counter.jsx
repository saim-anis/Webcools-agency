import React from 'react'

const Counter = () => {
  return (
    <div><section className="bg-black">
  <div className="max-w-3xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
    <dl className="grid max-w-3xl gap-8 mx-auto text-[#fd6f00] sm:grid-cols-3">
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">100+</dt>
        <dd className="font-light text-[#fd6f00]">
          Clients
        </dd>
      </div>
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">150+
        </dt>
        <dd className="font-light text-[#fd6f00]">
          Projects Delivered
        </dd>
      </div>
      <div className="flex flex-col items-center justify-center">
        <dt className="mb-2 text-3xl md:text-4xl font-extrabold">99%</dt>
        <dd className="font-light text-[#fd6f00]">
          Satisfaction
        </dd>
      </div>
      
    </dl>
  </div>
</section>
</div>
  )
}

export default Counter