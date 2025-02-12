
// function App() {
//     return (
//       <>
//       <h3> 1. Contact Information </h3>
//       <form> 
//         <label> Name: <input type='text' /> </label>
//         <label>Title: <input type='text' /> </label><br />
//         <label>Phone: <input type='number'/> </label>
//         <label>Fax:<input type='number'/> </label><br />
//         <label>Email: <input type='email' /> </label>
//         <label>Address: <input type='text' /> </label><br />
//       </form>
//       <form>

//       </form>
//       </>
//     )
// }

import React from 'react';

const App = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold mb-4">Travel Survey Questionnaire</h1>
      <p className="mb-6">Please complete the following questionnaire as accurately as possible and then return to [XYZ Travel Agency]</p>
      <form>
        <h2 className="text-xl font-semibold mb-2">1. Contact Information</h2>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="p-2 border rounded-xl" />
          <input type="text" placeholder="Title" className="p-2 border rounded-xl" />
          <input type="text" placeholder="Phone" className="p-2 border rounded-xl" />
          <input type="text" placeholder="Fax" className="p-2 border rounded-xl" />
          <input type="email" placeholder="Email" className="p-2 border rounded-xl" />
          <input type="text" placeholder="Address" className="p-2 border rounded-xl col-span-2" />
        </div>

        <h2 className="text-xl font-semibold mb-2">2. When do you plan to travel next?</h2>
        <div className="mb-4">
          <label><input type="radio" name="travelNext" value="1-3 months" /> 1 - 3 months</label><br />
          <label><input type="radio" name="travelNext"value="3-6 months" /> 3 - 6 months</label><br />
          <label><input type="radio" name="travelNext"value="6-12 months" /> 6 - 12 months</label><br />
          <label><input type="radio" name="travelNext" value="more than a year" /> More than a year</label>
        </div>

        <h2 className="text-xl font-semibold mb-2">3. How far in advance do you normally book your trips?</h2>
        <div className="mb-4">
          <label><input type="radio" name="advanceBook" value="1-3 months" /> 1 - 3 months</label><br />
          <label><input type="radio" name="advanceBook"value="3-6 months" /> 3 - 6 months</label><br />
          <label><input type="radio" name="advanceBook" value="6-12 months" /> 6 - 12 months</label><br />
          <label><input type="radio" name="advanceBook" value="more than a year" /> More than a year</label>
        </div>

        <h2 className="text-xl font-semibold mb-2">4. What time of the year do you normally prefer to travel?</h2>
        <div className="mb-4">
          <label><input type="radio" name="travelTime" value="1-3 months" />Spring</label><br />
          <label><input type="radio" name="travelTime" value="3-6 months" />Summer</label><br />
          <label><input type="radio" name="travelTime" value="6-12 months" />Fall</label><br />
          <label><input type="radio" name="travelTime" value="more than a year" />Winter</label>
        </div>
        
        <h2 class="text-xl font-semibold mb-2">5. What region of the world is your most favorite place to travel?</h2>
        <div class="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label><input type="checkbox" name="faveRegion" value="North America" /> North America</label><br />
            <label><input type="checkbox" name="faveRegion" value="Central America" /> Central America</label><br />
            <label><input type="checkbox" name="faveRegion" value="Europe" /> Europe</label><br />
            <label><input type="checkbox" name="faveRegion"value="Asia" /> Asia</label><br />
            <label><input type="checkbox" name="faveRegion" value="Orient" /> Orient</label>
          </div>
          <div>
            <label><input type="checkbox" name="faveRegion" value="South America" /> South America</label><br />
            <label><input type="checkbox" name="faveRegion" value="Africa" /> Africa</label><br />
            <label><input type="checkbox" name="faveRegion" value="Middle East" /> Middle East</label><br />
            <label><input type="checkbox" name="faveRegion"value="Pacific" /> Pacific</label><br />
            <label>Other <input type="text" name="regionOther" class="border rounded-xl p-1" /></label>
          </div>
        </div>

        <h2 class="text-xl font-semibold mb-2">6. What hotel accommodations do you usually look for when travelling?</h2>
        <div class="mb-4">
          <label><input type="radio" name="hotelLook"value="Budget" /> Budget</label><br />
          <label><input type="radio" name="hotelLook"value="2 Star" /> 2 Star</label><br />
          <label><input type="radio" name="hotelLook"value="3 Star" /> 3 Star</label><br />
          <label><input type="radio" name="hotelLook"value="4 Star" /> 4 Star</label><br />
          <label><input type="radio" name="hotelLook"value="5 Star" /> 5 Star</label>
        </div>

        <h2 class="text-xl font-semibold mb-2">7. What activity level is most desired when traveling?</h2>
        <div class="mb-4">
          <label><input type="radio" name="activityLevel"value="Active" /> Active - includes cycling, hiking, and mountain climbing</label><br />
          <label><input type="radio" name="activityLevel"value="Moderate" /> Moderate activity - includes walking, exploration</label><br />
          <label><input type="radio" name="activityLevel"value="Low" /> Low activity - includes light walking, lectures</label>
        </div>

        <h2 class="text-xl font-semibold mb-2">8. What do you most look for as far as activities when traveling?</h2>
          <div class="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label><input type="checkbox" name="travelActivity" value="History" />History</label><br />
              <label><input type="checkbox" name="travelActivity" value="Art" /> Art</label><br />
              <label><input type="checkbox" name="travelActivity" value="Wildlife" /> Wildlife</label><br />
              <label><input type="checkbox" name="travelActivity"value="Nature" /> Nature</label>
            </div>
            <div>
              <label><input type="checkbox" name="travelActivity" value="Local culture" /> Local culture</label><br />
              <label><input type="checkbox" name="travelActivity" value="Food" /> Food</label><br />
              <label><input type="checkbox" name="travelActivity" value="Science" /> Science</label><br />
              <label>Other <input type="text" name="activityOther" class="border rounded-xl p-1" /></label>
            </div>
          </div>
        
        <h2 className="text-xl font-semibold mb-2">9.Do you use travel related sites when booking travel? These include sites for airline tickets, cruises, car rentals (examples: Expedia or Travelocity).</h2>
        <div className="mb-4">
          <label><input type="radio" name="travelSite" value="Yes"  /> Yes</label>
          <label><input type="radio" name="travelSite" value="No" class='ml-4'/> No</label >
        </div>

        <h2 className="text-xl font-semibold mb-2">10.Do you travel mostly for business or pleasure? </h2>
        <div className="mb-4">
          <label><input type="radio" name="travelFor" value="Business"  /> Business</label>
          <label><input type="radio" name="travelFor" value="Pleasure" class='ml-4' /> Pleasure</label>
          <label><input type="radio" name="travelFor" value="Both" class='ml-4' /> Both</label>
        </div>

        <h2 class="text-xl font-semibold mb-2">11. What are your usual reasons to travel?</h2>
          <div class="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label><input type="checkbox" name="travelReasons" value="Company Business" /> Company Business</label><br />
              <label><input type="checkbox" name="travelReasons" value="Military" /> Military</label><br />
              <label><input type="checkbox" name="travelReasons" value="Resort vacation" /> Resort vacation</label><br />
              <label><input type="checkbox" name="travelReasons"value="Visit friends or relatives" /> Visit friends or relatives</label>
            </div>
            <div>
              <label><input type="checkbox" name="travelReasons" value="Personal trip" /> Personal trip</label><br />
              <label><input type="checkbox" name="travelReasons" value="Cruise" /> Cruise</label><br />
              <label><input type="checkbox" name="travelReasons" value="Relocating" /> Relocating</label>
            </div>
          </div>

        <h2 className="text-xl font-semibold mb-2">12.When it comes to airports, which do you dread dealing with the most? </h2>
        <div class="mb-4">
          <label><input type="radio" name="dreadDealing" value="Ticket counter" /> Ticket counter</label>< br/>
          <label><input type="radio" name="dreadDealing" value="Curbside baggage check in" /> Curbside baggage check in</label >< br/>
          <label><input type="radio" name="dreadDealing" value="Security checkpoint" /> Security checkpoint</label >< br/>
          <label><input type="radio" name="dreadDealing" value="Boarding gate" /> Boarding gate</label >< br/>
          <label><input type="radio" name="dreadDealing" value="Airline boarding" /> Airline boarding</label >< br/>
        </div>

        <h2 className="text-xl font-semibold mb-2">13. What mode of transportation do you use for traveling purposes?</h2>
        <div class="mb-4">
          <label><input type="checkbox" name="transportationMode" value="Airline" /> Airline</label>< br/>
          <label><input type="checkbox" name="transportationMode" value="Train" /> Train</label >< br/>
          <label><input type="checkbox" name="transportationMode" value="Car" /> Car</label >< br/>
          <label><input type="checkbox" name="transportationMode" value="Boat" /> Boat</label >< br/>
          <label><input type="checkbox" name="transportationMode" value="Motorcycle" /> Motorcycle</label >
        </div>

      </form>
    </div>
  );  
};

export default App
