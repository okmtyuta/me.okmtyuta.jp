import { Progress } from '@okmtyuta/amatelas/server'
import styles from './loading.module.css'

const Loading = () => {
  return (
    <div className={styles['loading']}>
      <Progress color="danger" />
    </div>
  )
}

export default Loading
