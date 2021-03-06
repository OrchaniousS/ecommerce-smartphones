import React from "react"
import cx from "classnames"

import { Avatar, Typography } from "@material-ui/core"

import styles from "./PhoneHolder.module.css"

const BadgeHolder = ({
  classes,
  phoneName,
  phonePrice,
  phoneImg,
  phoneScreenSize,
}) => {
  {
    /* 
    <Typography gutterBottom={true} className={styles.cardContainer}>
        
        <Typography
        className={styles.cardContainerHeader}
        gutterBottom={true}
        align="center"
        variant="body1"
      >
        <div className={styles.phoneName}>
          {phoneName}
          <div>{phoneScreenSize}</div>
        </div>
        <div className={styles.phonePrice}>{phonePrice}</div>
      </Typography>
    </Typography>
    
    */
  }

  return (
    <Avatar
      className={cx(classes.medium, styles.phoneImage)}
      // fallback="true"
      variant="square"
      alt={phoneName}
      src={phoneImg}
    />
  )
}

export default BadgeHolder
