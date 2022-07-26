export default function ValuesSection() {

  return (
    <section className="p-4 pt-8 pb-12 md:px-[54px] md:pt-16 md:pb-24 lg:px-[100px] lg:pt-24 lg:pb-32 grid gap-8 md:gap-16 lg:gap-32">
      <h2 className="text-center text-[28px] md:text-[40px] lg:text-5xl">Our <span className="text-nicholson-blue-500 underline underline-offset-2 decoration-nicholson-green-500">Values</span></h2>
      <Card 
        title="Serve"
        description="For our team of expert advisors, customer service is of the highest importance. Our top priority is to create a streamlined and individual experience for every customer. We know that no two families, businesses, or homes are alike, which is why we tailor our services to meet your unique needs. We seek to truly understand what is important to you so that we can protect what matters most. Every client becomes part of our family, which means you can count on us to be there for you whenever you need us, no matter what."
        image="https://media.nicholson-insurance.com/images/team/team-wave-1-edited" 
      />
      <Card 
        title="Protect"
        description="Our primary goal is to protect the community we love. With that, we specifically want to protect what matters to you and your loved ones. The investments you have made in your life and in our community are valuable, and when disaster strikes, we want you to feel confident that the things you have worked for are protected. With custom insurance options coupled with our extensive industry knowledge, we can help navigate and provide the right insurance solutions to protect your family, your accomplishments, and your livelihood. "
        image="https://media.nicholson-insurance.com/images/team/centralia-group-photo" 
        even={true}
      />
      <Card 
        title="Connect"
        description="The heart of Nicholson & Associates is community. As a locally owned and operated independent insurance agency, we want to see our community thrive and actively seek ways to bring growth and prosperity to others. We understand the value our diverse neighbors provide and are proud to support their efforts to create positive change in all of our lives. By connecting meaningfully with surrounding organizations, businesses, and families, we can help foster success in the lives of those that make our community great."
        image="https://media.nicholson-insurance.com/images/team/olympia-group-photo"
      />
    </section>
  )
}

function Card({ title, description, image, className, even = false }) {
  return (
    <div className={`card w-full border-nicholson-blue-500 border-[3px] rounded-md grid lg:flex max-w-[1529px] ${even && 'lg:justify-self-end'} ${className}`}>
      <div className={`bg-nicholson-blue-500 grid place-items-center p-4 md:p-8 lg:p-10 ${even && 'lg:order-2'}`}>
        <picture>
          <source srcSet={`${image}?w=1200`} media="(min-width: 768px)" />
          <img src={`${image}?w=622`} alt="" width="311" height="175" className="rounded-sm w-full aspect-[4/3] object-cover" />
        </picture>
      </div>
      <div className="p-4 md:p-8 grid gap-4 md:gap-8 lg:gap-0 justify-center justify-items-center relative w-full">
        <div className="grid justify-center relative lg:-top-[72px] lg:bg-white lg:px-8">
          <h3 className="uppercase tracking-[1.75px] text-[19px] md:text-[32px] lg:text-5xl font-semibold text-nicholson-blue-500 text-center w-full absolute top-2.5 md:top-0 lg:top-3 z-10">{title}</h3>
          <p className="uppercase tracking-[5.25px] text-[32px] md:text-5xl lg:text-7xl font-semibold text-[#EFF4Fa] blur-[2px]">{title}</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

