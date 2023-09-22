import { ChangeEvent, useState } from 'react';
import { profileDetailsProps } from '../../../interfaces';

import styles from './ProfileDetails.module.scss';

export const ProfileDetailsForm = (props: profileDetailsProps) => {
  const { heading, headingInstructions } = props;

  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const onUploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files as FileList;
    if (files && files.length !== 0) {
      setProfilePicture(files[0]);
    }
  };
  return (
    <section className={styles.profileDetails}>
      <header>
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles['heading-instructions']}>{headingInstructions}</p>
      </header>

      {profilePicture && (
        <div>
          <img
            alt='not found'
            width={'250px'}
            src={URL.createObjectURL(profilePicture)}
          />
          <br />
          <button onClick={() => setProfilePicture(null)}>Remove</button>
        </div>
      )}

      <br />
      <br />

      <input type='file' name='myImage' onChange={onUploadFile} />
    </section>
  );
};
