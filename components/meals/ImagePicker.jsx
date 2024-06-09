'use client'
import React, { useRef, useState } from 'react'
import styles from './image-picker.module.css'
import Image from 'next/image'

const ImagePicker = ({ label, name }) => {
    const imgInputRef = useRef()
    const [img, setImg] = useState(undefined)
    const [showRemove, setShowRemove] = useState(false)

    const handleUploadImage = () => {
        imgInputRef.current?.click()
    }

    const handleImgChange = event => {
        // gets the files and pick the first one (can do multiple)
        const file = event.target.files[0]
        if (!file) {
            setImg(undefined)
            setShowRemove(false)
            return
        }

        const fileReader = new FileReader()

        // this is what happens ONCE the file has been read on line 25
        fileReader.onload = () => {
            // we set the URL
            setImg(fileReader.result)
        }

        fileReader.readAsDataURL(file)
    }

    const handleRemoveImg = () => {
        setImg(undefined)
        setShowRemove(false)
    }

    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>
                <div
                    className={styles.preview}
                    onMouseEnter={() => setShowRemove(true)}
                    onMouseLeave={() => setShowRemove(false)}
                >
                    {showRemove && img && (
                        <p
                            className={styles.removeBtn}
                            onClick={handleRemoveImg}
                        >
                            {' '}
                            X
                        </p>
                    )}
                    {img ? (
                        <Image src={img} alt='Image selected' fill />
                    ) : (
                        <p>No Image</p>
                    )}
                </div>
                <input
                    ref={imgInputRef}
                    className={styles.input}
                    type='file'
                    id={name}
                    accept='image/png, image/jpg'
                    name={name}
                    onChange={handleImgChange}
                    required
                />
                <button
                    className={styles.button}
                    type='button'
                    onClick={handleUploadImage}
                >
                    Upload an image
                </button>
            </div>
        </div>
    )
}

export default ImagePicker
