import React, { useState } from 'react'

import styles from './styles.module.css'

const FormComp = (props) => {
  const { onSubmitProp, errors } = props
  const [note, setNote] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitProp({ note })
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.centerNoteForm}>
        {errors.map((err, index) => <p key={index}>{err}</p>)}
        
        <p className="mb-4">
          <textarea rows="6" cols="100" type="text" onChange={(e) => setNote(e.target.value)} value={note} />
        </p>

        <input className={styles.edit} type="submit" value="Add Note" />
      </form>
    </div>
  )
}

export default FormComp