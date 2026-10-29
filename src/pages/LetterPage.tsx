import Page from '../components/Page'
import BackLink from '../components/BackLink'
import FinalLetter from '../components/FinalLetter'

export default function LetterPage() {
  return (
    <Page className="centered letter-page">
      <BackLink to="/chapters" label="Chapters" />
      <FinalLetter />
    </Page>
  )
}
