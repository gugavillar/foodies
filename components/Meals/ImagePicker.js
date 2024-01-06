'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'

import styles from './ImagePicker.module.css'

export const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState(null)
  const inputImageRef = useRef()

  const handleClick = () => {
    inputImageRef.current.click()
  }

  const handleChangeInput = (event) => {
    const [file] = event.target.files

    if (!file) return setPickedImage(null)

    const fileReader = new FileReader()

    fileReader.onload = () => {
      setPickedImage(fileReader.result)
    }

    fileReader.readAsDataURL(file)
  }

  return (
    <div className={styles.picker}>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage ? (
            <p>No image picked yet.</p>
          ) : (
            <Image
              fill
              src={pickedImage}
              alt="The image selected by user."
            />
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          accept="image/png, image/jpeg"
          id={name}
          name={name}
          ref={inputImageRef}
          onChange={handleChangeInput}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handleClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  )
}
