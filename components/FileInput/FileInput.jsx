import Dropzone from 'react-dropzone';
import { Controller } from 'react-hook-form';
import { FaCloudUploadAlt, FaFileAlt } from 'react-icons/fa';
import styles from './FileInput.module.css';

export const FileInput = ({ control, name }) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, onBlur, name, value } }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <div className={styles.dropzone} {...getRootProps()}>
                <input
                  name={name}
                  onBlur={onBlur}
                  multiple='false'
                  accept='.jpg, .png'
                  {...getInputProps()}
                />
                <div>
                  <FaCloudUploadAlt />
                </div>
                <div>Drop files here or click to browse files</div>
              </div>
            )}
          </Dropzone>
          {value.length ? (
            <div className={styles.uploaded_file}>
              <div className={styles.file_icon}>
                <FaFileAlt />
              </div>
              <div>
                <div>{value[0].name}</div>
                <div>{value[0].size}</div>
              </div>
            </div>
          ) : null}
        </>
      )}
    />
  );
};
