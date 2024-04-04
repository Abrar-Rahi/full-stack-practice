import React, { useEffect, useState } from 'react'
import { Select } from 'antd';
import axios from 'axios';

const AddSubCategory = () => {

  let [allCat,setAllCat]= useState([])

  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };
  
  // Filter `option.label` match the user type `input`
  const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

    useEffect(()=>{

      async function allCat(){
       let data = await axios.get("http://localhost:8000/api/v1/product/allCategory")
       
       console.log(data);
       let arr = []
       data.data.map(item =>{
        arr.push({
          value: item._id,
          label: item.categoryName,
        })
        setAllCat(arr)
       })
      }
      allCat()
    },[])

  return (
    <Select
    showSearch
    placeholder="Select a Category"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={allCat}
  />
  )
}

export default AddSubCategory