
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
          <label><input type="radio" name="travelNext" value="1-3 months" /> 1 – 3 months</label><br />
          <label><input type="radio" name="travelNext" value="3-6 months" /> 3 – 6 months</label><br />
          <label><input type="radio" name="travelNext" value="6-12 months" /> 6 – 12 months</label><br />
          <label><input type="radio" name="travelNext" value="more than a year" /> More than a year</label>
        </div>

        <h2 className="text-xl font-semibold mb-2">3. How far in advance do you normally book your trips?</h2>
        <div className="mb-4">
          <label><input type="radio" name="bookingAdvance" value="1-3 months" /> 1 – 3 months</label><br />
          <label><input type="radio" name="bookingAdvance" value="3-6 months" /> 3 – 6 months</label><br />
          <label><input type="radio" name="bookingAdvance" value="6-12 months" /> 6 – 12 months</label><br />
          <label><input type="radio" name="bookingAdvance" value="more than a year" /> More than a year</label>
        </div>
</form>
      <h2 class="text-xl font-semibold mb-2">5. What region of the world is your most favorite place to travel?</h2>
<div class="mb-4 grid grid-cols-2 gap-4">
  <div>
    <label><input type="checkbox" name="region" value="North America" /> North America</label><br />
    <label><input type="checkbox" name="region" value="Central America" /> Central America</label><br />
    <label><input type="checkbox" name="region" value="Europe" /> Europe</label><br />
    <label><input type="checkbox" name="region" value="Asia" /> Asia</label><br />
    <label><input type="checkbox" name="region" value="Orient" /> Orient</label>
  </div>
  <div>
    <label><input type="checkbox" name="region" value="South America" /> South America</label><br />
    <label><input type="checkbox" name="region" value="Africa" /> Africa</label><br />
    <label><input type="checkbox" name="region" value="Middle East" /> Middle East</label><br />
    <label><input type="checkbox" name="region" value="Pacific" /> Pacific</label><br />
    <label>Other <input type="text" name="regionOther" class="border rounded-xl p-1" /></label>
  </div>
</div>

<h2 class="text-xl font-semibold mb-2">6. What hotel accommodations do you usually look for when travelling?</h2>
<div class="mb-4">
  <label><input type="radio" name="hotel" value="Budget" /> Budget</label><br />
  <label><input type="radio" name="hotel" value="2 Star" /> 2 Star</label><br />
  <label><input type="radio" name="hotel" value="3 Star" /> 3 Star</label><br />
  <label><input type="radio" name="hotel" value="4 Star" /> 4 Star</label><br />
  <label><input type="radio" name="hotel" value="5 Star" /> 5 Star</label>
</div>

<h2 class="text-xl font-semibold mb-2">7. What activity level is most desired when traveling?</h2>
<div class="mb-4">
  <label><input type="radio" name="activity" value="Active" /> Active – includes cycling, hiking, and mountain climbing</label><br />
  <label><input type="radio" name="activity" value="Moderate" /> Moderate activity – includes walking, exploration</label><br />
  <label><input type="radio" name="activity" value="Low" /> Low activity – includes light walking, lectures</label>
</div>

    </div>
  );
};

export default App
