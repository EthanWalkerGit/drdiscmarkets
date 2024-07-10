import '../index.css';

const ContactUs = () => {
  return (
    <div className="text-white mt-24 flex flex-row justify-center font-poppins">
      <div className="w-pageW">
        <div className='flex flex-row h-frImageH mr-5'>
          <div className='flex flex-col' style={{ flex: 5.5 }}>
          <h1 className="font-bold text-yellow text-5xl mb-8">Contact Us</h1>
            <p className="w-auto font-merriweather font-thin">
              Get in touch, our team would love to hear from you and discuss any questions or concerns.
            </p>
            <h3 className="font-light text-yellow text-4xl mb-5 mt-8">Contact Information</h3>
            <ul className="font-merriweather font-thin">
              <li className="leading-10">471 Ouellette Ave. Windsor, Ontario CA</li>
              <li className="leading-10 font-bold">Chat With Us</li>
              <li className="leading-10">drdiscrecords@hotmail.com</li>
              <li className="leading-10 font-bold">Give us a Call</li>
              <li className="leading-10">(519)-253-9744</li>
              <li className="leading-10">Monday-Saturday: 11am - 6pm</li>
              <li className="leading-10">Sunday: 12pm - 5pm</li>
            </ul>
          </div>

          <div className="h-frImageH border-2 border-gray rounded-xl bg-card" style={{ flex: 4.5 }}>
            <div className="flex flex-col h-full mx-6">
              <h3 className="font-light text-yellow text-4xl mb-5 mt-6">Give Us a Shout</h3>
              <div className="font-merriweather">
              <p>Reach out at any time via <span className="text-yellow font-bold">drdiscrecords@hotmail.com</span></p>
                <ul>
                  <li className="mb-1 mt-4"><h3>First and Last Name</h3></li>
                    <li className="mb-3"><input className="h-10 border-2 border-gray rounded-md bg-card w-full pl-2 text-sm" type="text" placeholder="Your Name"/></li>
                  <li className="mb-1"><h3>Email</h3></li>
                    <li className="mb-3"><input className="h-10 border-2 border-gray rounded-md bg-card w-full pl-2 text-sm" type="text" placeholder="you@example.com"/></li>
                  <li className="mb-1"><h3>Phone Number</h3></li>
                    <li className="mb-3"><input className="h-10 border-2 border-gray rounded-md bg-card w-full pl-2 text-sm" type="text" placeholder="123-456-7890"/></li>
                  <li className="mb-1"><h3>How can we Help</h3></li>
                    <li className=""><textarea className="h-28 border-2 border-gray rounded-md bg-card w-full pl-2 pt-1 text-sm" type="text" placeholder="Tell us about your problem..."/></li>
                </ul>
              </div>
              <div className="flex h-full justify-end items-end">
                <button className="h-8 w-28 mb-3 bg-yellow text-black font-merriweather font-bold rounded-full">Submit</button>
            </div>
            </div>
          </div>
        </div>
        </div>
    </div>

  )
}

export default ContactUs