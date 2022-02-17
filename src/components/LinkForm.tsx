import React, { useState } from "react";
import { ILinks } from "../interfaces/i-links";

const LinkForm = (props: any) => {

  const initialStateValues: ILinks = {
    url: '',
    name: '',
    description: ''
  }

  const [values, setValues] = useState<ILinks>(initialStateValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setValues({...values, [name]: value,});
  }
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.addOrEditLink(values);
    setValues({...initialStateValues})
  }

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div className="form-group input-group p-2">
        <div className="input-group-text bg-light">
            <i className="material-icons">insert_link</i>
        </div>
        <input type="text" value={values.url} onChange={handleInputChange} className="form-control" placeholder="https://someurl.com" name="url" />
      </div>

      <div className="form-group input-group p-2">
        <div className="input-group-text bg-light">
            <i className="material-icons">create</i>
        </div>
        <input type="text" value={values.name} onChange={handleInputChange} className="form-control" placeholder="Website name" name="name" />
      </div>

      <div className="form-group p-2">
        <textarea name="description" value={values.description} onChange={handleInputChange} rows={3} className="form-control" placeholder="Enter a description" ></textarea>
      </div>

      <button className="btn btn-primary btn-block">Save</button>

    </form>
  )
}

export default LinkForm;