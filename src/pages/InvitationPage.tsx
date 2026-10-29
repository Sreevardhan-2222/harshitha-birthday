import { useNavigate } from 'react-router-dom'
import Page from '../components/Page'
import StoryInvitation from '../components/StoryInvitation'
import BackLink from '../components/BackLink'

export default function InvitationPage() {
  const navigate = useNavigate()
  return (
    <Page className="centered">
      <BackLink to="/birthday" label="Birthday wishes" />
      <StoryInvitation
        onRead={() => navigate('/chapters')}
        onDecline={() => navigate('/birthday', { state: { closed: true } })}
      />
    </Page>
  )
}
