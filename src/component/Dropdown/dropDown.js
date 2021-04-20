import React,{useState} from 'react'
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
const DropDown = () => {

    const [states, setState] = useState(null);


   const handleChange = (e) => {
        setState({states});
        console.log(`Option selected:`, states);
      };
    return (
        
        <div>
            <h1>Hello</h1>

            <Select
        value={states.value}
        onChange={handleChange}
        options={options}
      />
        </div>
    )
}

export default DropDown



// import React from 'react';
// import Select from 'react-select';

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' },
// ];

// class DropDown extends React.Component {
//   state = {
//     selectedOption: null,
//   };
//   handleChange = selectedOption => {
//     this.setState({ selectedOption });
//     console.log(`Option selected:`, selectedOption);
//   };
//   render() {
//     const { selectedOption } = this.state;

//     return (
//       <Select
//       styles={{width:"100px"}}
//         value={selectedOption}
//         onChange={this.handleChange}
//         options={options}
//       />
//     );
//   }
// }

// export default DropDown