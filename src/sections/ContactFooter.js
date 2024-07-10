import { contactVinyls } from '../assets/images';

const ContactFooter = () => {
  return (
<div className="mt-2 flex flex-row justify-center ">
  <div className="max-w-fullPage w-full mx-auto">
    <div className="flex flex-row text-gray font-merriweather mt-2 mb-10 leading-loose">
      <div className="flex max-w-fullPage w-full">
        <div className="flex flex-col">
          <div className="font-poppins font-bold mr-5 text-yellow text-4xl">Contact & Hours</div>
          <p className="w-contact pr-4 pl-2 "> 
            471 Ouellette Ave. Windsor, Ontario CA<br />
            drdiscrecords@hotmail.com<br />
            (519)-253-9744<br />
            Monday - Saturday: 11am - 6pm<br />
            Sunday: 12pm - 5pm<br />
          </p>
        </div>
        <img src={contactVinyls} className="h-conImageH flex-grow align-center" alt="vinyls" />
      </div>
    </div>
  </div>
</div>
  )
}

export default ContactFooter