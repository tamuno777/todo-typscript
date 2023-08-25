import * as React from 'react';
import {FC} from 'react';

 interface Info {
    name: string;
    age: number;
    email: string;
}

// export const Persons = (props:Info) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   );
// }
export const Persons:FC <Info>= (props) => {
    const [country, setCountry] = React.useState <string>("")
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.email}</h1>
      <input type="text" placeholder='write your county asap'/>
        {country}
    </div>
  );
}
