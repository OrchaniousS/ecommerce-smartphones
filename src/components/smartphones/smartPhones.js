import React from "react"
import cx from "classnames"
import { Card, Typography } from "@material-ui/core"
import InfoIcon from "@material-ui/icons/Info"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import { makeStyles } from "@material-ui/core/styles"

import BadgeHolder from "./Badge/badge"
import phoneData from "../../data/smartPhones.json"
import styles from "./smartPhones.module.css"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}))

const Smartphones = () => {
  const classes = useStyles()

  let phoneArray = phoneData.map(
    ({ phoneName, phoneScreenSize, phonePrice, phoneImg, phoneSpec }) => (
      <Card key={phoneName} className={cx(classes.root, styles.cardContainer)}>
        <BadgeHolder
          classes={classes}
          className={styles.badgeHolder}
          phoneName={phoneName}
          phonePrice={phonePrice}
          phoneImg={phoneImg}
          phoneScreenSize={phoneScreenSize}
        />
        <Typography
          gutterBottom={true}
          align="right"
          variant="body1"
          className={classes.root}
        >
          <div className={styles.cardDetailsContainer}>
            <div className={styles.cardDetailsTop}>
              <div className={styles.cardDetailsTitle}>
                <InfoIcon />
                Details
              </div>
              <div className={styles.cardDetailsPrice}>Price {phonePrice}</div>
            </div>
            <div className={styles.cardDetails}>{phoneSpec}</div>
          </div>
          <div className={styles.cartButton}>
            Cart <AddCircleIcon />
          </div>
        </Typography>
      </Card>
    )
  )

  return (
    <>
      <div className={styles.smartphonesContainer}>{phoneArray}</div>
    </>
  )
}

export default Smartphones
