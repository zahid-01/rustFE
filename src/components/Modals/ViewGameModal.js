import React from 'react'
import styles from './ViewGame.module.css'
import cross from '../../pages/Assets/Close.png'
import kid from '../../pages/Assets/kid.png'
import cartoon from '../../pages/Assets/cartoon.png'
import icon1 from '../../pages/Assets/3dicons (1).png'
import icon2 from '../../pages/Assets/3dicons (2).png'
import icon3 from '../../pages/Assets/3dicons (3).png'

const ViewGameModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null
  return (
    <div className={styles.viewmodaloverlay}>
      <div className={styles.viewupperdiv}>
        <p>Join Flip</p>
        <img src={cross} onClick={onClose} />
      </div>
      <div className={styles.lowerdiv}>
        <div className={styles.imagesdiv}>
          <div className={styles.kid}>
            <img src={kid} />
            <p className={styles.nameBasit}>Basit Bashir</p>
            <div className={styles.H}>H</div>
          </div>

          <p className={styles.textActive}>Active</p>
          <div className={styles.cartoon}>
            <img src={cartoon} />
            <p className={styles.nameZahid}>Zahid Hussain</p>
            <div className={styles.T}>T</div>
          </div>
        </div>
        <div className={styles.itemsdiv}>
          <div className={styles.leftitemdiv}><span>4 items</span> <span>$12.3</span> <span>47.5%</span> </div>
          <div className={styles.rightitemdiv}><span>5 items</span> <span>$12.3</span> <span>47.5%</span> </div>
        </div>
        <div className={styles.allimagesdiv}>
          <div className={styles.leftimagesdiv}>
            <div> <img src={icon1} />
              <span>$4.3</span></div>
            <div> <img src={icon2} />
              <span>$4.3</span></div>
            <div> <img src={icon3} />
              <span>$4.3</span></div>
            <div>  <img src={icon1} />
              <span>$4.3</span></div>
          </div>
          <div className={styles.rightimagesdiv}>
            <div><img src={icon1} />
              <span>$4.3</span>
            </div>
            <div> <img src={icon2} />
              <span>$4.3</span></div>
            <div>   <img src={icon3} />
              <span>$4.3</span></div>
            <div><img src={icon1} />
              <span>$4.3</span></div>
            <div> <img src={icon3} />
              <span>$4.3</span></div>
          </div>
        </div>
        <div className={styles.justnow}>Just now</div>
      </div>
    </div>


  )
}

export default ViewGameModal