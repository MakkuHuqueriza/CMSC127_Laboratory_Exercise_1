const App = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-md">
      <h1 className="text-3xl font-bold mb-4">Travel Survey Questionnaire</h1>
      <p className="mb-6">Please complete the following questionnaire as accurately as possible and then return to [XYZ Travel Agency]</p>
      <form>
        <h2 className="text-xl font-semibold mb-2">1. Contact Information</h2>
        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className="p-2 border rounded-md" />
          <input type="text" placeholder="Title" className="p-2 border rounded-md" />
          <input type="tel" placeholder="Phone" className="p-2 border rounded-md" />
          <input type="text" placeholder="Fax" className="p-2 border rounded-md" />
          <input type="email" placeholder="Email" className="p-2 border rounded-md" />
          <input type="text" placeholder="Address" className="p-2 border rounded-md col-span-2" />
        </div>

        <h2 className="text-xl font-semibold mb-2">2. When do you plan to travel next?</h2>
        <div className="mb-4">
          <label><input type="radio" name="travelNext" value="1-3 months" /> 1 - 3 months</label><br />
          <label><input type="radio" name="travelNext" value="3-6 months" /> 3 - 6 months</label><br />
          <label><input type="radio" name="travelNext" value="6-12 months" /> 6 - 12 months</label><br />
          <label><input type="radio" name="travelNext" value="more than a year" /> More than a year</label>
        </div>

        <h2 className="text-xl font-semibold mb-2">3. How far in advance do you normally book your trips?</h2>
        <div className="mb-4">
          <label><input type="radio" name="advanceBook" value="1-3 months" /> 1 - 3 months</label><br />
          <label><input type="radio" name="advanceBook" value="3-6 months" /> 3 - 6 months</label><br />
          <label><input type="radio" name="advanceBook" value="6-12 months" /> 6 - 12 months</label><br />
          <label><input type="radio" name="advanceBook" value="more than a year" /> More than a year</label>
        </div>

        <h2 className="text-xl font-semibold mb-2">4. What time of the year do you normally prefer to travel?</h2>
        <div className="mb-4">
          <label><input type="radio" name="travelTime" value="Spring" /> Spring</label><br />
          <label><input type="radio" name="travelTime" value="Summer" /> Summer</label><br />
          <label><input type="radio" name="travelTime" value="Fall" /> Fall</label><br />
          <label><input type="radio" name="travelTime" value="Winter" /> Winter</label>
        </div>
        
        <h2 className="text-xl font-semibold mb-2">5. What region of the world is your most favorite place to travel?</h2>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label><input type="checkbox" name="faveRegion" value="North America" /> North America</label><br />
            <label><input type="checkbox" name="faveRegion" value="Central America" /> Central America</label><br />
            <label><input type="checkbox" name="faveRegion" value="Europe" /> Europe</label><br />
            <label><input type="checkbox" name="faveRegion" value="Asia" /> Asia</label><br />
            <label><input type="checkbox" name="faveRegion" value="Orient" /> Orient</label>
          </div>
          <div>
            <label><input type="checkbox" name="faveRegion" value="South America" /> South America</label><br />
            <label><input type="checkbox" name="faveRegion" value="Africa" /> Africa</label><br />
            <label><input type="checkbox" name="faveRegion" value="Middle East" /> Middle East</label><br />
            <label><input type="checkbox" name="faveRegion" value="Pacific" /> Pacific</label><br />
            <label>Other <input type="text" name="regionOther" className="border rounded-md p-1" /></label>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-2">6. What hotel accommodations do you usually look for when travelling?</h2>
        <div className="mb-4">
          <label><input type="radio" name="hotelLook" value="Budget" /> Budget</label><br />
          <label><input type="radio" name="hotelLook" value="2 Star" /> 2 Star</label><br />
          <label><input type="radio" name="hotelLook" value="3 Star" /> 3 Star</label><br />
          <label><input type="radio" name="hotelLook" value="4 Star" /> 4 Star</label><br />
          <label><input type="radio" name="hotelLook" value="5 Star" /> 5 Star</label>
        </div>

        <h2 className="text-xl font-semibold mb-2">7. What activity level is most desired when traveling?</h2>
        <div className="mb-4">
          <label><input type="radio" name="activityLevel" value="Active" /> Active - includes cycling, hiking, and mountain climbing</label><br />
          <label><input type="radio" name="activityLevel" value="Moderate" /> Moderate activity - includes walking, exploration</label><br />
          <label><input type="radio" name="activityLevel" value="Low" /> Low activity - includes light walking, lectures</label>
        </div>

        <h2 className="text-xl font-semibold mb-2">8. What do you most look for as far as activities when traveling?</h2>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label><input type="checkbox" name="travelActivity" value="History" /> History</label><br />
            <label><input type="checkbox" name="travelActivity" value="Art" /> Art</label><br />
            <label><input type="checkbox" name="travelActivity" value="Wildlife" /> Wildlife</label><br />
            <label><input type="checkbox" name="travelActivity" value="Nature" /> Nature</label>
          </div>
          <div>
            <label><input type="checkbox" name="travelActivity" value="Local culture" /> Local culture</label><br />
            <label><input type="checkbox" name="travelActivity" value="Food" /> Food</label><br />
            <label><input type="checkbox" name="travelActivity" value="Science" /> Science</label><br />
            <label>Other <input type="text" name="activityOther" className="border rounded-md p-1" /></label>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold mb-2">9. Do you use travel related sites when booking travel? These include sites for airline tickets, cruises, car rentals (examples: Expedia or Travelocity).</h2>
        <div className="mb-4">
          <label><input type="radio" name="travelSite" value="Yes" /> Yes</label>
          <label><input type="radio" name="travelSite" value="No" className="ml-4" /> No</label>
        </div>

        <h2 className="text-xl font-semibold mb-2">10. Do you travel mostly for business or pleasure?</h2>
        <div className="mb-4">
          <label><input type="radio" name="travelFor" value="Business" /> Business</label>
          <label><input type="radio" name="travelFor" value="Pleasure" className="ml-4" /> Pleasure</label>
          <label><input type="radio" name="travelFor" value="Both" className="ml-4" /> Both</label>
        </div>

        <h2 className="text-xl font-semibold mb-2">11. What are your usual reasons to travel?</h2>
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label><input type="checkbox" name="travelReasons" value="Company Business" /> Company Business</label><br />
            <label><input type="checkbox" name="travelReasons" value="Military" /> Military</label><br />
            <label><input type="checkbox" name="travelReasons" value="Resort vacation" /> Resort vacation</label><br />
            <label><input type="checkbox" name="travelReasons" value="Visit friends or relatives" /> Visit friends or relatives</label>
          </div>
          <div>
            <label><input type="checkbox" name="travelReasons" value="Personal trip" /> Personal trip</label><br />
            <label><input type="checkbox" name="travelReasons" value="Cruise" /> Cruise</label><br />
            <label><input type="checkbox" name="travelReasons" value="Relocating" /> Relocating</label>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-2">12. When it comes to airports, which do you dread dealing with the most?</h2>
        <div className="mb-4">
          <label><input type="radio" name="dreadDealing" value="Ticket counter" /> Ticket counter</label><br />
          <label><input type="radio" name="dreadDealing" value="Curbside baggage check in" /> Curbside baggage check in</label><br />
          <label><input type="radio" name="dreadDealing" value="Security checkpoint" /> Security checkpoint</label><br />
          <label><input type="radio" name="dreadDealing" value="Boarding gate" /> Boarding gate</label><br />
          <label><input type="radio" name="dreadDealing" value="Airline boarding" /> Airline boarding</label><br />
        </div>

        <h2 className="text-xl font-semibold mb-2">13. What mode of transportation do you use for traveling purposes?</h2>
        <div className="mb-4">
          <label><input type="checkbox" name="transportationMode" value="Airline" /> Airline</label><br />
          <label><input type="checkbox" name="transportationMode" value="Train" /> Train</label><br />
          <label><input type="checkbox" name="transportationMode" value="Car" /> Car</label><br />
          <label><input type="checkbox" name="transportationMode" value="Boat" /> Boat</label><br />
          <label><input type="checkbox" name="transportationMode" value="Motorcycle" /> Motorcycle</label>
        </div>

        <h2 className="text-xl font-semibold mb-2">14. Who usually accompanies you on vacation?</h2>
        <div className="mb-4">
          <label><input type="checkbox" name="accompanyOnVacation" value="I travel alone" /> I travel alone</label><br />
          <label><input type="checkbox" name="accompanyOnVacation" value="Spouse" /> Spouse</label><br />
          <label><input type="checkbox" name="accompanyOnVacation" value="Children" /> Children</label><br />
          <label><input type="checkbox" name="accompanyOnVacation" value="Spouse and children" /> Spouse and children</label><br />
          <label><input type="checkbox" name="accompanyOnVacation" value="Friends" /> Friends</label><br />
          <label><input type="checkbox" name="accompanyOnVacation" value="Family members" /> Family members</label><br />
          <label>Other <input type="text" name="regionOther" className="border rounded-md p-1" /></label>
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Submit</button> 
      </form>
    </div>
  );  
};

export default App;