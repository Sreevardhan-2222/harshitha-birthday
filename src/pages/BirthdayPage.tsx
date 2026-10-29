import { useLocation, useNavigate } from 'react-router-dom'
import Page from '../components/Page'
import BirthdayReveal from '../components/BirthdayReveal'

export default function BirthdayPage() {
  const navigate = useNavigate()
  const closed = Boolean((useLocation().state as { closed?: boolean } | null)?.closed)
  return (
    <Page theme="birthday">
      <BirthdayReveal closed={closed} onContinue={() => navigate('/invitation')} />
    </Page>
  )
}
