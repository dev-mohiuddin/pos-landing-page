import { Suspense } from 'react'
import LegalContent from './LegalContent'

export default function LegalPage () {
  return (
    <Suspense
      fallback={
        <div className='text-center py-10 text-gray-500'>
          Loading legal page...
        </div>
      }
    >
      <LegalContent />
    </Suspense>
  )
}
