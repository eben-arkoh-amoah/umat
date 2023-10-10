import { Item } from "../../functions/map";

export const momo : Item[]= [
   {
    value: "",
    id: "04",
       fieldType: "select",
        label: "Mobile network",
        width: "90%",
    options: [{
      value: "airtelTigo",
      content: "airtelTigo",
      id: "01",
    },{
      value: "MTN",
      content: "MTN",
      id: "02",
    },
        {
      value: "Vodafonoe",
      content: "Vodafonoe",
      id: "03",
    },
        ],
    }, {
        label: "Your mobile line",
        value: "",
        placeholder: "+233543456",
        inputType: "tel",
        fieldType: "input",
        id: "02",
        width: "100%",
    }
]