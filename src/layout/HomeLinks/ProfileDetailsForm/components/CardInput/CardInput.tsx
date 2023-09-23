import { ChangeEvent, useState } from 'react';
import Card from '../../../../../components/UI/Card/Card';

import styles from './CardInput.module.scss';
import { SVGWrapper } from '../../../../../components/UI/SVGWrapper/SVGWrapper';

interface CardInputImageProps {
  profilePictureImageLabel: string;
  profilePictureImageInstructions: string;
  profilePictureImageIcon: string;
  profilePictureImagePlaceholder: string;
}

export const CardInputImage = ({
  profilePictureImageLabel,
  profilePictureImageInstructions,
  profilePictureImageIcon,
  profilePictureImagePlaceholder,
}: CardInputImageProps) => {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [showIcons, setShowIcons] = useState<boolean>(false);

  const onUploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files as FileList;
    if (files && files.length !== 0) setProfilePicture(files[0]);
  };

  console.log(showIcons);

  const onMouseEnterHandler = () => setShowIcons(true);
  const onMouseLeaveHandler = () => setShowIcons(false);
  const showIconsComponent = !profilePicture || showIcons;
  return (
    <Card priority='grey' className={styles.profilePicture}>
      {/* {profilePicture && (
        <div>
          <img
            alt='not found'
            width={'250px'}
            src={URL.createObjectURL(profilePicture)}
          />
          <button onClick={() => setProfilePicture(null)}>Remove</button>
        </div>
      )} */}

      <p className={styles['profilePicture--label']}>
        {profilePictureImageLabel}
      </p>

      <label className={styles.inputPicture}>
        <input
          type='file'
          name='myImage'
          onChange={onUploadFile}
          className={styles.inputPicture}
        />
        {profilePicture && (
          <img
            alt='not found'
            src={URL.createObjectURL(profilePicture)}
            width={'146px'}
            height={'174px'}
            className={`${styles.userImg} ${
              showIcons ? styles['userImg--hover'] : ''
            }`}
            onMouseEnter={onMouseEnterHandler}
            onMouseLeave={onMouseLeaveHandler}
          />
        )}

        <div
          className={`${styles.uploadImageIcons} ${
            showIconsComponent ? styles['uploadImageIcons--show'] : ''
          }`}
          onMouseEnter={onMouseEnterHandler}
          onMouseLeave={onMouseLeaveHandler}
        >
          <SVGWrapper
            markup={profilePictureImageIcon}
            color={`${showIcons ? 'white' : '#633cff'}`}
          />
          <p className={`${showIcons ? `${styles.showActive}` : ''}`}>
            {profilePictureImagePlaceholder}
          </p>
        </div>
      </label>

      <p className={styles['profilePicture--instructions']}>
        {profilePictureImageInstructions}
      </p>
    </Card>
  );
};
