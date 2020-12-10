import React, { useEffect, useState } from "react"
import cx from "classnames"
import { Card, Typography } from "@material-ui/core"
import InfoIcon from "@material-ui/icons/Info"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import { makeStyles } from "@material-ui/core/styles"

import PhoneHolder from "./phone/PhoneHolder"
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
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}))

const phonesPerLoad = 15
let phoneArrayPerLoad = []

const Smartphones = () => {
  const classes = useStyles()
  const [phonesToShow, setPhonesToShow] = useState([])
  const [loadMore, seLoadMore] = useState(15)

  const loopPhonesSlice = (start, end) => {
    const slicedPhones = phoneData.slice(start, end)
    phoneArrayPerLoad = [...phoneArrayPerLoad, ...slicedPhones]
    setPhonesToShow(phoneArrayPerLoad)
  }

  useEffect(() => {
    loopPhonesSlice(0, phonesPerLoad)
  }, [])

  const handleShowMorePhones = () => {
    loopPhonesSlice(loadMore, loadMore + phonesPerLoad)
    seLoadMore(loadMore + phonesPerLoad)
    window.scrollTo(0, 9999)
  }

  let phoneArray = phonesToShow.map(
    ({ phoneName, phoneScreenSize, phonePrice, phoneImg, phoneSpec }, i) => (
      <Card key={i} className={cx(classes.root, styles.cardContainer)}>
        <PhoneHolder
          classes={classes}
          className={styles.badgeHolder}
          phoneName={phoneName}
          phonePrice={phonePrice}
          phoneImg={phoneImg}
          phoneScreenSize={phoneScreenSize}
        />
        <Typography align="right" variant="body1" className={classes.root}>
          <div className={styles.cardDetailsContainer}>
            <div className={styles.cardDetailsTop}>
              <div className={styles.cardDetailsTitle}>
                <InfoIcon />
                Details
              </div>
              <div className={styles.cardDetailsPrice}>
                Cart <AddCircleIcon />
              </div>
            </div>
            <span className={styles.cardSpecs}>{phoneSpec}</span>
          </div>
        </Typography>
      </Card>
    )
  )

  return (
    <>
      <div className={styles.smartphonesContainer}>{phoneArray}</div>
      {phonesPerLoad === phoneData.length ? null : (
        <button
          className={styles.loadMoreButton}
          onClick={() => handleShowMorePhones()}
        >
          Load More
        </button>
      )}
    </>
  )
}

export default Smartphones
