import { Item } from "../../functions/map";

export const personal: Item[] = [
     {
        label: "Full Name",
        value: "",
        placeholder: "Full Name",
        inputType: "text",
        fieldType: "input",
        id: "01",
        width: "100%",
    },
     {
        label: "Email",
        value: "",
        placeholder: "example@email.com",
        inputType: "text",
        fieldType: "input",
        id: "02",
        width: "100%",
    }, {
        label: "Phone",
        value: "",
        placeholder: "+233543456",
        inputType: "tel",
        fieldType: "input",
        id: "03",
        width: "100%",
    },{
    value: "",
    id: "04",
       fieldType: "select",
        label: "Level",
        width: "80%",
    options: [{
      value: "HND",
      content: "HND",
      id: "01",
    },{
      value: "Bachelors degree",
      content: "Bachelors degree",
      id: "02",
    },
        {
      value: "Masters",
      content: "Masters",
      id: "03",
    },
        ],
    },
]