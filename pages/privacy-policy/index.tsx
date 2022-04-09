import Link from 'next/link'
import Layout, { Container } from 'src/components/layout'
import {
  CommonRules,
  GoodsReturn,
  PersonalDataGoal,
  PersonalDataTerms,
  PersonalDataProtection,
  PolicyChange,
  FinalTerms
} from 'src/components/privacy-policy'
import styles from 'styles/PrivacyPage.module.css'

export default function PrivacyPolicyPage() {
  return (
    <Layout title='Политика конфиденциальности'>
      <Container>
        <article className={ styles.article }>
          <h1 className={ styles.mainTitle }>ПОЛИТИКА защиты и обработки персональных данных  ООО «King Giros»</h1>
          <ol>
            <CommonRules />
            <GoodsReturn />
            <PersonalDataGoal />
            <PersonalDataTerms />
            <PersonalDataProtection />
            <PolicyChange />
            <FinalTerms />
          </ol>
        </article>
      </Container>
    </Layout>
  )
}
