import { Modal, Paragraph } from '@okmtyuta/amatelas-react/server'
import { cookies } from 'next/headers'

const SignedInPage = () => {
  const accessToken = cookies().get('accessToken')?.value
  return (
    <Modal open>
      YOUR ACCESS TOKEN IS: <Paragraph style={{ wordBreak: 'break-all' }}>{accessToken}</Paragraph>
    </Modal>
  )
}

export default SignedInPage
