const [flightData, setFlightData] = useState([]);

// Fetch flight data from JSON file
useEffect(() => {
  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      setFlightData(data);
    });
}, []);

<table className="border-collapse border border-gray-900 w-full">
  <thead>
    <tr>
      <th className="border border-gray-900 px-4 py-2">FLIGHT</th>
      <th className="border border-gray-900 px-4 py-2">AIRCRAFT</th>
      <th className="border border-gray-900 px-4 py-2">CLASS</th>
      <th className="border border-gray-900 px-4 py-2">FARE</th>
      <th className="border border-gray-900 px-4 py-2">ROUTE</th>
      <th className="border border-gray-900 px-4 py-2">DEPARTURE</th>
      <th className="border border-gray-900 px-4 py-2">ARRIVAL</th>
      <th className="border border-gray-900 px-4 py-2">DURATION</th>
      <th className="border border-gray-900 px-4 py-2">PRICE</th>
    </tr>
  </thead>
  <tbody>
    {flightData.map((flight, index) => (
      <tr key={index}>
        <td className="border border-gray-900 px-4 py-2">{flight.FLIGHT}</td>
        <td className="border border-gray-900 px-4 py-2">{flight.AIRCRAFT}</td>
        <td className="border border-gray-900 px-4 py-2">{flight.CLASS}</td>
        <td className="border border-gray-900 px-4 py-2">
          {flight.marketingCarrier}
        </td>
        <td className="border border-gray-900 px-4 py-2">{flight.ROUTE}</td>
        <td className="border border-gray-900 px-4 py-2">{flight.departure}</td>
        <td className="border border-gray-900 px-4 py-2">{flight.arrival}</td>
        <td className="border border-gray-900 px-4 py-2">{flight.DURATION}</td>
        <td className="border border-gray-900 px-4 py-2">{flight.PRICE}</td>
      </tr>
    ))}
  </tbody>
</table>;

// //////////////////////////////////////
<div className="flight-data">
  {flightData.map((offer, index) => (
    <div key={index} className="flight-offer">
      <h3>Flight Offer {index + 1}</h3>
      <p>Price: {offer.price}</p>
      <p>Fare Basis: {offer.fareBasis[0][0]}</p>{" "}
      {/* Access the first element of nested array */}
      <p>Class: {offer.class[0][0]}</p>{" "}
      {/* Access the first element of nested array */}
      <p>Seat: {offer.seat[0][0]}</p>{" "}
      {/* Access the first element of nested array */}
      {/* Iterate over itineraries */}
      {offer.itineraries.map((itinerary, i) => (
        <div key={i} className="itinerary">
          <h4>Itinerary {i + 1}</h4>
          <p>Duration: {itinerary.duration}</p>
          {/* Iterate over segments */}
          {itinerary.segments.map((segment, j) => (
            <div key={j} className="segment">
              <p>Segment {j + 1}</p>
              <p>
                Departure: {segment.departure.iataCode} - {segment.departure.at}
              </p>
              <p>
                Arrival: {segment.arrival.iataCode} - {segment.arrival.at}
              </p>
              <p>Marketing Carrier: {segment.marketingCarrier}</p>
              <p>Carrier Code: {segment.carrierCode}</p>
              <p>Flight Number: {segment.flightNumber}</p>
              <p>Aircraft: {segment.aircraft}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  ))}
</div>;
