import travelPlansData from "../assets/travel-plans.json";
import "./TravelList.css";


function getCostLabel(cost) {
  if (cost <= 350) {
    return "Great Deal"
  } else if (cost >= 1500) {
    return "Premium"
  } else {
    return null;
  }
}


function TravelList() {
  return (
    <div>
      {travelPlansData.map((travelPlan) => {
        return (
          <div className="travel-card" key={travelPlan.id}>
            <img src={travelPlan.image} alt={travelPlan.destination} />
            <div>
              <h2>
                {travelPlan.destination} ({travelPlan.days} Days)
              </h2>
              <em>{travelPlan.description}</em>
              <p>
                <strong>Price:</strong> {travelPlan.totalCost} €
              </p>
              <div className="label">{getCostLabel(travelPlan.totalCost)}</div>
              {travelPlan.allInclusive && <div className="label">All-Inclusive</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TravelList;
