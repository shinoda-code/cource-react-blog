import './Write.css'

function Write() {
  return (
    <div className='write'>
    <img className='writeImg' src="http://placehold.it/500x300/e8117f/fff" alt="" />
     <form className='writeForm'>
      <div className="writeFormGroup">
       <label htmlFor="fileInput">
        <i className="writeIcon fas fa-plus"></i>
       </label>
       <input type="file" id='fileInput' style={{display:"none"}} />
       <input type="text" placeholder='title' className='writeInput' autoFocus={true} />
      </div>
      <div className="writeFormGroup">
        <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
      </div>
      <button className="writeSubmit">Publish</button>
     </form>
    </div>
  )
}

export default Write
