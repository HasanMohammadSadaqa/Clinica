import React, { useState } from 'react'
import styles from './styles.module.css'

const FormComp = (props) => {
  const {initNote, onSubmitProp, errors } = props
  const [note, setNote] = useState(initNote)


  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitProp({ note })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        
        <p className={styles.fix}>
          <label className={styles.home} >Add Note here: </label>
          <textarea rows="6" cols="50" type="text" onChange={(e) => setNote(e.target.value)} value={note} />
        </p>

        <input className={styles.edit} type="submit" value="Add" />
      </form>
    </div>
  )
}

export default FormComp