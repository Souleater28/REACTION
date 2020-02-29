import React from "react";
import EventCardListView from "./EventCardListView.js";

class EventCardListContainer extends React.Component {
  state = {
    events: [
      {
        id: 0,
        name: "Birthday",
        general: {
          date: "12-12-2020",
          MaxMembers: 20,
          description: "Arseniy's birthday",
          CurrentMembers: 0
        },
        other: { AmountOfAlcohol: "10liters" }
      },
      {
        id: 1,
        name: "Funeral",
        general: {
          date: "01-01-2021",
          MaxMembers: 10000,
          description: "Death's sweetness",
          CurrentMembers: 0
        },
        other: {
          AmountOfAlcohol: "not limited",
          AmountOfDrugs: "as mucm as you want"
        }
      },
      {
        id: 2,
        name: "Asshole",
        general: {
          date: "always",
          MaxMembers: 8,
          description: "Arseniy Pidor.....Fuck him",
          CurrentMembers: 8
        },
        other: {
          AmountOfAlcohol: "not limited",
          AmountOfDrugs: "as mucm as you want"
        }
      },

      {
        id: 3,
        name: "Funeral",
        general: {
          date: "01-01-2021",
          MaxMembers: 10000,
          description: "Death's sweetness",
          CurrentMembers: 0
        },
        other: {
          AmountOfAlcohol: "not limited",
          AmountOfDrugs: "as mucm as you want"
        }
      },

      {
        id: 4,
        name: "Funeral",
        general: {
          date: "01-01-2021",
          MaxMembers: 10000,
          description: "Death's sweetness",
          CurrentMembers: 0
        },
        other: {
          AmountOfAlcohol: "not limited",
          AmountOfDrugs: "as mucm as you want"
        }
      }
    ]
  };

  render() {
    return <EventCardListView events={this.state.events} />;
  }
}
export default EventCardListContainer;
