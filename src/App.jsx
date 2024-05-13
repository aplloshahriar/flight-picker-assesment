import { useEffect } from "react";
import { useState } from "react";
import { FaBell } from "react-icons/fa";

const App = () => {
  const [flightData, setFlightData] = useState([]);

  // fetch flight data from JSON file
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setFlightData(data.flightOffer);
        console.log(data.flightOffer);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto">
      {/* nav bar*/}
      <nav className="bg-cyan-950 text-white flex justify-between items-center p-4">
        <ul className="flex gap-x-8 ms-36 text-sm ">
          <li>Dashboard </li>
          <li>Master Price</li>
          <li>Custom Price</li>
          <li> Calendar</li>
          <li>Reports</li>
        </ul>
        <div className="flex items-center mr-36">
          <h2 className="mr-4">
            <FaBell />
          </h2>
          <img className="rounded-full h-8 w-8 bg-white" src="" alt="" />
        </div>
      </nav>
      <h2 className="font-semibold text-2xl ms-36">Master Price</h2>
      <hr />
      <div className="flex justify-center mb-4">
        <div className="border border-black p-1 text-xs mt-2 w-64 h-8">
          <div className="flex justify-between">
            <button className="px-1 py-1 flex items-center">
              Round Trip
              <div className="border-l border-black h-3 mx-1"></div>
            </button>
            <button className="px-1 py-1 bg-blue-900 text-white flex items-center">
              One Way
              <div className="border-l border-black h-3 mx-1"></div>
            </button>
            <button className="px-1 py-1 flex items-center">Multi-city</button>
          </div>
        </div>
      </div>

      <div className="ms-36 mr-48">
        <hr />
        {/* form starts here */}
        <form className="flex mt-4 mb-4 ">
          <input
            type="text"
            placeholder="Start Point"
            className="border border-gray-900 p-1 mr-2"
          />
          <input
            type="text"
            placeholder="End Point"
            className="border border-gray-900 p-1 mr-2"
          />
          <input type="date" className="border border-gray-900 p-1 mr-2" />
          <select className="border border-gray-900 p-1 mr-2">
            <option value="">Day</option>
            <option value="option1">Saturday</option>
            <option value="option2"> Sunday</option>
            <option value="option3">Monday</option>
            <option value="option4">Tuesday</option>
            <option value="option5">Wednesday</option>
            <option value="option6">Thursday</option>
            <option value="option7">Friday</option>
          </select>
          <select className="border border-gray-900 p-1 mr-2">
            <option value="">Day+</option>
            <option value="option1">Saturday</option>
            <option value="option2"> Sunday</option>
            <option value="option3">Monday</option>
            <option value="option4">Tuesday</option>
            <option value="option5">Wednesday</option>
            <option value="option6">Thursday</option>
            <option value="option7">Friday</option>
          </select>

          <select className="border border-gray-900 p-1 mr-2">
            <option value="">Any time </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

          <h2 className="ms-2 mr-2">+</h2>

          <select className="border border-gray-900 p-1 mr-2">
            <option value="">ADT</option>
            <option value="option1">ADT</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

          <select className="border border-gray-900 p-1">
            <option value="">1 </option>
            <option value="option1"> 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <h2 className="ms-2">+</h2>
        </form>
        <hr />

        {/* some options part*/}
        <div className="flex items-center justify-between font-semibold  my-4">
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label htmlFor="checkbox">Extra Options</label>
          </div>

          <div className="flex items-center">
            <h2 className="mr-2">Environment</h2>
            <input type="radio" id="radio1" name="radio" className="mr-1" />
            <label htmlFor="radio1">Dummy</label>
            <input
              type="radio"
              id="radio2"
              name="radio"
              className="ml-4 mr-1"
            />
            <label htmlFor="radio2">PDT</label>
          </div>

          <button className="bg-blue-950 rounded-md mr-12  text-white ps-2 pr-2 ">
            Search
          </button>
        </div>
        <hr />
        <h2 className="font-semibold mb-4 ">
          {flightData.length > 0 ? "Data Parsed Successfully" : ""}
        </h2>

        {/* display flight data here */}
        <table className="  ">
          <thead className="bg-gray-300 text-slate-500">
            <tr>
              <th className=" px-4 py-2">FLIGHT</th>
              <th className=" px-4 py-2">AIRCRAFT</th>
              <th className=" px-4 py-2">CLASS</th>
              <th className=" px-4 py-2">FARE</th>
              <th className=" px-4 py-2">ROUTE</th>
              <th className=" px-4 py-2">DEPARTURE</th>
              <th className=" px-4 py-2">ARRIVAL</th>
              <th className=" px-4 py-2"></th>
              <th className=" px-4 py-2">DURATION</th>
              <th className=" px-4 py-2">PRICE</th>
            </tr>
          </thead>
          <tbody>
            {flightData.map((offer, index) => (
              <tr key={index} className="bg-gray-100 text-slate-500">
                {/* flight */}
                <td className=" px-4 py-2 ">
                  {offer.itineraries[0].segments[0].marketingCarrier}
                  {offer.itineraries[0].segments[0].aircraft}
                  <br />
                  {offer.itineraries[0].segments[1].carrierCode}
                  {offer.itineraries[0].segments[1].aircraft}
                </td>
                {/* aircraft */}
                <td className=" px-4 py-2">
                  {offer.itineraries[0].segments[0].flightNumber} <br />
                  {offer.itineraries[0].segments[1].flightNumber}
                </td>
                {/* class */}
                <td className=" px-4 py-2">
                  {offer.class[0][0]} <br />
                  {offer.class[0][1]}
                </td>
                {/* fare */}
                <td className=" px-4 py-2">
                  {offer.fareBasis[0][0]} <br />
                  {offer.fareBasis[0][1]}
                </td>
                {/* route */}
                <td className=" px-4 py-2">
                  {offer.itineraries[0].segments
                    .map((segment) => segment.departure.iataCode)
                    .join(" - ")}{" "}
                  <br />
                  {offer.itineraries[0].segments
                    .map((segment) => segment.arrival.iataCode)
                    .join(" - ")}
                </td>
                {/* departure */}
                <td className=" px-4 py-2">
                  {offer.itineraries[0].segments[0].departure.at} <br />
                  {offer.itineraries[0].segments[1].departure.at}
                </td>
                {/* arrival */}
                <td className=" px-4 py-2">
                  {/* {
                  offer.itineraries[0].segments[
                    offer.itineraries[0].segments.length - 1
                  ].arrival.at
                } */}
                  {offer.itineraries[0].segments[0].arrival.at} <br />
                  {offer.itineraries[0].segments[1].arrival.at}
                </td>
                <td>
                  ---
                  <br /> ---
                </td>

                {/* duration */}
                <td className=" px-4 py-2">
                  {offer.itineraries[0].duration} <br />
                  <br />
                </td>

                {/* price */}
                <td className=" px-4 py-2">
                  {offer.price} <br />
                  {/* button */}
                  <button className="bg-blue-950 text-white text-sm rounded-sm ps-2 pr-2">
                    SELECT
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
