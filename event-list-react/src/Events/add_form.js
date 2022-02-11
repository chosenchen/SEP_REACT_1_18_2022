import React from 'react';

class AddForm extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const {setAdding} = this.props;
    return (
      <tr>
        <td><input name='eventName' className='input-box' type='text'/></td>
        <td><input name='startDate' className='input-box' type='date'/></td>
        <td><input name='endDate' className='input-box' type='date'/></td>
        <td className='action-btns'>
          <input type='submit' className='buttons add-btn' value="ADD" />
          <input type='button' className='buttons close-btn' defaultValue="CLOSE" onClick={setAdding}/>
        </td>
      </tr>
    )
  }
}

export default AddForm;