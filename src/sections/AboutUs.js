import { Casette, turnTable, Location } from '../assets/images';

const AboutUs = () => {
  return (
    <div className="text-white mt-24 flex flex-row justify-center font-poppins">
      <div className="w-pageW">
      <h1 className="font-bold text-yellow text-5xl mb-10">About Us</h1>
      <div className='flex flex-row'>
        <div className='flex flex-col' style={{ flex: 6 }}>
          <h3 className="font-light text-yellow text-3xl mb-5">Who We Are</h3>
          <div className="w-auto font-merriweather font-thin">
            Established in 1982, we at Dr. Disc are proud to be Windsor's longest-running and most beloved (we hope!) independent music store.
            We carry a huge stock of new and used music of all genres running the gamut from rock, jazz, metal, 
            hip-hop, alternative, and country to pop, punk, new age and classical.
          </div>
        </div>
        <div style={{ flex: 4 }}>
          <img src={turnTable} alt="turnTable" />
        </div>
      </div>
        <div>
          <div className='flex flex-row mt-16'>
            <div className="mt-3" style={{ flex: 5 }}>
              <img src={Location} alt="location" />
            </div>
            <div className='flex flex-col pl-10' style={{ flex: 5 }}>
            <h3 className="font-light text-yellow text-3xl mb-5">Our Location</h3>
            <div className="w-auto font-merriweather font-thin">
              Our location at 471 Ouellette Avenue has two floors loaded with musical delights. New vinyl records & 
              new/used CDs can be found on our main floor. Our second floor is loaded with used vinyl records, 
              cassettes, DVDs and VHS tapes, a wide selection of music and movie posters & miscellaneous fun stuff 
              like music-related books and magazines!
            </div>
            </div>
          </div>
        </div>
          <div className='flex flex-row my-16'>
            <div className='flex flex-col' style={{ flex: 6 }}>
              <h3 className="font-light text-yellow text-3xl mb-5">More Information</h3>
              <div className="w-auto font-merriweather font-thin">
              We get new stock every week, and are happy to look into ordering titles that might not be on-hand. 
              We're avid promoters of Windsor's music scene, and carry CDs and vinyl by local artists, 
              host in-store performances, and sell tickets for shows at local venues. We also carry gift cards in 
              any denomination.
              </div>
            </div>
            <div style={{ flex: 4 }}>
              <img src={Casette} alt="casette" />
            </div>
          </div>
        </div>
    </div>

  )
}

export default AboutUs