import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Page from '../components/Page'
import StoryInvitation from '../components/StoryInvitation'
import BackLink from '../components/BackLink'
import { Petals } from '../components/Botanical'

export default function InvitationPage() {
  const navigate = useNavigate()
  const [asking, setAsking] = useState(false)
  return (
    <Page className="centered" mood={asking ? 'sad' : undefined}>
      {asking && <Petals variant="sad" count={10} />}
      <BackLink to="/birthday" label="Birthday wishes" />
      <StoryInvitation
        asking={asking}
        onAskingChange={setAsking}
        onRead={() => navigate('/chapters')}
        onDecline={() => navigate('/birthday', { state: { closed: true } })}
      />
    </Page>
  )
}
