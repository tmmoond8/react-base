import React from 'react';

export default (props) => {
  console.log('PAGE A')
  const [value, setValue ] = React.useState('');
  const handelOnChange = (e) => {
    setValue(e.target.value);
  }
  return (
    <div>Page A
      <input value={value} onChange={handelOnChange}/>
      <Sub />
    </div>
  )
}

const Sub = React.memo(function () {
  console.log('SUB')
  return <asdsd></asdsd>
})