import React from "react"

import { Avatar, Typography } from "@material-ui/core"

import styles from "./badge.module.css"

const BadgeHolder = ({
  classes,
  className,
  phoneName,
  phonePrice,
  phoneImg,
  phoneScreenSize,
}) => {
  return (
    <Typography gutterBottom={true} className={styles.cardContainer}>
      <Avatar
        className={classes.large}
        fallback="true"
        variant="square"
        alt={phoneName}
        src={phoneImg}
      />
      <Typography
        className={styles.cardContainerHeader}
        gutterBottom={true}
        align="center"
        variant="body1"
      >
        <div className={styles.phoneName}>
          {phoneName}
          <span>{phoneScreenSize}</span>
        </div>
      </Typography>
    </Typography>
  )
}

export default BadgeHolder
